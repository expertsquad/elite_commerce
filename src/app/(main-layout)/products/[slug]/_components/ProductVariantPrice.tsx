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
          : product?.variants[0]?.sellingPrice}
      </span>
      <span className="text-black-10">|</span>
      <del className="[font-size:_clamp(20px,3vw,25px)] text-black-50">
        {currencyIcon}
        {variant?.sellingPrice
          ? variant?.sellingPrice
          : product?.variants[0]?.sellingPrice}
      </del>
      {variant?.discountPercentage && <span className="text-black-10">|</span>}
      {variant?.discountPercentage && (
        <div
          title={`You will get extra ${
            variant?.discountPercentage
              ? variant?.discountPercentage
              : product?.variants[0]?.discountPercentage
          } more!!`}
          className="bg-gradient-secondary-light rounded-md p-0.5"
        >
          <span className="text-sm text-gradient-secondary px-2.5">
            {variant?.discountPercentage
              ? variant?.discountPercentage
              : product?.variants[0]?.discountPercentage}
            % OFF
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductVariantPrice;
