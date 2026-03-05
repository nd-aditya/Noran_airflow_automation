/**
 * Checks if the code is running in the browser.
 */
const isBrowser = typeof window !== "undefined";

/**
 * Sets a cookie with the specified name, value, and expiration in days.
 * If the value is null or undefined, the cookie is deleted.
 *
 * @param name - The name of the cookie.
 * @param value - The value to store in the cookie.
 * @param days - The number of days until the cookie expires.
 */
export function setCookie(name: string, value: any, days: number): void {
  if (!isBrowser) return; // Prevent execution during SSR

  if (value === null || value === undefined) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; `;
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  const serializedValue = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${name}=${serializedValue}; ${expires}; path=/; `;
}

/**
 * Retrieves the value of a cookie by name.
 *
 * @param name - The name of the cookie.
 * @returns The parsed value of the cookie, or undefined if not found.
 */
export function getCookie(name: string): any | undefined {
  if (!isBrowser) return undefined; // Prevent execution during SSR

  const nameEQ = `${name}=`;
  const ca = document?.cookie?.split(";") || [];
  for (let c of ca) {
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      const cookieValue = c.substring(nameEQ.length, c.length);
      try {
        return JSON.parse(decodeURIComponent(cookieValue));
      } catch {
        return null;
      }
    }
  }
  return undefined;
}

/**
 * Deletes a cookie by name.
 *
 * @param name - The name of the cookie to delete.
 */
export function deleteCookie(name: string): void {
  if (!isBrowser) return; // Prevent execution during SSR

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
