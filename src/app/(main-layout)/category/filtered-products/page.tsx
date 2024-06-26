import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment } from "react";

const FilteredProductsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
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

  const response = await fetchData({
    route: "/product",
    limit: 40,
    query: query,
  });

  return (
    <Fragment>
      <FilteredProductsGridView products={response} />
    </Fragment>
  );
};

export default FilteredProductsPage;
