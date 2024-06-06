import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";

export async function generateMetadata() {
  return {
    title: "Category | Elite Commerce",
    description: "All categories of products",
  };
}

const CategoryPage = async () => {
  const response = await fetchData({ route: "/product", limit: 20 });
  return (
    <div className="pt-3">
      <div className="max-w-7xl mx-auto p-3">
        {/* <ProductCard /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {response?.data?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
