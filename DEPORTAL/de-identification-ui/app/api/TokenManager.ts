import { deleteCookie, getCookie, setCookie } from "../utils/clientCookieUtils";

class TokenManager {
  private accessToken: string | null = null;

  getToken(): string | null {
    if (!this.accessToken) {
      const tokenFromCookie = getCookie("authToken");
      if (tokenFromCookie && typeof tokenFromCookie === 'string' && tokenFromCookie.trim() !== '') {
        this.accessToken = tokenFromCookie;
      }
    }
    return this.accessToken;
  }

  setToken(token: string): void {
    if (token && typeof token === 'string' && token.trim() !== '') {
      setCookie("authToken", token, 0.2);
      this.accessToken = token;
    } else {
      console.warn('Invalid token provided to setToken:', token);
    }
  }

  clearToken(): void {
    deleteCookie("authToken");
    this.accessToken = null;
  }

  clearRefreshToken(): void {
    deleteCookie("nd-refreshToken");
  }

  logout(): void {
    deleteCookie("nd-refreshToken");
    deleteCookie("authToken");
    deleteCookie("sessionId");
    deleteCookie("user");
    this.accessToken = null;
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    return !!(token && typeof token === 'string' && token.trim() !== '');
  }
}

export const tokenManager = new TokenManager();
