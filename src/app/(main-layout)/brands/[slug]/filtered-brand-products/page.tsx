"use client";
import { fetchData } from "@/actions/fetchData";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";
import AnimatedLoading from "@/Components/AnimatedLoading";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductApiResponse } from "@/interfaces/product.interface";
import { FilterContext } from "@/Provider/BrandProductFilteringProvider";
import { buildQueryString } from "@/utils/buildQueryString";
import { getCurrency } from "@/utils/getCurrency";

import { useContext, useEffect, useState } from "react";

const FilteredBrandProductsPage = ({
  params,
}: {
  params: { slug: string };
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
    let query: string = `brand.brandName=${params.slug}`;
    const filterQuery = buildQueryString(
      filter as Record<string, string | string[]>
    );
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 20,
        query: `${query}&${filterQuery}`,
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
  }, [filter, params]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AnimatedLoading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <span>{products?.data?.length} items found</span>
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
        <ProductEmptyState message="No Product Found" />
      )}
      <div>
        {totalPages > 1 ? (
          <Pagination
            currentPage={1}
            totalPages={totalPages}
            redirectTo={`/brands/${params.slug}/filtered-brand-products/page`}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default FilteredBrandProductsPage;
