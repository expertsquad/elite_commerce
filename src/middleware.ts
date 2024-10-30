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

  // Check for active maintenance mode
  const maintenanceData = await fetchData({
    route: "/settings/maintenance",
  });
  const isActiveMaintenance = maintenanceData?.data?.isMaintenanceActive;
  const startTime = maintenanceData?.data?.startTime;
  const currentTime = new Date().toISOString();

  // Redirect to maintenance mode if maintenance is active and the route isn't "/maintenance-mode"
  if (isActiveMaintenance && currentTime >= startTime) {
    if (!request.url.includes("/maintenance-mode")) {
      return NextResponse.redirect(new URL("/maintenance-mode", request.url));
    }
  }

  // If no access token, redirect to login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Check if the user is authenticated
  const res = await fetch(server_api + "/user/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();

  // Redirect to login if authentication fails
  if (!data || data?.success !== true) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to the requested route if all checks pass
  return NextResponse.next();
}

// Configure middleware to run on all routes that should be restricted during maintenance
export const config = {
  matcher: [
    "/profile",
    "/profile/dashboard",
    "/profile/order-history",
    "/profile/account-details",
    "/profile/account-details/change-password",
    "/profile/address",
    "/profile/address/billing-address",
    "/profile/review",
    "/profile/review/review-history",
    "/maintenance-mode", // Add this to allow access to the maintenance page
  ],
};
