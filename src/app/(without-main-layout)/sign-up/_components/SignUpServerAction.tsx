"use server";

import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import { IErrorMessages } from "@/interfaces/error.interface";
import { cookies } from "next/headers";

export const signUpServerAction = async (formData: FormData) => {
  const result = await postDataUnauthenticatedMutation({
    route: "/user/signup",
    data: formData,
  });

  if (result?.data?.accessToken) {
    cookies().set("accessToken", result?.data?.accessToken);
    return result;
  } else {
    return result as IErrorMessages;
  }
};
