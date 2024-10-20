"use client";
import { server_url } from "@/constants";
import { IFileUploaderProps } from "@/interfaces/fileUploader.interface";
import { IconPhotoPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const FileUploader = ({
  name,
  url,
  multiple = false,
  accept,
  maxSize,
  error,
  className,
  disabled,
  bottomText,
  uid = 1,
}: IFileUploaderProps) => {
  const [newPhoto, setNewPhoto] = useState("");
  const checkSizeAndHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      maxSize &&
      e?.target?.files &&
      e?.target?.files[0]?.size > maxSize * 1024 * 1024
    ) {
      alert(`File size should be less than ${maxSize} MB`);
      return;
    }
    if (e.target.files?.length) {
      const newUrl = URL.createObjectURL(e.target.files[0]);
      setNewPhoto(newUrl);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center relative ${className}`}
    >
      <label
        className={`flex flex-col justify-center items-center h-full w-full`}
      >
        {/* check if data exist or children exist, if so, render the corresponding content */}
        {newPhoto ? (
          <div className="h-[70px] w-[70px] md:w-[80px] relative border border-black-10 rounded-md">
            <Image
              src={newPhoto}
              alt={name}
              fill
              className="inset-0 object-cover p-1.5"
            />
          </div>
        ) : url ? (
          <div className="h-[70px] w-[70px] md:w-[80px] relative border border-black-10 rounded-md">
            <Image
              src={server_url + url}
              alt={name}
              fill
              className="inset-0 object-cover"
            />
          </div>
        ) : (
          <div className="h-[70px] w-[90px] relative border border-black-10 rounded-md flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <IconPhotoPlus width={30} height={30} stroke={1} />
              <span className="text-[10px] text-black-80">Photo & Video</span>
            </div>
          </div>
        )}
        <input
          className="hidden"
          name={name}
          id={uid.toString()}
          type="file"
          onChange={checkSizeAndHandleChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
        />
      </label>
      <p className="mt-2 text-gray-500 ">{bottomText}</p>
    </div>
  );
};

export default FileUploader;
