"use client";
import React from "react";
import { profileNavMenu } from "@/constants/profileNavMenu.constants";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import Link from "next/link";
import Logout from "./Logout";
import { usePathname } from "next/navigation";

const ProfileNavMenu = () => {
  const pathName = usePathname();
  return (
    <div className="transition-all">
      {profileNavMenu.slice(0, -1).map((item, index) => (
        <div className="flex gap-5 w-full " key={index}>
          <Link
            href={item?.link}
            className={`flex items-center gap-2 py-4 px-7 my-2 rounded-full group w-full hover:bg-gradient-primary-light transition-all ${
              pathName.startsWith(item?.link) ? "bg-gradient-primary-light" : ""
            }`}
          >
            <div className="w-6 h-6">
              <item.icon
                stroke={1}
                className={`${
                  pathName === item?.link
                    ? "hidden"
                    : "block group-hover:hidden"
                }`}
              />
              <GenerateGradientIcon
                IconComponent={item.icon}
                className={`${
                  pathName === item?.link ? "block" : "hidden group-hover:block"
                }`}
              />
            </div>
            <span
              className={`text-base ml-3 ${
                pathName === item?.link
                  ? "text-gradient-primary font-semibold"
                  : ""
              } group-hover:text-gradient-primary group-hover:font-semibold`}
            >
              {item.name}
            </span>
          </Link>
        </div>
      ))}{" "}
      <Logout />
    </div>
  );
};

export default ProfileNavMenu;
