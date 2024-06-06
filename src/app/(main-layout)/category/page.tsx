import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
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
      {/* == Next Breadcrumbs == */}
      <div className="mb-5 md:mb-10">
        <Breadcrumb title="Smart Devices" />
      </div>
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
