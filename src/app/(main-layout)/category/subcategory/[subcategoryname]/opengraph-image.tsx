import { ImageResponse } from "next/server";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export default async function og({
  params,
}: {
  params: { subcategoryname: string };
}) {}
