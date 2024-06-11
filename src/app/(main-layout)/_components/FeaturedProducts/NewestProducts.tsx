import ProductCard from "@/Components/ProductCard/ProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const NewestProducts = async () => {
  const products = await fetchData({ route: "/product" });
  console.log(products);

  return (
    <Fragment>
      {products?.data?.map((product: IProduct) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </Fragment>
  );
};

export default NewestProducts;
