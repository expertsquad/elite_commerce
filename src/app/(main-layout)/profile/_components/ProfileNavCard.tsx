import Image from "next/image";
import React from "react";
import ProfileNavMenu from "./ProfileNavMenu";

const ProfileNavCard = () => {
  return (
    <div className="bg-gradient-primary-light p-5 rounded-xl w-full h-[calc(100vh-200px)] sticky top-5 ">
      {/* profile image and name start */}
      <div className="flex md:items-center items-start justify-center gap-2 md:flex-col flex-row border-b-2 border-black-10 mb-4">
        <Image
          alt="Profile Photo"
          height={150}
          src=""
          className="rounded-full"
          width={150}
        />
        <div className="flex flex-col gap-2 items-center justify-center mb-4">
          <small className="text-sm text-black-50">Hello</small>
          <h3 className="text-lg font-bold">Zayed Hossain</h3>
        </div>
      </div>
      {/* profile image and name end */}

      {/* profile nav start */}
      <ProfileNavMenu />
      {/* profile nav end */}
    </div>
  );
};

export default ProfileNavCard;
