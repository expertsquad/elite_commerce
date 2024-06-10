import React from "react";
import SocialMediaAndOthers from "./SocialMediaAndOthers";
import ProductVariantColor from "./ProductVariantColor";
import { IProduct } from "@/interfaces/product.interface";

const ProductViewDescAndOthers = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <SocialMediaAndOthers />
      <ProductVariantColor variants={product.variants} />
    </div>
  );
};

export default ProductViewDescAndOthers;
