import { IProduct } from "@/interfaces/product.interface";
import React from "react";

const ProductVariantPrice = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-3xl font-bold text-gradient-primary">
        ${product?.variants[0].discountPercentage}
      </span>
      <span className="text-black-10">|</span>
      <del className="text-[20px] text-black-50">
        ${product?.variants[0].sellingPrice}
      </del>
      <span className="text-black-10">|</span>
      <div className="bg-gradient-secondary-light rounded-full border border-black-10 py-1">
        <span className="text-lg text-gradient-secondary px-5 font-semibold">
          ${product?.variants[0].discountPercentage}% OFF
        </span>
      </div>
    </div>
  );
};

export default ProductVariantPrice;
