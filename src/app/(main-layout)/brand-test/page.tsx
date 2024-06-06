import React from "react";
import BrandCard from "../../../Components/BrandCard";
import { fetchData } from "@/actions/fetchData";
import FilterSort from "./_components/FilterSort";
import Pagination from "./_components/Pagination";

const BrandTest = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const brandData = await fetchData({ route: "/brand", page: currentPage });

  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);

  return (
    <div className="flex flex-col gap-5 md:gap-7 md:col-span-3">
      <div className="flex items-center justify-between">
        <span className="md:font-semibold md:text-xl text-base">
          {brandData?.meta?.total} Brands Found Here
        </span>
        <div className="">
          <FilterSort />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 overflow-y-auto">
        {brandData?.data?.map(
          (
            brand: {
              brandName: string;
              brandPhoto: string;
              productCount: number;
            },
            index: number
          ) => {
            return <BrandCard brandData={brand} key={index.toString()} />;
          }
        )}
      </div>
      <div>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default BrandTest;
