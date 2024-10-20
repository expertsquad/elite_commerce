"use client";
import React, { useContext } from "react";
import { ShippingInfoOrderItems } from "./ShippingInfoOrderItems";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import Link from "next/link";
import { Button } from "@/Components/Buttons";
import { IconArrowRight } from "@tabler/icons-react";

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
    <>
      {orderData?.orderItems?.length ? (
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
      ) : (
        <div className="w-full md:w-[clamp(350px,40vw,450px)]">
          <p className="text-center py-2"> Cart is empty </p>
          <Link href={"/"}>
            <Button className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2">
              Continue Shopping
              <IconArrowRight />
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default OrderItemsRightSection;
