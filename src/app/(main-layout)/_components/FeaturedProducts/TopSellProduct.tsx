import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React, { Fragment } from "react";

const TopSellProducts = ({
  products,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
}: {
  products: IProduct[];
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
}) => {
  return (
    <Fragment>
      {products?.map((product: IProduct) => (
        <ProductCard
          key={product?._id}
          product={product}
          currencyIcon={currencyIcon}
          shippingAmount={shippingAmount}
          isQuickOrderActive={isQuickOrderActive}
        />
      ))}
    </Fragment>
  );
};

export default TopSellProducts;
