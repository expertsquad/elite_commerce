import { fetchData } from "@/actions/fetchData";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import React from "react";

const RelatedProductsByCategory = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const response = await fetchData({
    route: `/product`,
    query: `category.categoryName=${categoryName}`,
  });
  return (
    <div className="my-10 md:my-[70px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-2xl font-semibold">
          You’ll love this too
        </h2>
        <Link
          className="text-gradient-primary block md:hidden font-bold"
          href={"/"}
        >
          See All
        </Link>
      </div>
      <div className="flex items-center gap-x-2.5 md:gap-x-5 overflow-x-scroll scrollbar-x-remove">
        {response?.data?.map((product: IProduct) => (
          <div key={product?._id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsByCategory;
