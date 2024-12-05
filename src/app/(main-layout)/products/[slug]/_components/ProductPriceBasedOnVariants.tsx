"use client";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import React from "react";
import ProductVariantPrice from "./ProductVariantPrice";
import ProductVariantColor from "./ProductVariantColor";

const ProductPriceBasedOnVariants = ({
  product,
  currencyIcon,
  variant,
  onVariantSelect,
  quantity,
}: {
  product: IProduct;
  currencyIcon: string;
  variant: IProductVariant | null;
  onVariantSelect: (variant: IProductVariant) => void;
  quantity: number;
}) => {
  return (
    <div>
      <ProductVariantPrice
        variant={variant}
        product={product}
        currencyIcon={currencyIcon}
        quantity={quantity}
      />
      <div className="flex items-center gap-x-5">
        <div>
          <span
            className={`text-sm text-black-80 ${
              variant?.variantName === "Not specified" ? "hidden" : ""
            }`}
          >
            Color
          </span>
          <div className="flex items-center gap-x-2 mt-1">
            <ProductVariantColor
              onSelectVariant={onVariantSelect}
              variants={product?.variants}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPriceBasedOnVariants;
