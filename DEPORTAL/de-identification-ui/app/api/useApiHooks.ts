import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../utils/apiService";

// Generic hook for GET requests
export const useGet = <TData>(
  url: string,
  options: UseQueryOptions<TData, Error> & {
    headers?: any;
  },
): UseQueryResult<TData, Error> => {
  console.log('useGet - URL:', url);
  console.log('useGet - URL type:', typeof url);
  
  return useQuery<TData, Error>({
    retry: 3, // Retry failed requests 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    refetchOnReconnect: true, // Refetch when connection is restored
    refetchInterval: false, // Disable automatic refetching
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    ...options,
    queryKey: options?.queryKey || [url],
    queryFn: () => {
      console.log('useGet queryFn - URL:', url);
      return getRequest<TData>(url, options?.headers);
    },
  });
};

// Generic hook for POST requests
export const usePost = <TData, TVariables = any>(
  url: string | ((variables: TVariables) => string),
  options?: UseMutationOptions<TData, Error, TVariables> & {
    headers?: any;
  },
): UseMutationResult<TData, Error, TVariables> => {
  return useMutation<TData, Error, TVariables>({
    ...options,
    mutationFn: (variables: TVariables) => {
      const resolvedUrl = typeof url === "function" ? url(variables) : url;
      return postRequest<TData>(resolvedUrl, variables, options?.headers);
    },
  });
};

// Generic hook for PUT requests
export const usePut = <TData, TVariables = any>(
  url: string | ((variables: TVariables) => string),
  options?: UseMutationOptions<TData, Error, TVariables> & {
    headers?: any;
  },
): UseMutationResult<TData, Error, TVariables> => {
  return useMutation<TData, Error, TVariables>({
    ...options,
    mutationFn: (variables: TVariables) => {
      const resolvedUrl = typeof url === "function" ? url(variables) : url;
      return putRequest<TData>(resolvedUrl, variables, options?.headers);
    },
  });
};

export const useDelete = <TData, TVariables = any>(
  url: string | ((variables: TVariables) => string),
  options?: UseMutationOptions<TData, Error, TVariables> & {
    headers?: any;
  },
): UseMutationResult<TData, Error, TVariables> => {
  return useMutation<TData, Error, TVariables>({
    ...options,
    mutationFn: (variables: TVariables) => {
      const resolvedUrl = typeof url === "function" ? url(variables) : url;
      return deleteRequest<TData>(resolvedUrl, options?.headers);
    },
  });
};