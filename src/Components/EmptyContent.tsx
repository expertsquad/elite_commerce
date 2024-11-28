import { fileWarning } from "@/assets";
import Image from "next/image";
import React from "react";

const EmptyContent = ({ title }: { title: string }) => {
  return (
    <div className="main-container flex items-center justify-center h-[calc(100vh-120px)] overflow-y-auto scrollbar-y-remove">
      <div className="flex flex-col items-center gap-5 justify-center">
        <h1 className="text-black text-[clamp(30px,2.5vw,40px)] font-semibold">
          {title}
        </h1>
        <p className="text-center text-[clamp(14px,2.5vw,18px)] text-black-80">
          Please Add {title} you from{" "}
          <span className="text-primary-light underline">Page</span> menu on the
          dashboard, or
          <br /> you can disable this page.
        </p>
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={fileWarning}
            alt="file warning"
            fill
            className="object-contain inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyContent;
