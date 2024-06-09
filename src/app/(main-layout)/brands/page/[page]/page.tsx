import React from "react";
import { fetchData } from "@/actions/fetchData";
import FilterSort from "../../_components/FilterSort";
import BrandCard from "@/Components/BrandCard";
import Pagination from "../../_components/Pagination";

const BrandsPage = async ({ params }: { params: { page: number } }) => {
  const brandData = await fetchData({
    route: "/brand",
    page: params.page,
  });

  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);

  console.log("dynamic::::::::", params);

  return (
    <div className="flex flex-col gap-5 md:gap-7 md:col-span-3 ">
      <div className="flex items-center justify-between">
        <span className="md:font-semibold md:text-xl text-base">
          {brandData?.meta?.total} Brands Found Here
        </span>
        <div className="">
          <FilterSort />
        </div>
      </div>
      <div className="grid grid-cols-brand-card-grid gap-5">
        {brandData?.data?.map(
          (brand: {
            _id: string;
            brandName: string;
            brandPhoto: string;
            productCount: number;
          }) => {
            return <BrandCard brand={brand} key={brand?._id} />;
          }
        )}
      </div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={1}
          redirectTo="/brands/page"
        />
      </div>
    </div>
  );
};

export default BrandsPage;

export async function generateStaticParams() {
  const { meta } = await fetchData({
    route: "/brand",
  });
  const totalPages = Math.ceil(meta.total / meta.limit);

  return Array.from({ length: totalPages }).map((_, i) => ({
    params: { page: i + 1 },
  }));
}
