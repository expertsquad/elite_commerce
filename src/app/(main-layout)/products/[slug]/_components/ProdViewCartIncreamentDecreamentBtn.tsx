"use client";
import IncreaseDecreaseCartItems from "@/app/(main-layout)/brands/_components/IncreaseDecreaseCartItems";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useContext } from "react";

const ProdViewCartIncreamentDecreamentBtn = ({
  product,
  quantity,
  setQuantity,
  variant,
  btnContainerStyle,
}: {
  product: IProduct;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  variant?: IProductVariant;
  btnContainerStyle?: string;
}) => {
  const { cartProducts, setRefetch } = useContext(CartContext);

  const isCarted = cartProducts?.find(
    (item) =>
      item?._id === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 99));
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div>
      {isCarted ? (
        <IncreaseDecreaseCartItems
          product={isCarted}
          setRefetch={setRefetch}
          variant={variant}
          className="rounded-md"
        />
      ) : (
        <div
          className={`flex items-center justify-center gap-x-2 py-2 px-3 border border-black-10 rounded-full group group-hover:border-primary ${btnContainerStyle}`}
        >
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="text-black-50 bg-black-10 p-0.5 rounded-full hover:bg-gradient-primary-light"
          >
            <IconMinus size={18} />
          </button>
          <span className="text-black-50 text-base font-normal">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            disabled={quantity >= 99}
            className="text-black-50 bg-black-10 p-0.5 rounded-full hover:bg-gradient-primary-light"
          >
            <IconPlus size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProdViewCartIncreamentDecreamentBtn;
