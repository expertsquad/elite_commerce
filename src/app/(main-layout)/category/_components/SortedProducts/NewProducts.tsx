import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const NewProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <Fragment>
      {products?.map((product: IProduct) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </Fragment>
  );
};

export default NewProducts;
