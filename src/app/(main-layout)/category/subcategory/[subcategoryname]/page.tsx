import { fetchData } from "@/actions/fetchData";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { subcategoryname: string };
}) {
  try {
    const response = await fetchData({
      route: "/product",
      query: `category.subcategory.subcategoryName=${params?.subcategoryname}`,
    });
    const product = response.data[0];

    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    if (!response?.data) {
      return {
        title: "Not Found",
        description: "The page you're looking for does not exist!",
      };
    }

    const productNames = response.data.map(
      (product: IProduct) => product?.productName
    );

    return {
      title: `${params?.subcategoryname} | ${shopInfo?.data?.shopName}`,
      description: `Browse through our selection of products in the ${params?.subcategoryname} category.`,
      "og:image": `${product?.productPhotos[0]}`,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist!",
    };
  }
}

const ProductsBySubCategory = async ({
  params,
}: {
  params: { subcategoryname: string };
}) => {
  console.log(params?.subcategoryname);
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

export default ProductsBySubCategory;
