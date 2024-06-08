import React from "react";
import FilterModal from "./_components/FilterModal";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import FilterBySelection from "./_components/FilterBySelection";

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
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between md:hidden">
          <FilterBySelection />
          <FilterModal filter={filter} />
        </div>
        <div className="md:flex gap-x-5">
          {children}
          <div className="hidden md:block">{filter}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
