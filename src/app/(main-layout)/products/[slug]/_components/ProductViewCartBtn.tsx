"use client";
import { IProductCardProps } from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import { IconCheck, IconShoppingCart } from "@tabler/icons-react";
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

  const isCarted = cartProducts?.find(
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

  const isDisabled =
    variant?.inStock < 1 ||
    (isCarted && isCarted?.orderQuantity >= variant?.inStock);

  return (
    <button
      title="Add To Cart Button"
      disabled={isDisabled}
      className={`border-gradient-primary p-[1px] rounded-md w-full flex items-center justify-center hover:bg-gradient-primary hover:text-white  transition duration-300 ${
        variant?.inStock < 1 && "opacity-50 cursor-not-allowed"
      }`}
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      {isCarted ? (
        <span className="flex items-center justify-center gap-2">
          <IconCheck stroke={2} size={20} />
          <p className="font-bold py-2">ALREADY CARTED</p>
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <IconShoppingCart stroke={2} size={20} />
          <p className="font-bold py-2">ADD TO CART</p>
        </span>
      )}
    </button>
  );
};

export default ProductViewCartBtn;
