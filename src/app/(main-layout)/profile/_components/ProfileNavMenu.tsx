import React from "react";
import { profileNavMenu } from "@/constants/profileNavMenu.constants";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import Link from "next/link";

const ProfileNavMenu = () => {
  return (
    <div>
      {profileNavMenu.map((item, index) => (
        <div className="flex gap-5 w-[350px]" key={index}>
          <Link
            href={item?.link}
            className="flex items-center gap-2 py-4 px-7 my-2 rounded-full group w-full hover:bg-gradient-primary-light"
          >
            <div className="w-6 h-6">
              <item.icon stroke={1} className="group-hover:hidden" />
              <GenerateGradientIcon
                IconComponent={item.icon}
                className="hidden group-hover:block"
              />
            </div>
            <span className="text-base group-hover:text-gradient-primary group-hover:font-bold  ml-3">
              {item.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileNavMenu;
