"use client";
import React, { useEffect, useState } from "react";
import { OrderItemsShippingInfo } from "./OrderItemsShippingInfo";
import RightSideTotalAmountCard from "./RightSideTotalAmountCard";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { storages } from "@/constants";
import { ICartProduct } from "@/interfaces/cart.interface";

const OrderItemsRightSection = ({
  buttonText,
  buttonLink,
}: {
  buttonText: string;
  buttonLink: string;
}) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    setCartProducts(getLocalStorageData(storages.cartProducts) || []);
  }, [refetch]);

  return (
    <div className=" w-full  md:w-[clamp(350px,40vw,450px)]">
      {/*  Order Items  */}
      <strong className="text-lg uppercase my-2  ">Your Order Items</strong>
      <div className="border-b border-black-10">
        <div className="flex flex-col md:gap-7 gap-4 overflow-y-auto scrollbar-y-remove h-[400px] my-4 ">
          {cartProducts.map((product: ICartProduct) => {
            return (
              <OrderItemsShippingInfo
                key={product?._id}
                product={product}
                setRefetch={setRefetch}
              />
            );
          })}
        </div>
      </div>

      {/* Total order amount card */}

      <RightSideTotalAmountCard
        cartProducts={cartProducts}
        buttonLink={buttonLink}
        buttonText={buttonText}
      />
    </div>
  );
};

export default OrderItemsRightSection;
