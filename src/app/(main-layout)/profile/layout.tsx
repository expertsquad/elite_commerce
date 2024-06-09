import React from "react";
import ProfileNavCard from "./_components/ProfileNavCard";

const ProfileLayout = ({
  children,
  leftSideNav,
}: {
  children: React.ReactNode;
  leftSideNav: React.ReactNode;
}) => {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-[350px_minmax(0,_1fr)] gap-4 grid-cols-1 p-5 lg:p-0 mb-5">
      {/* <aside className="w-350px">{leftSideNav}</aside> */}
      <ProfileNavCard />
      <section>{children}</section>
    </section>
  );
};

export default ProfileLayout;
