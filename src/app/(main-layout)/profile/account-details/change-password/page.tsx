import Link from "next/link";
import React from "react";
import PasswordInput from "../../_components/PasswordInput";
import { Button } from "@/Components/Buttons";

const page = () => {
  return (
    <div>
      {/* tab to toggle section */}
      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="py-2  text-lg">
          <Link className=" " href="/profile/account-details">
            Personal Information
          </Link>
        </div>
        <div className="pb-[2px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/account-details/change-password"
          >
            Change Password
          </Link>
        </div>
      </div>

      {/* main contain */}

      <h3 className=" text-gradient-primary font-bold text-lg my-7 ">
        Change Password
      </h3>

      <div>
        <p>Current Password</p>
        <PasswordInput name="currentPassword" />
      </div>

      <div>
        <p>New Password</p>
        <PasswordInput name="newPassword" />
      </div>

      <div>
        <p>Confirm Password</p>
        <PasswordInput name="confimPassword" />
      </div>

      <div className="flex justify-end items-center mt-10">
        <Button className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
          Update Account Details
        </Button>
      </div>
    </div>
  );
};

export default page;
