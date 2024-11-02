"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { UserContext } from "@/Provider/UserProvider";
import { server_url } from "@/constants";
import { IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Fragment, useContext } from "react";

const ProfilePhotoOrIcon = () => {
  const { user } = useContext(UserContext);
  const pathName = usePathname();

  const isProfilePath = pathName.startsWith("/profile");

  if (user?.profilePhoto) {
    return (
      <Fragment>
        <div className="relative hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white-transparent shadow-md shadow-black-100 overflow-hidden">
          <Image
            src={server_url + user?.profilePhoto}
            alt="profile photo"
            className="inset-0 h-full w-full object-cover"
            fill
          />
        </div>
        <div className="md:hidden flex flex-col items-center">
          <div className="relative w-5 h-5 rounded-full overflow-hidden">
            <Image
              src={server_url + user?.profilePhoto}
              alt="profile photo"
              className="object-cover inset-0 h-full w-full"
              fill
            />
          </div>
          <span
            className={`text-sm ${isProfilePath ? "text-primary-light" : ""}`}
          >
            Profile
          </span>
        </div>
      </Fragment>
    );
  } else {
    return (
      <GenerateGradientIcon
        IconComponent={IconUserCircle}
        stroke={1.2}
        size={34}
      />
    );
  }
};

export default ProfilePhotoOrIcon;
