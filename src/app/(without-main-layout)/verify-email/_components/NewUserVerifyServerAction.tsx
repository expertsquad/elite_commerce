"use server";

import { updateDataMutation } from "@/actions/updateDataMutation";
import { cookies } from "next/headers";

export const newUserVerifyServerAction = async (dataObj: any) => {
  const res = await updateDataMutation({
    route: "/user/verify-email",
    data: JSON.stringify({ otp: Number(dataObj["otp"]) }),
    method: "PUT",
    formatted: true,
  });
  if (!res?.success) {
    return res;
  }

  if (res?.success) {
    cookies().set("accessToken", res?.data?.accessToken);
    return res;
  }
};
