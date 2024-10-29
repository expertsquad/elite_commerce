"use server";

import { postDataMutation } from "@/actions/postDataMutation";

export const requestForOTP = async (formData: FormData) => {
  const res = await postDataMutation({
    route: "/user/forgot-password",
    data: formData,
  });
  return res;
};
