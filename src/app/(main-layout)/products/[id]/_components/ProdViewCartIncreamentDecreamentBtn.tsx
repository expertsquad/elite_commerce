"use client";
import IncreaseDecreaseCartItems from "@/app/(main-layout)/brands/_components/IncreaseDecreaseCartItems";
import { IProduct } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { use, useContext } from "react";

const ProdViewCartIncreamentDecreamentBtn = ({
  product,
}: {
  product: IProduct;
}) => {
  const { cartProducts, setRefetch } = useContext(CartContext);
  const isCarted = cartProducts.find((item) => item._id === product._id);

  return (
    <div>
      {isCarted ? (
        <IncreaseDecreaseCartItems product={isCarted} setRefetch={setRefetch} />
      ) : (
        <div className="flex items-center justify-center gap-x-2 py-2 px-3 border border-black-10 rounded-full">
          <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
            <IconMinus width={20} height={18} />
          </button>
          <span className="text-black-50">{0}</span>
          <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
            <IconPlus width={20} height={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProdViewCartIncreamentDecreamentBtn;
