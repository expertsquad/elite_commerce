import React from "react";
import PersonalInformation from "./_components/PersonalInformation";
import Link from "next/link";
import { fetchProtectedData } from "@/actions/fetchData";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-6 items-center border-b border-black-10 justify-start">
        <div className="pb-[1px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-semibold text-base "
            href="/profile/account-details"
          >
            Personal Information
          </Link>
        </div>
        <div className="text-base">
          <Link className=" " href="/profile/account-details/change-password">
            Change Password
          </Link>
        </div>
      </div>

      <PersonalInformation getMe={getMe} />
    </div>
  );
};

export default page;
