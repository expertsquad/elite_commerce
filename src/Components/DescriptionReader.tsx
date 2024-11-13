"use client";
import useCustomStyles from "@/utils/useCustomStyles";
import React from "react";

const DescriptionReader = ({ data }: any) => {
  useCustomStyles(data?.data?.content?.data);
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: data?.data?.content?.data }}
    />
  );
};

export default DescriptionReader;
