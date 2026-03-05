// src/api/apiService.ts
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { tokenManager } from "../api/TokenManager";
import { getCookie, setCookie } from "./clientCookieUtils";
import { toast } from "react-toastify";

const IS_ONPREM = process.env.NEXT_PUBLIC_IS_ONPREM || "";

// Utility function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (IS_ONPREM === "true") {
    return true; // Skip auth check in on-prem mode
  }
  return tokenManager.isTokenValid();
};

// Utility function to handle authentication errors
export const handleAuthError = (error: any): void => {
  console.error('Authentication error:', error);
  
  if (IS_ONPREM === "true") {
    return; // Skip auth handling in on-prem mode
  }
  
  // Clear tokens and redirect to login
  tokenManager.logout();
  
  // Only redirect if we're not already on the login page
  if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
    window.location.href = "/login";
  }
};

// Debug function to check authentication status
export const debugAuthStatus = (): void => {
  console.log('=== Authentication Debug Info ===');
  console.log('IS_ONPREM:', IS_ONPREM);
  console.log('isAuthenticated():', isAuthenticated());
  console.log('tokenManager.getToken():', tokenManager.getToken() ? '***' : 'null');
  console.log('tokenManager.isTokenValid():', tokenManager.isTokenValid());
  console.log('localStorage.getItem("user-email"):', localStorage.getItem("user-email"));
  console.log('document.cookie:', document.cookie);
  console.log('================================');
};

export enum Status {
  SUCCESS = "Success",
  FAILED = "Failed",
}

// Base Axios instance with default headers
const apiClient = axios.create({
  headers: {
    api_version: "v1",
    "Content-Type": "application/json",
  },
});

// Axios request interceptor to add access token
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = tokenManager.getToken();
    if (accessToken && tokenManager.isTokenValid()) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      console.warn('No valid token available for request interceptor');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Axios response interceptor to handle 401 errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    console.log(error);
    
    // Skip token refresh in on-prem mode
    if (IS_ONPREM === "true") {
      return Promise.reject(error);
    }
    
    if (
      originalRequest &&
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        tokenManager.setToken(newAccessToken);

        if (!originalRequest.headers) {
          originalRequest.headers = new AxiosHeaders();
        }
        originalRequest.headers.set(
          "Authorization",
          `Bearer ${newAccessToken}`,
        );

        return apiClient.request(originalRequest);
      } else {
        // Redirect to login without UI-specific code
        tokenManager.clearRefreshToken();
        tokenManager.clearToken();
        window.location.href = "/login";
        return Promise.reject(
          new Error("Session expired. Please log in again."),
        );
      }
    }
    return Promise.reject(error);
  },
);

const apiClientNoIntercep = axios.create({
  headers: {
    api_version: "v1",
    "Content-Type": "application/json",
  },
});

