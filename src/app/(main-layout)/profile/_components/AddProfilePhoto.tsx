"use client";
import Form from "@/Components/Form";
import { IconPhotoEdit } from "@tabler/icons-react";
import React, { useRef } from "react";

const AddProfilePhoto = ({
  handleAction,
}: {
  handleAction: (formData: FormData) => Promise<void>;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePhoto", file);
      await handleAction(formData);
    }
  };

  return (
    <Form handleSubmit={(e: any) => e.preventDefault()}>
      <label
        htmlFor="profilePhoto"
        className="bg-white h-7 w-7 flex items-center justify-center rounded-full absolute bottom-0 right-0 cursor-pointer"
      >
        <IconPhotoEdit stroke={1} size={20} />
        <input
          type="file"
          className="hidden"
          id="profilePhoto"
          name="profilePhoto"
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
      </label>
    </Form>
  );
};

export default AddProfilePhoto;
