import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import ProductCard from "./_components/ProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";

const CategoryPage = async () => {
  const response = await fetchData({ route: "/product" });
  console.log(response?.data);
  return (
    <div>
      {/* == Next Breadcrumbs == */}
      <div>
        <Breadcrumb title="Smart Devices" />
        {/* <ProductCard /> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {response?.data?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
