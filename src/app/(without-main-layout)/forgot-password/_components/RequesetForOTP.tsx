"use server";
import {
  postDataMutation,
  postDataUnauthenticatedMutation,
} from "@/actions/postDataMutation";
import { cookies } from "next/headers";

export const requestForOTP = async (formData: FormData) => {
  const res = await postDataUnauthenticatedMutation({
    route: "/user/forgot-password",
    data: formData,
  });

  if (!res?.success) {
    return res;
  } else {
    cookies().set("accessToken", res?.data?.resetToken);
    return res;
  }
};
