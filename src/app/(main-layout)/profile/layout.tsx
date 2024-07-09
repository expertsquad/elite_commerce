import React from "react";
import ProfileNav from "./_components/ProfileNav";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="main-container grid md:grid-cols-[350px_minmax(0,_1fr)] gap-4 grid-cols-1 p-5 lg:p-0 mb-5">
      {/* <aside className="w-350px">{leftSideNav}</aside> */}
      <ProfileNav />
      <section>{children}</section>
    </section>
  );
};

export default ProfileLayout;
