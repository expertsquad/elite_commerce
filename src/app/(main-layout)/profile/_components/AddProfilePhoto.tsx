"use client";
import Form from "@/Components/Form";
import { IconPhotoEdit } from "@tabler/icons-react";
import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";

const AddProfilePhoto = ({
  profilePhotoUrl,
  handleAction,
}: {
  profilePhotoUrl: string;
  handleAction: (formData: FormData) => Promise<void>;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePhoto", file);
      await handleAction(formData);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;
  else
    return (
      <Fragment>
        <div className="h-28 w-28 text-center border border-primary rounded-full">
          <Image
            alt="Profile Photo"
            height={120}
            src={profilePhotoUrl}
            className="h-full w-full rounded-full object-cover"
            width={120}
          />
        </div>
        <Form handleSubmit={(e: any) => e.preventDefault()}>
          <label
            htmlFor="profilePhoto"
            className="bg-white hover:bg-gradient-primary-light h-7 w-7 flex items-center justify-center rounded-full absolute bottom-0 right-0 cursor-pointer"
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
      </Fragment>
    );
};

export default AddProfilePhoto;