export const refreshAccessToken = async (): Promise<string | null> => {
  // Skip token refresh in on-prem mode
  if (IS_ONPREM === "true") {
    return null;
  }
  
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_AUTH_URL}refresh_token/`,
      { session_id: getCookie("sessionId") },
      {
        headers: {
          api_version: "v1",
          "Content-Type": "application/json",
        },
        // withCredentials: true, // Ensures cookies are sent with the request
      },
    );

    const newAccessToken = response.data.access_token;
    if (response.data.refresh_token) {
      setCookie("nd-refreshToken", response.data.refresh_token, 0.5);
    }

    tokenManager.setToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null; // Return null if refresh fails
  }
};

// API service functions
export const postRequest = async <T>(
  url: string,
  data: any,
  headers?: any,
  withCredentials: boolean = false,
  useInterceptor: boolean = true,
): Promise<T> => {
  try {
    let client = apiClientNoIntercep;
    if (useInterceptor) {
      client = apiClient;
    }
    const response: AxiosResponse<T> = await client.post(url, data, {
      headers: {
        ...headers,
        ...getCustomHeaders(),
      },
      withCredentials,
    });
    // Axios already handles 4xx and 5xx status codes by throwing errors
    // Only successful responses (2xx) reach this point
    const res = response.data;
    return res;
  } catch (error: any) {
    handleError(error);
    // Let the error propagate to be handled by React Query or the component
    throw parseErrorMessage(error);
  }
};

export const getCustomHeaders = () => {
  const token = tokenManager.getToken();
  const headers: any = {
    user_id: localStorage.getItem("user-email"),
  };
  
  if (token && tokenManager.isTokenValid()) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn('No valid token available for API request');
  }
  
  return headers;
};

export const getRequest = async <T>(url: string, headers?: any): Promise<T> => {
  try {
    console.log('getRequest - URL:', url);
    console.log('getRequest - URL type:', typeof url);
    console.log('getRequest - URL length:', url?.length);
    
    if (!url || typeof url !== 'string') {
      throw new Error(`Invalid URL: ${url}`);
    }
    
    // Check if we have a valid token before making the request
    if (!isAuthenticated()) {
      console.warn('User not authenticated, redirecting to login');
      handleAuthError(new Error("User not authenticated"));
      throw new Error("User not authenticated");
    }
    
    const response: AxiosResponse<T> = await apiClient.get(url, {
      headers: {
        ...headers,
        ...getCustomHeaders(),
      },
    });
    // Axios already handles 4xx and 5xx status codes by throwing errors
    // Only successful responses (2xx) reach this point
    const res = response.data;
    return res;
  } catch (error: any) {
    console.error('getRequest error:', error);
    
    // If it's a 401 error, try to refresh the token
    if (error.response?.status === 401) {
      console.log('401 error detected, attempting token refresh');
      try {
        const newToken = await refreshAccessToken();
        if (newToken) {
          console.log('Token refreshed successfully, retrying request');
          // Retry the request with the new token
          const response: AxiosResponse<T> = await apiClient.get(url, {
            headers: {
              ...headers,
              ...getCustomHeaders(),
            },
          });
          return response.data;
        } else {
          console.log('Token refresh failed, handling auth error');
          handleAuthError(error);
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        handleAuthError(refreshError);
      }
    }
    
    throw parseErrorMessage(error);
  }
};

export const putRequest = async <T>(
  url: string,
  data: any,
  headers?: any,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.put(url, data, {
      headers: {
        ...headers,
        ...getCustomHeaders(),
      },
    });
    // Axios already handles 4xx and 5xx status codes by throwing errors
    // Only successful responses (2xx) reach this point
    const res = response.data;
    return res;
  } catch (error: any) {
    handleError(error);
    throw parseErrorMessage(error);
  }
};

export const deleteRequest = async <T>(
  url: string,
  headers?: any,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.delete(url, {
      headers: {
        ...headers,
        ...getCustomHeaders(),
      },
    });
    // Axios already handles 4xx and 5xx status codes by throwing errors
    // Only successful responses (2xx) reach this point
    const res = response.data;
    return res;
  } catch (error: any) {
    handleError(error);
    throw parseErrorMessage(error);
  }
};

// Error handling function
const handleError = (error: unknown): void => {
  alert(parseErrorMessageStr(error) || "unkown error occured");
  console.error("API Error:", error);
};

// Removed the alert function to decouple UI from API logic
export const alert = (error: string): void => {
  toast.error(error, {
    position: "top-right",
    className: "bg-red-500 text-white justify-center pl-3 flex",
  });
};

const parseErrorMessage = (error: any): Error => {
  if (error?.response?.data?.detail) {
    if (typeof error?.response?.data?.detailVar === "string")
      return new Error(error.response.data.detail);
    else return new Error(error.message);
  } else if (error?.response?.data?.error) {
    return new Error(error.response.data.error);
  } else if (error?.message) {
    return new Error(error.message);
  } else {
    return new Error("An unknown error occurred");
  }
};

const parseErrorMessageStr = (error: any): string | undefined => {
  console.log(error?.response);
  if (error?.response?.data?.message) {
    if (typeof error?.response?.data?.message === "string")
      return error.response.data.message;
    else return error.message;
  } else if (error?.response?.data?.error) {
    return error.response.data.error;
  } else if (error?.message) {
    return error.message;
  } else {
    return "An unknown error occurred";
  }
};

export async function fetchWithAuthentication(url: string): Promise<string> {
  try {
    const response = await apiClient.get<Blob>(url, {
      headers: {
        ...getCustomHeaders(),
      },
      responseType: "blob",
    });

    // Axios already handles 4xx and 5xx status codes by throwing errors
    // Only successful responses (2xx) reach this point

    // Create and return a Blob URL
    return URL.createObjectURL(response.data);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Unexpected error occurred",
    );
  }
}