"use server";

import { postDataMutation } from "@/actions/postDataMutation";

export const resetPasswordServerAction = async ({ data }: any) => {
  const res = await postDataMutation({
    route: "/user/reset-password",
    data: JSON.stringify(data),
    formatted: true,
  });

  return res;
};
