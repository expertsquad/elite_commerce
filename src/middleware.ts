import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { server_api } from "./constants";

// Middleware function to check authorization
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const res = await fetch(server_api + "/user/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${accessToken}`,
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIycERoVjdmazhNIiwiX2lkIjoiNjYwOWE4NjY2NTJhZmQ2MDU2Y2RjNWQ4IiwiZnVsbE5hbWUiOiJBYmR1bCBrYXJpbSIsInJvbGUiOiJBZG1pbiIsImVtYWlsIjoibmlyaW1vbnBjQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiNjU0NTY0MzUiLCJpc1ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MTc2NzY3NTcsImV4cCI6MTcxNzc2MzE1N30"}`,
    },
  });

  const data = await res.json();

  if (!data || data?.success !== true) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profiles"],
};
