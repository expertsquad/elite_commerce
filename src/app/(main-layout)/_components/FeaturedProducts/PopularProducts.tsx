import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const PopularProducts = ({
  products,
  currencyIcon,
}: {
  products: IProduct[];
  currencyIcon: string;
}) => {
  return (
    <Fragment>
      {products?.map((product: IProduct) => (
        <ProductCard
          key={product?._id}
          product={product}
          currencyIcon={currencyIcon}
        />
      ))}
    </Fragment>
  );
};

export default PopularProducts;
