import { fetchData } from "@/actions/fetchData";
import Loading from "@/app/loading";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import React, { Suspense } from "react";

const RelatedProductsByCategory = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const response = await fetchData({
    route: `/product`,
    query: `category.categoryName=${categoryName}`,
  });
  const isDataArrayEmpty =
    response?.data && Array.isArray(response.data) && response.data.length === 0
      ? false
      : true;

  return (
    <div className="my-10 md:my-[70px]">
      <div className="flex items-center justify-between mb-6">
        {isDataArrayEmpty && (
          <h2 className="text-lg md:text-2xl font-semibold">
            You’ll love this too
          </h2>
        )}
        <Link
          className="text-gradient-primary block md:hidden font-bold"
          href={"/"}
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5">
        <Suspense fallback={<Loading />}>
          {response?.data?.slice(0, 8)?.map((product: IProduct) => {
            return (
              <div
                className="grid grid-cols-product-grid grid-rows-product-grid gap-5 justify-around mb-5"
                key={product?._id}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default RelatedProductsByCategory;
