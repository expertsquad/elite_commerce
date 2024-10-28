import { fetchData } from "@/actions/fetchData";
import React from "react";
import { IProduct } from "@/interfaces/product.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Pagination from "@/Components/Pagination";
import { getCurrency } from "@/utils/getCurrency";

const BrandProductViewDynamicPage = async ({
  params,
}: {
  params: { slug: string; page: number };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `brand.brandName=${params.slug}`,
    limit: 20,
    page: Number(params?.page),
  });
  const totalPages = Math.ceil(response?.meta?.total / response?.meta?.limit);

  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  const currency = await getCurrency();
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span>{response?.meta?.total} Items result found - </span>
        </div>
        <div className="hidden md:block">{/* <SortingSection /> */}</div>
      </div>
      <div className="grid grid-cols-product-grid gap-5 place-items-center">
        {response?.data?.map((product: IProduct) => (
          <ProductCard
            currencyIcon={currency}
            isQuickOrderActive={
              quickOrderServices?.data?.isQuickOrderServiceActive
            }
            shippingAmount={quickOrderServices?.data?.deliveryCharge}
            key={product?._id}
            product={product}
          />
        ))}
      </div>
      {totalPages > 1 ? (
        <Pagination
          redirectTo={`/brands/${params.slug}/page`}
          currentPage={Number(params?.page)}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default BrandProductViewDynamicPage;
