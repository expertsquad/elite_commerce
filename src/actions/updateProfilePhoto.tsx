"use server";
import { updateDataMutation } from "@/actions/updateDataMutation";
export const updateProfilePhoto = async (formData: FormData) => {
  const response = await updateDataMutation({
    route: "/user/update",
    dataType: "formData",
    data: formData,
    method: "PUT",
    formatted: true,
  });

  return response;
};
