import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const HighPriceProducts = ({
  products,
  currencyIcon,
  isQuickOrderActive,
  shippingAmount,
}: {
  products: IProduct[];
  currencyIcon: string;
  isQuickOrderActive: boolean;
  shippingAmount: number;
}) => {
  return (
    <Fragment>
      {products?.map((product: IProduct) => (
        <ProductCard
          currencyIcon={currencyIcon}
          isQuickOrderActive={isQuickOrderActive}
          shippingAmount={shippingAmount}
          key={product?._id}
          product={product}
        />
      ))}
    </Fragment>
  );
};

export default HighPriceProducts;
