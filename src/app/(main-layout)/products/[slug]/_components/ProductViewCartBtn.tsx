"use client";
import { IProductCardProps } from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import { IconShoppingCart } from "@tabler/icons-react";
import React, { useContext } from "react";

const ProductViewCartBtn = ({
  product,
  variant,
  quantity,
}: {
  product: IProduct;
  variant: IProductVariant;
  quantity?: number;
}) => {
  const { cartProducts, setRefetch } = useContext(CartContext);

  const isCarted = cartProducts.find(
    (item) =>
      item?._id === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  const handleAddToCart = () => {
    updateCart({
      actionType: "add",
      product: product,
      variant,
      quantity: isCarted ? undefined : quantity,
    });
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
