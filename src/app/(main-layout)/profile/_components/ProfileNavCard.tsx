import Image from "next/image";
import React from "react";
import ProfileNavMenu from "./ProfileNavMenu";
import { fetchProtectedData } from "@/actions/fetchData";
import { server_url } from "@/constants";

const ProfileNavCard = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <div className="bg-gradient-primary-light p-5 rounded-xl w-full h-fit  static md:sticky md:top-5 top-0 ">
      {/* profile image and name start */}
      <div className="  md:overflow-auto scrollbar-y-remove h-fit md:h-[calc(100vh-200px)]">
        <div className="flex md:items-center items-start justify-center gap-2 md:flex-col flex-row border-b-2 border-black-10 mb-4 py-2 ">
          <Image
            alt="Profile Photo"
            height={120}
            src={`${server_url + getMe?.data?.profilePhoto}`}
            className="rounded-full h-28 w-28 object-cover "
            width={120}
          />
          <div className="flex flex-col gap-2 items-center justify-center mb-4">
            <small className="text-sm text-black-50">Hello</small>
            <h3 className="text-lg font-bold">{getMe?.data?.fullName}</h3>
          </div>
        </div>
        {/* profile image and name end */}

        {/* profile nav start */}
        <ProfileNavMenu />
        {/* profile nav end */}
      </div>
    </div>
  );
};

export default ProfileNavCard;
