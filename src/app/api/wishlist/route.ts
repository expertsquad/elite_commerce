import { updateDataMutation } from "@/actions/updateDataMutation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { products } = await request.json();
  const cookies = request.headers.get("cookie") || "";
  const accessToken = cookies
    .split(";")
    .find((cookie) => cookie.trim().startsWith("accessToken="))
    ?.split("=")[1];

  if (!accessToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const stringifiedProducts = JSON.stringify({ products });
    await updateDataMutation({
      route: "/wishlist/add",
      dataType: "json",
      data: stringifiedProducts,
      formatted: true,
      method: "POST",
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
