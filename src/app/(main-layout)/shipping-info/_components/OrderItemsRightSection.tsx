"use client";
import React, { useContext } from "react";
import { ShippingInfoOrderItems } from "./ShippingInfoOrderItems";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

export type IShippingChargeProps = {
  state: string;
  inside: number;
  outside: number;
  freeShippingMinOrderAmount: number | undefined | any;
};

const OrderItemsRightSection = ({
  currencySymbol,
}: {
  currencySymbol: string;
}) => {
  const { orderData } = useContext(OrderInitContext);
  return (
    <div className="w-full md:w-[clamp(350px,40vw,450px)]">
      <strong className="text-lg uppercase my-2">Your Order Items</strong>
      <div className="border-b border-black-10">
        <div className="flex flex-col md:gap-7 gap-4 overflow-y-auto scrollbar-y-remove h-[400px] my-4">
          {orderData?.orderItems?.map((product) => (
            <ShippingInfoOrderItems
              key={product._id}
              product={product}
              currencySymbol={currencySymbol}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItemsRightSection;
