"use client";
import { updateCart } from "@/utils/updateCart.utils";
import React from "react";
import { IProductCardProps } from "./ProductCard";
import { IconShoppingCart } from "@tabler/icons-react";

const ProductCartBtn = ({ product, setRefetch }: IProductCardProps) => {
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: product });
    setRefetch && setRefetch((prev) => prev + 1);
  };
  return (
    <button
      className="group-hover/productcard:bg-gradient-primary group-hover/productcard:text-white text-black-50 rounded-full p-1.5 md:p-2.5 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      <IconShoppingCart stroke={1.5} height={20} width={20} />
    </button>
  );
};

export default ProductCartBtn;
