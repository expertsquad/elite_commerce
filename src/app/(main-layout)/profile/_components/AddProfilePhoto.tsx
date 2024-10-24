"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { IconPhotoEdit } from "@tabler/icons-react";
import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";

const AddProfilePhoto = ({ profilePhotoUrl }: { profilePhotoUrl: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePhoto", file);
      try {
        // Await the mutation and revalidation actions
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
      }
    }
    // Set loading to false after everything completes
    setLoading(false);
  };

  return (
    <Fragment>
      <div
        className={`${
          loading ? "opacity-10 pointer-events-none" : ""
        } h-28 w-28 text-center border border-primary rounded-full`}
      >
        <Image
          alt="Profile Photo"
          height={120}
          src={profilePhotoUrl}
          className="h-full w-full rounded-full object-cover"
          width={120}
        />
      </div>
      <div>
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
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
        </label>
      </div>
    </Fragment>
  );
};

export default AddProfilePhoto;
