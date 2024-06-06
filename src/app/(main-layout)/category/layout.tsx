import React from "react";
import FilterModal from "./_components/FilterModal";
import Breadcrumb from "../example-poran/_components/Breadcrumb";

const Layout = ({
  children,
  filter,
}: {
  children: React.ReactNode;
  filter: React.ReactNode;
}) => {
  return (
    <div>
      {/* == Next Breadcrumbs == */}
      <div className="mb-5 md:mb-10">
        <Breadcrumb title="Smart Devices" />
      </div>
      <div className="flex gap-x-5 mx-auto max-w-7xl">
        {children}
        <div className="md:hidden">
          <FilterModal filter={filter} />
        </div>
        <div className="hidden md:block">{filter}</div>
      </div>
    </div>
  );
};

export default Layout;
