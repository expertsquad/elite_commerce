// /actions/updateProfilePhoto.ts

import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";

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
