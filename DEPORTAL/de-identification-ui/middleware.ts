import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const IS_ONPREM = process.env.NEXT_PUBLIC_IS_ONPREM || "";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get("authToken")?.value;
  const isAuth = Boolean(authToken);

  // On-Prem logic: skip auth, allow dashboard and clients routes
  if (IS_ONPREM === "true") {
    // Allow dashboard and client routes (including sub-routes)
    const allowed = ["/dashboard", "/clients"];
    
    // Check if pathname starts with any allowed route
    const isAllowed = allowed.some(route => pathname.startsWith(route));
    
    // Also allow root path to redirect to dashboard
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/clients", req.url));
    }
    
    // If not an allowed route, redirect to dashboard
    if (!isAllowed) {
      return NextResponse.redirect(new URL("/clients", req.url));
    }
    
    return NextResponse.next();
  }

  // Public routes
  const publicRoutes = ["/login", "/password-reset"];

  // If not authenticated, redirect to login
  if (!isAuth && publicRoutes.every((r) => !pathname.startsWith(r))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If authenticated and landing on login or root, send to /clients
  if (isAuth && (pathname === "/" || publicRoutes.includes(pathname))) {
    return NextResponse.redirect(new URL("/clients", req.url));
  }

  // Otherwise, proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|images|static).*)"],
};