"use client";
import { fetchData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductApiResponse } from "@/interfaces/product.interface";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { buildQueryString } from "@/utils/buildQueryString";
import React, { useContext, useEffect, useState } from "react";

const FilteredProductDynamicPage = ({
  params,
}: {
  params: { page: number };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProductApiResponse | null>(null);
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
      setProducts(response);
      setIsLoading(false);
    };
    getDataByFetching();
  }, [filter, params.page]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.3s]"></div>
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.15s]"></div>
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary"></div>
        </div>
      </div>
    );
  }
  if (products?.data?.length === 0) {
    return (
      <div className="flex text-center mt-20 justify-center items-center">
        <span className="text-lg">No products found</span>
      </div>
    );
  }
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 mb-10">
        <span className="text-lg">
          {products?.data?.length} Items result found
        </span>
        <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
          {products?.data?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <Pagination
          redirectTo="/category/filtered-products/page/"
          currentPage={Number(params.page)}
          totalPages={totalPages || 0}
        />
      </div>
    </div>
  );
};
export default FilteredProductDynamicPage;
