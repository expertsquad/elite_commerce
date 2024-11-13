"use client";
import { bottomNavMenus } from "@/constants/mainMenus.constants";
import Link from "next/link";
import React from "react";
import ProfilePhotoOrIcon from "./ProfilePhotoOrIcon";
import SmallMenuItem from "./SmallMenuItem";

const BottomNavSmallDevice = () => {
  return (
    <div className="fixed bottom-0 z-20 h-16 md:hidden flex bg-white w-full justify-around items-center text-sm">
      {bottomNavMenus?.map((menu, index) => (
        <SmallMenuItem menu={menu} key={index} />
      ))}
      <Link
        href="/profile/dashboard"
        className={`"h-16 w-16 rounded-full flex justify-center items-center`}
      >
        <ProfilePhotoOrIcon />
      </Link>
    </div>
  );
};

export default BottomNavSmallDevice;
