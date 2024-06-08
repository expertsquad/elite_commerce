import React from "react";
import FilterBySelection from "../../category/_components/FilterBySelection";
import FilterModal from "../../category/_components/FilterModal";

const Layout = ({
  children,
  brandFilter,
}: {
  children: React.ReactNode;
  brandFilter: React.ReactNode;
}) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between md:hidden">
          <FilterBySelection />
          <FilterModal filter={brandFilter} />
        </div>
        <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto max-w-7xl">
          <div className="hidden md:block lg:block">{brandFilter}</div>
          <div className="lg:col-span-3 md:grid-cols-2 md:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
