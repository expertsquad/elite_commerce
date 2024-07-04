"use client";
import { updateCart } from "@/utils/updateCart.utils";
import React, { useContext } from "react";
import { IProductCardProps } from "./ProductCard";
import { IconShoppingCart } from "@tabler/icons-react";
import { CartContext } from "@/Provider/CartProvider";
import GenerateGradientIcon from "../GenerateGradientIcon";

const ProductCartBtn = ({ product, productCart }: IProductCardProps) => {
  const { setRefetch } = useContext(CartContext);
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: product });
    setRefetch && setRefetch((prev) => prev + 1);
  };
  return (
    <button
      className="group-hover/productcard:bg-gradient-primary group-hover/productcard:text-white text-black-50 rounded-full transition-all duration-300 w-full"
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      {productCart ? (
        <IconShoppingCart stroke={1.5} height={20} width={20} />
      ) : (
        <span className="flex items-center justify-center gap-2">
          <GenerateGradientIcon
            IconComponent={IconShoppingCart}
            stroke={2}
            size={20}
          />
          <p className="text-gradient-primary py-2">ADD TO CART</p>
        </span>
      )}
    </button>
  );
};

export default ProductCartBtn;
