import { appStore, googlePlay } from "@/assets";
import Image from "next/image";
import React from "react";

const AppStoreLink = () => {
  return (
    <div className="flex md:items-end items-center justify-center md:justify-end md:flex-col gap-5 w-full">
      <div className="bg-black text-white rounded-lg px-3.5 py-2.5 flex items-center gap-3.5">
        <div className="relative md:w-[30px] md:h-[34px] w-[20px] h-[24px]  overflow-hidden flex items-center justify-center">
          <Image
            src={googlePlay}
            alt="google play"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="md:text-xs text-[10px] text-white">GET IT ON</span>
          <span className="font-bold md:text-lg text-sm">Google Play</span>
        </div>
      </div>
      <div className="bg-black text-white rounded-lg px-4 py-2.5 flex items-center gap-3.5">
        <div className="relative md:w-[30px] md:h-[34px] w-[20px] h-[24px]  overflow-hidden flex items-center justify-center">
          <Image
            src={appStore}
            alt="google play"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="md:text-xs text-[10px] text-white">
            Download on the{" "}
          </span>
          <span className="font-bold md:text-lg text-sm">App Store</span>
        </div>
      </div>
    </div>
  );
};

export default AppStoreLink;
