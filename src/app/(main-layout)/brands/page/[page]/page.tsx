import React from "react";
import { fetchData } from "@/actions/fetchData";
import BrandCard from "@/Components/BrandCard";
import SmallProductCard from "../../_components/SmallProductCard";
import WidgetCard from "@/Components/WidgetCard";
import Pagination from "@/Components/Pagination";
import TopSellingBrandProducts from "../../_components/TopSellingBrandProducts";
import { IBrand } from "@/interfaces/brand.interface";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

const BrandsPage = async ({ params }: { params: { page: number } }) => {
  const brandData = await fetchData({
    route: "/brand",
    page: params.page,
  });

  const totalPages = Math.ceil(brandData?.meta?.total / brandData?.meta?.limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 ">
      <div className="flex flex-col gap-5 md:gap-7 md:col-span-3 ">
        <div className="flex items-center justify-between">
          <span className="md:font-semibold md:text-xl text-base">
            {brandData?.meta?.total} Brands Found Here
          </span>
        </div>
        {brandData?.data?.length > 0 ? (
          <div className="grid grid-cols-brand-card-grid gap-5">
            {brandData?.data?.map((brand: IBrand) => {
              return <BrandCard brand={brand} key={brand?._id} />;
            })}
          </div>
        ) : (
          <ProductEmptyState message="No Brand Found!!" />
        )}
        <div className="my-10">
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={Number(params.page)}
              redirectTo="/brands/page"
            />
          )}
        </div>
      </div>
      <div>
        <div className="hidden lg:flex flex-col gap-7 ">
          {/* To Selling Brands Product */}
          <TopSellingBrandProducts />
          <hr className="border-black-10 hidden md:block" />

          {/* Widget Promotion card */}

          <div className="">
            <WidgetCard />
          </div>
        </div>
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
