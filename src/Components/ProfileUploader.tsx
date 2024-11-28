"use client";
import { server_url } from "@/constants";
import { IFileUploaderProps } from "@/interfaces/fileUploader.interface";
import { IconPhotoPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileUploader = ({
  name,
  url,
  multiple = false,
  accept = ".jpg,.jpeg,.png",
  maxSize = 2,
  className,
  disabled,
  bottomText,
  imageController,
  children,
  onChange,
  overlay,
  overlayIConX,
  overlayIConXClassName,
  childrenMainDiv,
  imgClassName,
  deleteServerImage = false,
  setDeletedImageUrl,
}: IFileUploaderProps) => {
  const [newFile, setNewFile] = useState<any>(null);
  const [newPhoto, setNewPhoto] = useState("");
  const [urlString, setUrlString] = useState(url);
  const [error, setError] = useState("");
  const fileInputRef = React.useRef<HTMLInputElement>(null); // Use a ref for the input field

  useEffect(() => {
    if (url) {
      setUrlString(url);
    }
  }, [url]);

  const checkSizeAndHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    if (
      maxSize &&
      e?.target?.files &&
      e?.target?.files[0]?.size > maxSize * 1024 * 1024
    ) {
      setError(`File size should be less than ${maxSize} MB`);
      return;
    }
    if (onChange) {
      onChange(e);
    }
    if (e.target.files?.length) {
      const newUrl = URL.createObjectURL(e.target.files[0]);
      const uploadedFile = e.target.files[0];
      setNewFile(uploadedFile);
      setNewPhoto(newUrl);
    }
  };

  const handleClearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (deleteServerImage && setDeletedImageUrl && urlString) {
      setDeletedImageUrl(urlString);
      setNewFile(null);
    }
    setNewPhoto("");
    setUrlString("");

    // Clear the input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Trigger onChange with an empty event if needed
    if (onChange) {
      const emptyEvent = {
        target: {
          files: [] as File[],
          value: "",
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(emptyEvent);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center relative cursor-pointer ${className}`}
    >
      <label
        className={`flex flex-col justify-center items-center h-full w-full cursor-pointer`}
      >
        {newPhoto ? (
          <div className={`relative cursor-pointer ${imageController}`}>
            <Image
              src={newPhoto}
              alt={name}
              fill
              className={`${
                imgClassName
                  ? imgClassName
                  : " inset-0 object-cover cursor-pointer"
              } `}
            />
            {/* Overlay */}
            {overlay && (
              <div className="absolute inset-0 bg-black hover:bg-opacity-20 flex justify-center items-center opacity-0 hover:opacity-50 transition-opacity duration-300 text-white">
                <div className="flex flex-col items-center gap-5 justify-center">
                  <p className="text-white text-lg">Upload Image</p>
                  <IconPhotoPlus />
                </div>
                <div
                  onClick={handleClearImage}
                  className="absolute top-2 right-2 text-white cursor-pointer"
                >
                  <IconX />
                </div>
              </div>
            )}
            {overlayIConX && !overlay && (
              <div
                className={`${
                  overlayIConXClassName
                    ? overlayIConXClassName
                    : "absolute inset-0 bg-black hover:bg-opacity-20 flex justify-center items-center opacity-0 hover:opacity-50 transition-opacity duration-300 text-white"
                }`}
              >
                <div
                  onClick={handleClearImage}
                  className="w-fit bg-white-15 rounded-full  "
                >
                  <IconX size={18} stroke={1} className="m-1" />
                </div>
              </div>
            )}
          </div>
        ) : urlString ? (
          <div className={`relative cursor-pointer ${imageController}`}>
            <Image
              src={server_url + urlString}
              alt={name}
              fill
              className={`${
                imgClassName
                  ? imgClassName
                  : " inset-0 object-cover cursor-pointer"
              } `}
            />
            {/* Overlay */}
            {overlay && (
              <div className="absolute inset-0 bg-black hover:bg-opacity-20 flex justify-center items-center opacity-0 hover:opacity-50 transition-opacity duration-300 text-white">
                <div className="flex flex-col items-center gap-5 justify-center">
                  <p className="text-white text-lg">Upload Image</p>
                  <IconPhotoPlus />
                </div>
                <div
                  onClick={handleClearImage}
                  className="absolute top-2 right-2 text-white cursor-pointer"
                >
                  <IconX />
                </div>
              </div>
            )}
            {overlayIConX && !overlay && (
              <div
                className={`${
                  overlayIConXClassName
                    ? overlayIConXClassName
                    : "absolute inset-0 bg-black hover:bg-opacity-20 flex justify-center items-center opacity-0 hover:opacity-50 transition-opacity duration-300 text-white"
                }`}
              >
                <div
                  onClick={handleClearImage}
                  className="w-fit bg-white-15 rounded-full  "
                >
                  <IconX size={18} stroke={1} className="m-1" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={`cursor-pointer ${childrenMainDiv}`}>
            {children ? (
              children
            ) : (
              <div className="flex flex-col items-center text-center">
                <IconPhotoPlus width={30} height={30} stroke={1} />
                <div className="flex flex-col text-center text-sm">
                  <span>Select Your Image</span>
                  {maxSize && (
                    <small className="text-gray-500">
                      Max size:{" "}
                      <span className="text-orange-700"> {maxSize} MB</span>
                    </small>
                  )}
                  <span className="text-fuchsia-800 underline font-medium">
                    Click to browse
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
        <input
          ref={fileInputRef} // Attach the ref to the input field
          className="hidden"
          name={name}
          id={name}
          type="file"
          onChange={checkSizeAndHandleChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
        />
      </label>

      {bottomText && <span className="mt-2 text-danger">{bottomText}</span>}
      {error && <span className="mt-2 text-danger">{error}</span>}
    </div>
  );
};

export default ProfileUploader;
