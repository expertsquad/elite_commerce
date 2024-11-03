import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { server_api } from "./constants";
import { fetchData } from "./actions/fetchData";

export async function middleware(request: NextRequest) {
  console.log("Current path:", request.nextUrl.pathname);
  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    const maintenanceData = await fetchData({
      route: "/settings/maintenance",
    });
    const isActiveMaintenance = maintenanceData?.data?.isMaintenanceActive;
    const startTime = maintenanceData?.data?.startTime;
    const currentTime = new Date().toISOString();

    if (isActiveMaintenance && currentTime >= startTime) {
      if (!request.url.includes("/maintenance-mode")) {
        return NextResponse.redirect(new URL("/maintenance-mode", request.url));
      }
      return NextResponse.next();
    }

    if (
      request.nextUrl.pathname.startsWith("/profile") ||
      request.nextUrl.pathname.startsWith("/shipping-info")
    ) {
      if (!accessToken) {
        return NextResponse.redirect(new URL("/login", request.url));
      } else {
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
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/shipping-info/:path*",
    "/((?!maintenance-mode|api|_next|favicon.ico).*)",
  ],
};
