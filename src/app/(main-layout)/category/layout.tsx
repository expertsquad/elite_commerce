import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import SortingSection from "./_components/FilterBySelection";
import FilterModal from "./_components/FilterModal";
import { fetchData } from "@/actions/fetchData";
import FilteringSection from "./_components/FilteringSection";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await fetchData({ route: "/category", limit: 10 });

  const products = await fetchData({
    route: "/product",
    limit: 5,
    query: "sortBy=averageRating",
  });
  const brands = await fetchData({ route: "/brand", limit: 10 });

  return (
    <div>
      {/* == Next Breadcrumbs == */}
      <div className="mb-5 md:mb-10">
        <Breadcrumb title="Smart Devices" />
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between md:hidden mb-5">
          <SortingSection />
          <FilterModal
            categories={categories?.data}
            products={products?.data}
            brands={brands?.data}
          />
        </div>
        <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto max-w-7xl">
          <div className="lg:col-span-3 md:grid-cols-2 md:col-span-2">
            {children}
          </div>
          <div className="hidden md:block lg:block">
            <FilteringSection
              categories={categories?.data}
              products={products?.data}
              brands={brands?.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
