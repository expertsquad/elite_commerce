// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { server_api } from "./constants";
// import { fetchData } from "./actions/fetchData";

// // Middleware function to check authorization
// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("accessToken")?.value;

//   if (!accessToken) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   const maintainance = await fetchData({
//     route: "/settings/maintenance",
//   });
//   const isActiveMaintenance = maintainance?.data?.isMaintenanceActive;
//   const startTime = maintainance?.data?.startTime;
//   const currentTime = new Date().toISOString();

//   if (isActiveMaintenance && currentTime >= startTime) {
//     if (!request.url.includes("/maintenance-mode")) {
//       return NextResponse.redirect(new URL("/maintenance-mode", request.url));
//     }
//   }

//   const res = await fetch(server_api + "/user/me", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   const data = await res.json();

//   if (!data || data?.success !== true) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/profile",
//     "/profile/dashboard",
//     "/profile/order-history",
//     "/profile/account-details",
//     "/profile/account-details/change-password",
//     "/profile/address",
//     "/profile/address/billing-address",
//     "/profile/review",
//     "/profile/review/review-history",
//   ],
// };

// ======================My code for middleware.ts =======================//

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { server_api } from "./constants";
import { fetchData } from "./actions/fetchData";

// Middleware function to check authorization and maintenance mode
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const currentPath = new URL(request.url).pathname;

  // Allowed routes during maintenance or without authentication
  const allowedRoutes = ["/login", "/maintenance-mode"];

  // Fetch maintenance settings
  let isActiveMaintenance = false;
  let startTime = "";

  try {
    const maintenance = await fetchData({ route: "/settings/maintenance" });
    isActiveMaintenance = maintenance?.data?.isMaintenanceActive;
    startTime = maintenance?.data?.startTime;
  } catch (error) {
    console.error("Failed to fetch maintenance settings:", error);
  }

  const currentTime = new Date().toISOString();

  // Redirect to maintenance mode if active, and exclude allowed routes
  if (
    isActiveMaintenance &&
    currentTime >= startTime &&
    !allowedRoutes.includes(currentPath)
  ) {
    return NextResponse.redirect(new URL("/maintenance-mode", request.url));
  }

  // Redirect to login if trying to access protected routes without a token
  const protectedRoutes = [
    "/profile",
    "/profile/dashboard",
    "/profile/order-history",
    "/profile/account-details",
    "/profile/account-details/change-password",
    "/profile/address",
    "/profile/address/billing-address",
    "/profile/review",
    "/profile/review/review-history",
  ];

  if (protectedRoutes.includes(currentPath) && !accessToken) {
    if (currentPath !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Check user authorization if accessToken is present
  if (accessToken) {
    try {
      const res = await fetch(server_api + "/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();

      if (!data || data?.success !== true) {
        if (currentPath !== "/login") {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
