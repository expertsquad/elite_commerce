import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect("/");

  response.cookies.set("accessToken", "", {
    maxAge: 0,
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return response;
}
