import React from "react";
import { fetchData } from "@/actions/fetchData";
import SortingSection from "../../_components/FilterBySelection";

export async function generateMetadata() {
  return {
    title: "Category | Elite Commerce",
    description: "All categories of products",
  };
}

const CategoryPage = async () => {
  const mostPopularProducts = await fetchData({
    route: "/product",
    query: "sortBy=averageRating&sortOrder=desc",
    limit: 12,
  });

  const newProducts = await fetchData({
    route: "/product",
    query: "sortBy=createdAt&sortOrder=desc",
    limit: 12,
  });
  const lowPriceProducts = await fetchData({
    route: "/product",
    query: "sortBy=variants.sellingPrice&sortOrder=asc",
    limit: 12,
  });
  const highPriceProducts = await fetchData({
    route: "/product",
    query: "sortBy=variants.sellingPrice&sortOrder=desc",
    limit: 12,
  });

  return (
    <div className="">
      <div className=" mb-6">
        <div className="">
          <SortingSection
            mostPopularProducts={mostPopularProducts}
            newProducts={newProducts}
            highPriceProducts={highPriceProducts}
            lowPriceProducts={lowPriceProducts}
            shippingAmount={0}
            isQuickOrderActive={false}
            currency={""}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
