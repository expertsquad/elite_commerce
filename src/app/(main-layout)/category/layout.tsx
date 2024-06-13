import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import FilterBySelection from "./_components/FilterBySelection";
import PriceRange from "./_components/PriceRange";
import FilterByColor from "./_components/FilterByColor";
import TopRatingProductCard from "./_components/TopRatingProductCard";
import FilterByAvailableProducts from "./_components/FilterByAvailableProducts";
import ProductFilterByBrands from "./_components/ProductFilterByBrands";
import WidgetCard from "@/Components/WidgetCard";
import CategoryCard from "./_components/CategoryCard";
import FilterModal from "./_components/FilterModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* == Next Breadcrumbs == */}
      <div className="mb-5 md:mb-10">
        <Breadcrumb title="Smart Devices" />
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between md:hidden mb-5">
          <FilterBySelection />
          <FilterModal />
        </div>
        <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto max-w-7xl">
          <div className="lg:col-span-3 md:grid-cols-2 md:col-span-2">
            {children}
          </div>
          <div className="hidden md:block lg:block">
            <div className="">
              <PriceRange />
              <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
              <div>
                <CategoryCard title="CATEGORIES" />
              </div>
              <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
              <FilterByColor />
              <span className="bg-black-10 h-0.5 w-full hidden md:flex my-5 md:my-[30px]"></span>
              <div className="hidden md:block">
                <TopRatingProductCard />
              </div>
              <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
              <FilterByAvailableProducts />
              <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
              <ProductFilterByBrands />
              <span className="bg-black-10 h-0.5 w-full my-5 md:my-[30px] hidden md:flex"></span>
              <div className="hidden md:block">
                <WidgetCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
