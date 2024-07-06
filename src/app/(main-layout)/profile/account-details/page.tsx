import React from "react";
import PersonalInformation from "./_components/PersonalInformation";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="pb-[1px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/account-details"
          >
            Personal Information
          </Link>
        </div>
        <div className="text-lg">
          <Link className=" " href="/profile/account-details/change-password">
            Change Password
          </Link>
        </div>
      </div>

      <PersonalInformation />
    </div>
  );
};

export default page;
