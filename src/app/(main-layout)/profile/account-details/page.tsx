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
        <Link
          className=" text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2 "
          href="/profile/account-details"
        >
          Personal Information
        </Link>

        <div className="text-base pb-2">
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
