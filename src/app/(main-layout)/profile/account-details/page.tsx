import React from "react";
import PersonalInformation from "./_components/PersonalInformation";
import Link from "next/link";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Personal Information | My Profile | ${shopInfo?.data?.shopName}`,
      description: `Manage your personal information, update contact details, and keep your account secure at ${shopInfo?.data?.shopName}. Ensure your profile is up-to-date for a seamless shopping experience.`,
    };
  } catch (error) {
    return {
      title: "Account Details | My Profile",
      description:
        "Manage your personal information, update contact details, and keep your account secure. Ensure your profile is up-to-date for a seamless shopping experience.",
    };
  }
}

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
