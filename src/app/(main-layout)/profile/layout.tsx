import React from "react";
import ProfileNav from "./_components/ProfileNav";
import { fetchData } from "@/actions/fetchData";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `My Profile | ${shopInfo?.data?.shopName}`,
      description: `Manage your account details, order history, and personal settings at ${shopInfo?.data?.shopName}. Customize your experience and keep your information up-to-date.`,
    };
  } catch (error) {
    return {
      title: "My Profile",
      description:
        "Manage your account details, order history, and personal settings. Customize your experience and keep your information up-to-date.",
    };
  }
}

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="main-container grid md:grid-cols-[350px_minmax(0,_1fr)] gap-4 grid-cols-1 p-5 lg:p-0 mb-5">
      {/* <aside className="w-350px">{leftSideNav}</aside> */}
      <ProfileNav />
      <section className="mt-5 md:mt-0">{children}</section>
    </section>
  );
};

export default ProfileLayout;
