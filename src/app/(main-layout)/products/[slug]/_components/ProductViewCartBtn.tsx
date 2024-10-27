"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IProductCardProps } from "@/Components/ProductCard/ProductCard";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import { IconShoppingCart } from "@tabler/icons-react";
import React, { useContext } from "react";

const ProductViewCartBtn = ({ product }: IProductCardProps) => {
  const { setRefetch } = useContext(CartContext);
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: product });
    setRefetch && setRefetch((prev) => prev + 1);
  };
  return (
    <button
      title="Add To Cart Button"
      className="border-gradient-primary p-[1px] rounded-md w-full flex items-center justify-center hover:bg-gradient-primary hover:text-white  transition duration-300"
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      <span className="flex items-center justify-center gap-2">
        <IconShoppingCart stroke={2} size={20} />
        <p className="font-bold py-2">ADD TO CART</p>
      </span>
    </button>
  );
};

export default ProductViewCartBtn;
