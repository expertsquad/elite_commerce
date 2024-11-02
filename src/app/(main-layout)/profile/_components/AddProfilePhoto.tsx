"use client";
import { updateProfilePhoto } from "@/actions/updateProfilePhoto";
import { IconPhotoEdit } from "@tabler/icons-react";
import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";

const AddProfilePhoto = ({ profilePhotoUrl }: { profilePhotoUrl: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePhoto", file);

      // Call the server action without async/await
      updateProfilePhoto(formData)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error("An error occurred during the update:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
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
