import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment } from "react";

const FilteredProductsPage = async () => {
  const response = await fetchData({
    route: "/product",
  });

  return (
    <Fragment>
      <FilteredProductsGridView products={response} />
    </Fragment>
  );
};

export default FilteredProductsPage;
