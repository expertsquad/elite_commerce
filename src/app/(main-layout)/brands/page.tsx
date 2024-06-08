import React from "react";
import BrandCard from "../../../Components/BrandCard";
import { fetchData } from "@/actions/fetchData";
import FilterSort from "./_components/FilterSort";
import Pagination from "./_components/Pagination";
import { IBrand } from "@/interfaces/brand.interface";

const Brand = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const currentPage = searchParams?.page ? parseInt(searchParams?.page) : 1;
  // console.log(currentPage);
  const brandData = await fetchData({
    route: "/brand",
    page: currentPage,
  });

  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);

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
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Brand;
