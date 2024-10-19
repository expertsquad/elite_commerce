import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import React from "react";

interface IProductVariantPriceProps {
  product: IProduct;
  variant: IProductVariant | any;
  currencyIcon: string;
}

const ProductVariantPrice = ({
  product,
  variant,
  currencyIcon,
}: IProductVariantPriceProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="[font-size:_clamp(23px,3vw,30px)] font-bold text-gradient-primary">
        {currencyIcon}
        {variant?.discountedPrice
          ? variant?.discountedPrice
          : product?.variants[0].discountedPrice}
      </span>
      <span className="text-black-10">|</span>
      <del className="[font-size:_clamp(20px,3vw,28px)] text-black-50">
        {currencyIcon}
        {variant?.sellingPrice
          ? variant?.sellingPrice
          : product?.variants[0]?.sellingPrice}
      </del>
      <span className="text-black-10">|</span>
      <div
        title={`You will get extra ${
          variant?.discountPercentage
            ? variant?.discountPercentage
            : product?.variants[0]?.discountPercentage
        } more!!`}
        className="bg-gradient-secondary-light rounded-full py-1"
      >
        <span className="text-base md:text-lg text-gradient-secondary px-5 font-semibold">
          {variant?.discountPercentage
            ? variant?.discountPercentage
            : product?.variants[0]?.discountPercentage}
          % OFF
        </span>
      </div>
    </div>
  );
};

export default ProductVariantPrice;
