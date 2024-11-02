"use client";
import { IconPhotoEdit } from "@tabler/icons-react";
import React from "react";

const ProfileUploadFileInput = ({
  handleFileInputChange,
}: {
  handleFileInputChange: (formData: FormData) => void | Promise<void>;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePhoto", file);
      handleFileInputChange(formData);
    }
  };

  return (
    <label
      htmlFor="profilePhoto"
      className="bg-white hover:bg-gradient-primary-light h-7 w-7 flex items-center justify-center rounded-full absolute bottom-0 right-0 cursor-pointer"
    >
      <IconPhotoEdit stroke={1} size={20} />
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className="hidden"
        id="profilePhoto"
        name="profilePhoto"
        onChange={handleChange}
      />
    </label>
  );
};

export default ProfileUploadFileInput;
