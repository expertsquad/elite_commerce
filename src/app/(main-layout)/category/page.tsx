import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";
import SortingSection from "./_components/FilterBySelection";

export async function generateMetadata() {
  return {
    title: "Category | Elite Commerce",
    description: "All categories of products",
  };
}

const CategoryPage = async () => {
  const response = await fetchData({ route: "/product", limit: 20 });

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
      <div className="flex items-center justify-between mb-6">
        <div>
          <span>{response?.meta?.total} Items result found - </span>
        </div>
        <div className="hidden md:block">
          <SortingSection
            mostPopularProducts={mostPopularProducts?.data}
            newProducts={newProducts?.data}
            highPriceProducts={highPriceProducts?.data}
            lowPriceProducts={lowPriceProducts?.data}
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-product-grid gap-5 place-items-center">
        {response?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default CategoryPage;
