"use client";
import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment, useContext } from "react";
import { FilterContext } from "@/Provider/FilteringProvider";

const FilteredProductsPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { filter, setFilter } = useContext(FilterContext);
  console.log("filter-----", filter);

  let query = "";

  if (searchParams.categoryName) {
    query = `?category.categoryName=${encodeURIComponent(
      searchParams.categoryName
    )}`;
  } else if (searchParams.brand) {
    query = `?brand.brandName=${encodeURIComponent(searchParams.brand)}`;
  } else {
    query = ``;
  }

  // const response = await fetchData({
  //   route: "/product",
  //   limit: 40,
  //   query: query,
  // });

  return (
    <Fragment>
      <FilteredProductsGridView products={{ data: [] }} />
      {/* <FilteredProductsGridView products={response} /> */}
    </Fragment>
  );
};

export default FilteredProductsPage;
