import { fetchData } from "@/actions/fetchData";
import Loading from "@/app/loading";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import React, { Suspense } from "react";

const RelatedProductsByCategory = async ({
  categoryName,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  productId,
}: {
  categoryName: string;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  productId?: string;
}) => {
  const response = await fetchData({
    route: `/product`,
    query: `category.categoryName=${categoryName}&sortBy=totalSoldQuantity`,
    limit: 4,
  });
  const isDataArrayEmpty =
    response?.data && Array.isArray(response.data) && response.data.length === 0
      ? false
      : true;

  const filteredProducts = response?.data?.filter(
    (product: IProduct) => product?._id !== productId
  );

  return (
    <div className="my-10 md:my-[70px]">
      <div className="flex items-center justify-between mb-6">
        {filteredProducts?.length ? (
          <h2 className="text-lg md:text-2xl font-semibold">
            You&apos;ll love this too
          </h2>
        ) : null}
        <Link
          className="text-gradient-primary block md:hidden font-bold"
          href={"/"}
        >
          See All
        </Link>
      </div>

      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5">
          <Suspense fallback={<Loading />}>
            {filteredProducts?.map((product: IProduct) => {
              return (
                <div
                  className="grid grid-cols-product-grid grid-rows-product-grid gap-5 justify-around mb-5"
                  key={product?._id}
                >
                  <ProductCard
                    product={product}
                    currencyIcon={currencyIcon}
                    shippingAmount={shippingAmount}
                    isQuickOrderActive={isQuickOrderActive}
                  />
                </div>
              );
            })}
          </Suspense>
        </div>
      ) : null}
    </div>
  );
};

export default RelatedProductsByCategory;
