"use client";
import { CartContext } from "@/Provider/CartProvider";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import React, { useContext } from "react";

const ShoppingCartBtn = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <Link href="/cart" className="relative">
      <span className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
        {cartProducts?.length || 0}
      </span>
      <IconShoppingCart
        stroke={1.2}
        className="text-black-80"
        width={24}
        height={24}
      />
    </Link>
  );
};

export default ShoppingCartBtn;
