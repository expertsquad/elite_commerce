import React from "react";
import ProfileNavMenu from "./ProfileNavMenu";
import { fetchProtectedData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import AddProfilePhoto from "./AddProfilePhoto";

const ProfileNav = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <div className="bg-image-background p-5 rounded-xl w-full h-fit static md:sticky md:top-20 top-0">
      <div className="md:overflow-auto scrollbar-y-remove h-fit md:h-[calc(100vh-180px)]">
        <div className="flex md:items-center md:justify-center gap-2 md:flex-col flex-row border-b-2 border-black-10 mb-4 py-2 ">
          <div className="relative">
            <AddProfilePhoto
              profilePhotoUrl={server_url + getMe?.data?.profilePhoto}
            />
          </div>
          <div className="flex flex-col gap-2 md:items-center md:justify-center md:mb-4">
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

export default ProfileNav;
