import { cookies } from "next/headers";

/**
 * Sets a cookie with the specified name, value, and expiration in days.
 * If the value is null or undefined, the cookie is deleted.
 *
 * @param name - The name of the cookie.
 * @param value - The value to store in the cookie.
 * @param days - The number of days until the cookie expires.
 */
export function setServerCookie(name: string, value: any, days: number): void {
  const cookieStore = cookies();

  if (value === null || value === undefined) {
    cookieStore.delete(name, { path: "/" });
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  cookieStore.set(name, {
    value: JSON.stringify(value),
    expires: date,
    path: "/",
    secure: true,
    sameSite: "strict",
  });
}

/**
 * Retrieves the value of a cookie by name.
 *
 * @param name - The name of the cookie.
 * @returns The parsed value of the cookie, or undefined if not found.
 */
export function getServerCookie(name: string): any | undefined {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get(name)?.value;

  if (!cookieValue) return undefined;

  try {
    return JSON.parse(cookieValue);
  } catch {
    return null;
  }
}

/**
 * Deletes a cookie by name.
 *
 * @param name - The name of the cookie to delete.
 */
export function deleteServerCookie(name: string): void {
  const cookieStore = cookies();
  cookieStore.delete(name, { path: "/" });
}
