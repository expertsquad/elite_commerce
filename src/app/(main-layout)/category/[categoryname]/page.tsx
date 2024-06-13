import { fetchData } from "@/actions/fetchData";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";

// export async function generateMetadata({params}: {params: {categoryname: string}}) {
//  try {

//  } catch (error) {
//    return {
//     title:"Not Found"
//   }
//  }
// }

const CategoryName = async ({
  params,
}: {
  params: { categoryname: string };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `category.categoryName=${params?.categoryname}`,
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

export default CategoryName;
