"use client";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import ProductVariantPrice from "./ProductVariantPrice";
import ProductVariantColor from "./ProductVariantColor";

const ProductPriceBasedOnVariants = ({
  product,
  currencyIcon,
}: {
  product: IProduct;
  currencyIcon: string;
}) => {
  const [variant, setVariant] = React.useState(0);
  return (
    <div>
      <ProductVariantPrice
        variant={variant}
        product={product}
        currencyIcon={currencyIcon}
      />
      <div className="flex items-center gap-x-5 my-5">
        <div>
          <span className="text-sm text-black-80">Color</span>
          <div className="flex items-center gap-x-2 mt-1">
            <ProductVariantColor
              onSelectVariant={setVariant}
              variants={product?.variants}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceBasedOnVariants;
