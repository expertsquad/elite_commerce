"use client";
import { updateCart } from "@/utils/updateCart.utils";
import React, { useContext } from "react";
import { IProductCardProps } from "./ProductCard";
import { IconCheck, IconShoppingCart } from "@tabler/icons-react";
import { CartContext } from "@/Provider/CartProvider";

const ProductCartBtn = ({ product }: IProductCardProps) => {
  const { setRefetch, cartProducts } = useContext(CartContext);

  const isProductInCart = cartProducts.some(
    (cartProduct) => cartProduct._id === product._id
  );
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: product });
    setRefetch && setRefetch((prev) => prev + 1);
  };

  return (
    <button
      disabled={product?.variants[0]?.inStock < 1}
      className={`${
        product?.variants[0]?.inStock < 1 && "opacity-50 cursor-not-allowed"
      } ${
        isProductInCart
          ? "bg-gradient-primary text-white rounded-full transition-all duration-300 p-2"
          : "group-hover/productcard:bg-gradient-primary group-hover/productcard:text-white text-black-50 rounded-full transition-all duration-300 p-2"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart();
      }}
    >
      {isProductInCart ? (
        <IconCheck stroke={2} height={20} width={20} />
      ) : (
        <IconShoppingCart stroke={1.5} height={20} width={20} />
      )}
    </button>
  );
};

export default ProductCartBtn;
