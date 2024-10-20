import React from "react";
import SortingSection from "../../category/_components/FilterBySelection";
import BrandFilterSection from "../_components/BrandFilterSection";
import BrandFilterModal from "../_components/BrandFilterModal";
import { fetchData } from "@/actions/fetchData";
import { getWidget } from "@/utils/getWidget";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const categories = await fetchData({ route: "/category", limit: 10 });
  const products = await fetchData({
    route: "/product",
    limit: 5,
    query: "sortBy=averageRating",
  });
  const brands = await fetchData({ route: "/brand", limit: 10 });
  const widgetData = await getWidget();

  return (
    <div className="my-10">
      <div className="flex items-center justify-between md:hidden">
        {/* <SortingSection /> */}
        <BrandFilterModal
          params={params}
          products={products?.data}
          categories={categories?.data}
          brands={brands?.data}
          widget={widgetData}
        />
      </div>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
        <div className="hidden md:block lg:block">
          <BrandFilterSection
            brands={brands?.data}
            products={products?.data}
            categories={categories?.data}
            params={params}
            widget={widgetData}
          />
        </div>
        <div className="lg:col-span-3 md:grid-cols-2 md:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
