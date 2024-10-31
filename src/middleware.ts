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

export async function middleware(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;

    // Fetch maintenance data
    const maintenanceData = await fetchData({
      route: "/settings/maintenance",
    });

    const isActiveMaintenance = maintenanceData?.data?.isMaintenanceActive;
    const startTime = maintenanceData?.data?.startTime;
    const currentTime = new Date().toISOString();

    // Maintenance redirect: redirect all users to maintenance page if active
    if (isActiveMaintenance && currentTime >= startTime) {
      if (!request.url.includes("/maintenance-mode")) {
        return NextResponse.redirect(new URL("/maintenance-mode", request.url));
      }
      return NextResponse.next(); // Allow access to /maintenance-mode
    }

    // Authentication check for /profile routes
    if (request.nextUrl.pathname.startsWith("/profile")) {
      if (!accessToken) {
        // Redirect to login if there's no access token
        return NextResponse.redirect(new URL("/login", request.url));
      } else {
        // Validate the access token with the server
        const res = await fetch(server_api + "/user/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.json();

        // If token is invalid, redirect to login
        if (!data || data?.success !== true) {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
    }

    // Allow access to the requested route if all checks pass
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // Fallback response in case of error
    return NextResponse.redirect(new URL("/error", request.url));
  }
}

// Configure middleware to match relevant routes
export const config = {
  matcher: [
    "/profile/:path*", // Covers all routes under /profile/*
    "/((?!maintenance-mode|api|_next|favicon.ico).*)", // All other routes except maintenance, api, and Next.js internals
  ],
};
