import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const PopularProducts = ({
  products,
  currencyIcon,
  shippingAmount,
}: {
  products: IProduct[];
  currencyIcon: string;
  shippingAmount: number;
}) => {
  return (
    <Fragment>
      {products?.map((product: IProduct) => (
        <ProductCard
          key={product?._id}
          product={product}
          currencyIcon={currencyIcon}
          shippingAmount={shippingAmount}
        />
      ))}
    </Fragment>
  );
};

export default PopularProducts;
