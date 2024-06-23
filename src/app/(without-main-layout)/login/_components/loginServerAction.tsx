"use server";

import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import { cookies } from "next/headers";

export const loginServerAction = async (formData: FormData) => {
  const result = await postDataUnauthenticatedMutation({
    route: "/user/login",
    data: formData,
  });

  if (result?.data?.accessToken) {
    cookies().set("accessToken", result?.data?.accessToken);
    return result;
  } else {
    return { success: false, error: result?.error };
  }
};
