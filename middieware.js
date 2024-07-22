import { NextResponse } from "next/server"; // Import NextResponse for handling HTTP responses

/**
 * Middleware function to handle authentication and authorization.
 * It checks if a user is authenticated by verifying the presence of a token
 * in cookies. If the token is missing and the user is trying to access
 * restricted paths, the user is redirected to the login page.
 *
 * @param {Request} req - The incoming HTTP request object
 * @returns {NextResponse} - The HTTP response object
 */
export default async function middleware(req) {
  const { pathname } = new URL(req.url); // Extract the pathname from the request URL
  const excludedPaths = ["/login", "/registration"]; // Paths that do not require authentication

  // Check if the request path is not in the excludedPaths array
  if (!excludedPaths.includes(pathname)) {
    const token = req.cookies.get("token"); // Retrieve the token from cookies

    // If the token is missing, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
  }

  // Continue with the request if the token is present or the path is excluded
  return NextResponse.next();
}

// Configuration for the middleware to match all paths except those specified
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
