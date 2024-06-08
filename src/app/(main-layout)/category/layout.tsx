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
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between md:hidden">
          <FilterBySelection />
          <FilterModal filter={filter} />
        </div>
        <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 mx-auto max-w-7xl">
          <div className="lg:col-span-3">{children}</div>
          <div className="hidden md:block">{filter}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
