import { IProduct } from "@/interfaces/product.interface";
import React from "react";

const ProductVariantPrice = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-2xl font-bold text-gradient-primary">
        ${product?.variants[0].discountPercentage}
      </span>
      <span className="text-black-10">|</span>
      <del className="text-base text-black-50">
        ${product?.variants[0].sellingPrice}
      </del>
      <span className="text-black-10">|</span>
      <span className="text-sm text-gradient-secondary px-2 py-0.5 border border-black-10 rounded-full">
        ${product?.variants[0].discountPercentage}% OFF
      </span>
    </div>
  );
};

export default ProductVariantPrice;
