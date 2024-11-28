"use client";
import { server_url } from "@/constants";
import { IFileUploaderProps } from "@/interfaces/fileUploader.interface";
import { IconPhotoPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const FileUploader = ({
  name,
  url,
  multiple = false,
  accept = "image/*",
  maxSize,
  error,
  className,
  disabled,
  bottomText,
  uid = 1,
  onChange,
}: IFileUploaderProps) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Initialize previewUrls with url if provided
  useEffect(() => {
    if (url) {
      setPreviewUrls([server_url + url]);
    }
  }, [url]);

  // Handle file change, check size, and set the preview
  const checkSizeAndHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviewUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check file size
        if (maxSize && file.size > maxSize * 1024 * 1024) {
          alert(`File size should be less than ${maxSize} MB`);
          return;
        }

        newPreviewUrls.push(URL.createObjectURL(file));
      }

      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
      if (onChange) {
        onChange(e); // Pass the files to the parent onChange
      }
    }
  };

  // Handle file removal and reset the preview
  const handleRemoveClick = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center ${className}`}
    >
      <label className="flex flex-col justify-center items-center h-full w-full">
        {previewUrls.length > 0 ? (
          previewUrls.map((url, index) => (
            <div key={index} className="relative w-full h-full">
              <div className="h-[70px] w-[90px] relative border border-black-10 rounded-md cursor-pointer">
                <Image
                  src={url}
                  alt={name}
                  fill
                  className="inset-0 object-contain"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 text-danger border rounded-bl-lg bg-white border-black-10 p-1"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemoveClick(index);
                  }}
                >
                  <IconX size={12} stroke={1} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[70px] w-[90px] relative border border-black-10 rounded-md flex items-center justify-center cursor-pointer">
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
      {bottomText && <p className="mt-2 text-gray-500">{bottomText}</p>}
      {error && <p className="mt-2 text-danger">{error}</p>}
    </div>
  );
};

export default FileUploader;
