import { getCookie } from "./clientCookieUtils";

export const isAuthenticated = (): boolean => {
  const authToken = getCookie("authToken");
  return !!authToken;
};
