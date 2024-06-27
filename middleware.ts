import { NextRequest, NextResponse } from "next/server";
import { authRoutes, publicRoutes } from "./routes";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  //   changing the cookies to the truthy/falsy values depending on whether the cookies is there or not
  const isLoggedIn = !!request.cookies.get("auth_session");

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // checking the routes whether we are going to the authentication page
  if (isAuthRoute) {
    // if already logged in make it so that we are unable to go to the authntication page
    if (isLoggedIn) {
      return Response.redirect(new URL("/settings", nextUrl));
    }
    return null;
  }

  // not giving access to the protected route if the user is not logged in
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
