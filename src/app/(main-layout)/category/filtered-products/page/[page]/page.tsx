"use client";
import { fetchData } from "@/actions/fetchData";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";
import AnimatedLoading from "@/Components/AnimatedLoading";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductApiResponse } from "@/interfaces/product.interface";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { buildQueryString } from "@/utils/buildQueryString";
import { getCurrency } from "@/utils/getCurrency";
import React, { useContext, useEffect, useState } from "react";

const FilteredProductDynamicPage = ({
  params,
}: {
  params: { page: number };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProductApiResponse | null>(null);
  const [activeQucikOrder, setActiveQuickOrder] = useState(false);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [currency, setCurrency] = useState<string>("");
  const { filter } = useContext(FilterContext);

  const totalPages = Math.ceil(
    (products?.meta?.total ?? 0) / (products?.meta?.limit ?? 1)
  );

  useEffect(() => {
    const query = buildQueryString(filter as Record<string, string | string[]>);
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 20,
        query: query,
        page: Number(params.page),
      });
      const quickOrderServices = await fetchData({
        route: "/settings/quick-order-setting",
      });

      const currency = await getCurrency();
      setProducts(response);
      setActiveQuickOrder(quickOrderServices?.data?.isQuickOrderServiceActive);
      setShippingAmount(quickOrderServices?.data?.deliveryCharge);
      setCurrency(currency);
      setProducts(response);
      setIsLoading(false);
    };
    getDataByFetching();
  }, [filter, params.page]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AnimatedLoading />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 mb-10">
        <span className="text-lg">
          {products?.data?.length} Items result found
        </span>
        {products && products?.data?.length > 0 ? (
          <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
            {products?.data?.map((product: IProduct) => (
              <ProductCard
                currencyIcon={currency}
                isQuickOrderActive={activeQucikOrder}
                shippingAmount={shippingAmount}
                key={product?._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <ProductEmptyState />
        )}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            redirectTo="/category/filtered-products/page/"
            currentPage={Number(params.page)}
            totalPages={totalPages || 0}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default FilteredProductDynamicPage;
