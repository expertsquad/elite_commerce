"use client";
import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment, useContext, useEffect, useState } from "react";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { IProductApiResponse } from "@/interfaces/product.interface";
import { buildQueryString } from "@/utils/buildQueryString";

const FilteredProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProductApiResponse | null>(null);
  const { filter } = useContext(FilterContext);
  useEffect(() => {
    const query = buildQueryString(filter as Record<string, string | string[]>);
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 20,
        query: query,
      });
      setProducts(response);
      setIsLoading(false);
    };
    getDataByFetching();
  }, [filter]);
  return (
    <Fragment>
      {products && (
        <FilteredProductsGridView products={products} isLoading={isLoading} />
      )}
    </Fragment>
  );
};
export default FilteredProductsPage;
