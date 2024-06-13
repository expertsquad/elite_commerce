import { fetchData } from "@/actions/fetchData";
import React from "react";
import SortingSection from "../../category/_components/FilterBySelection";
import { IProduct } from "@/interfaces/product.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";

const BrandPage = async ({ params }: { params: { slug: string } }) => {
  const response = await fetchData({
    route: "/product",
    query: `brand.brandName=${params.slug}`,
  });
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span>{response?.meta?.total} Items result found - </span>
        </div>
        <div className="hidden md:block">
          <SortingSection />
        </div>
      </div>
      <div className="grid grid-cols-product-grid gap-5 place-items-center">
        {response?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
