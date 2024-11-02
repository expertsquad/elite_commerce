"use server";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { revalidateTagAction } from "./revalidateTag";

export async function updateProfilePhoto(formData: FormData) {
  try {
    await updateDataMutation({
      route: "/user/update",
      dataType: "formData",
      data: formData,
      method: "PUT",
      formatted: true,
    });
    await revalidateTagAction("/user/update");
  } catch (error) {
    console.error("An error occurred during the update:", error);
    throw error;
  }
}
