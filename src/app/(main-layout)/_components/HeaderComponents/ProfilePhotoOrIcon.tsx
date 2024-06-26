"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { UserContext } from "@/Provider/UserProvider";
import { server_url } from "@/constants";
import { IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

const ProfilePhotoOrIcon = () => {
  const { user } = useContext(UserContext);
  if (user?.profilePhoto) {
    return (
      <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white-transparent shadow-md shadow-black-100 overflow-hidden">
        <Image
          src={server_url + user?.profilePhoto}
          alt="profile photo"
          className="w-10 h-10 rounded-full object-cover"
          fill
        />
      </span>
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
