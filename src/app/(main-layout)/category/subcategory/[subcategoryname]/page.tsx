import { fetchData } from "@/actions/fetchData";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";

const IndividualSubcategoryPage = async ({
  params,
}: {
  params: { subcategoryname: string };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `category.subcategory.subcategoryName=${params?.subcategoryname}`,
  });
  return (
    <div>
      <div className="grid grid-cols-product-grid gap-5 place-items-center">
        {response?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default IndividualSubcategoryPage;
