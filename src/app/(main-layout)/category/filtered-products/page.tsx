"use client";
import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment, useContext, useEffect, useState } from "react";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";

const FilteredProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    let query: string = "";
    Object.entries(filter).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(
          (item) =>
            (query = query ? query + `&${key}=${item}` : `${key}=${item}`)
        );
      } else {
        query = query ? query + `&${key}=${value}` : `${key}=${value}`;
      }
    });
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 40,
        query: query,
      });
      setProducts(response?.data);
      setIsLoading(false);
    };
    getDataByFetching();
  }, [filter]);

  return (
    <Fragment>
      <FilteredProductsGridView products={products} isLoading={isLoading} />
    </Fragment>
  );
};

export default FilteredProductsPage;
