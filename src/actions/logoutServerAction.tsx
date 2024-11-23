"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutServerAction = () => {
  // Remove the accessToken cookie
  cookies().delete("accessToken");

  // Redirect to the login page or another route
  redirect("/");
};
