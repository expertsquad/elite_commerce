"use client";
import useCustomStyles from "@/utils/useCustomStyles";
import React from "react";

const DescriptionReader = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  useCustomStyles(description);
  return (
    <div
      className={className}
      id="preview"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default DescriptionReader;
