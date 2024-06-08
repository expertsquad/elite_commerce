import React from "react";

const ProfileLayout = ({
  children,
  leftSideNav,
}: {
  children: React.ReactNode;
  leftSideNav: React.ReactNode;
}) => {
  return (
    <section className="max-w-7xl mx-auto flex  gap-5">
      <aside>{leftSideNav}</aside>

      <section>{children}</section>
    </section>
  );
};

export default ProfileLayout;
