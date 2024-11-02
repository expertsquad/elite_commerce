import { fetchData } from "@/actions/fetchData";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { getCurrency } from "@/utils/getCurrency";
import React from "react";

const SingleDynamicCategory = async ({
  searchParams,
  params,
}: {
  searchParams: { category: string };
  params: { page: number };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `category.categoryName=${searchParams?.category}`,
    limit: 20,
    page: Number(params?.page),
  });
  const totalPages = Math.ceil(response?.meta?.total / response?.meta?.limit);
  const currency = await getCurrency();
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  return (
    <div>
      {response?.data?.length > 0 ? (
        <div className="grid grid-cols-product-grid gap-5 place-items-center">
          {response?.data?.map((product: IProduct) => (
            <ProductCard
              key={product?._id}
              product={product}
              currencyIcon={currency}
              isQuickOrderActive={
                quickOrderServices?.data?.isQuickOrderServiceActive
              }
              shippingAmount={quickOrderServices?.data?.deliveryCharge}
            />
          ))}
        </div>
      ) : (
        <ProductEmptyState />
      )}
      {totalPages > 1 ? (
        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={Number(params?.page)}
            redirectTo={`/category/single-category/page`}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleDynamicCategory;
