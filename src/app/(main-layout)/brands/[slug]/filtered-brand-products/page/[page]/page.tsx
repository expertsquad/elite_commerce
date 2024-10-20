"use client";
import { fetchData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductApiResponse } from "@/interfaces/product.interface";
import { FilterContext } from "@/Provider/BrandProductFilteringProvider";
import { buildQueryString } from "@/utils/buildQueryString";

import { useContext, useEffect, useState } from "react";

const FilteredBrandProductsPage = ({
  params,
}: {
  params: { slug: string; page: number };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProductApiResponse | null>(null);
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
        page: Number(params.page),
        query: `${query}&${filterQuery}`,
      });
      setProducts(response);
      setIsLoading(false);
    };

    getDataByFetching();
  }, [filter, params]);

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
    <div className="flex flex-col gap-5">
      <span>{products?.data?.length} items found</span>
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {products?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            currentPage={Number(params.page)}
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
