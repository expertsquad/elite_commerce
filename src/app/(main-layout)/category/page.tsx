import React from "react";
import { fetchData } from "@/actions/fetchData";
import SortingSection from "./_components/FilterBySelection";

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
    limit: 20,
  });

  const newProducts = await fetchData({
    route: "/product",
    query: "sortBy=createdAt&sortOrder=desc",
    limit: 20,
  });
  const lowPriceProducts = await fetchData({
    route: "/product",
    query: "sortBy=variants.sellingPrice&sortOrder=asc",
    limit: 20,
  });
  const highPriceProducts = await fetchData({
    route: "/product",
    query: "sortBy=variants.sellingPrice&sortOrder=desc",
    limit: 20,
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
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
