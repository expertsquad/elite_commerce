import React from "react";
import BrandCard from "../../../Components/BrandCard";
import { fetchData } from "@/actions/fetchData";
import FilterSort from "./_components/FilterSort";
import Pagination from "./_components/Pagination";
import { IBrand } from "@/interfaces/brand.interface";

// export async function generateStaticParams() {
//   const brands = await fetchData({
//     route: "/brand",
//   });
//   const totalPages = Math.ceil(brands?.meta?.total / brands?.meta?.limit);
//   return [...Array(totalPages)].map((page) => ({
//     page: page.toString(),
//   }));
// }

// export async function getStaticProps() {
//   const brands = await fetchData({
//     route: "/brand",
//   });
//   const totalPages = Math.ceil(brands?.meta?.total / brands?.meta?.limit);
//   return [...Array(totalPages)].map((page) => ({
//     page: page.toString(),
//   }));
// }

const Brand = async (props) => {
  console.log(props);
  const brandData = await fetchData({
    route: "/brand",
  });

  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);
  // console.log();

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
        {/* <Pagination totalPages={totalPages} currentPage={params.page} /> */}
      </div>
    </div>
  );
};

export default Brand;

export async function getStaticProps() {
  const brands = await fetchData({
    route: "/brand",
  });
  const totalPages = Math.ceil(brands?.meta?.total / brands?.meta?.limit);
  return [...Array(totalPages)].map((page) => ({
    page: page.toString(),
  }));
}
