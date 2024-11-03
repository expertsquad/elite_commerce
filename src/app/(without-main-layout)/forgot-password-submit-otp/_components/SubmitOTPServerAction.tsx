"use server";
import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import { cookies } from "next/headers";
export const submitOTPServerAction = async ({ data }: any) => {
  const res = await postDataUnauthenticatedMutation({
    route: "/user/forgot-password-otp",
    data: JSON.stringify(data),
    formatted: true,
  });

  if (!res?.success) {
    return res;
  } else {
    cookies().set("accessToken", res.data.accessToken);
    return res;
  }
};
