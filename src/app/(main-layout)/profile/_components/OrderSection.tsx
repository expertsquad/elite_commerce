import React from "react";
import OrderItems from "./OrderItems";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";

const OrderSection = async ({ orderItems }: { orderItems: any }) => {
  const currency = await getCurrency();
  return (
    <section className="w-full">
      <h3 className="font-bold text-lg mt-5">Recent Order</h3>
      {orderItems?.data?.map((order: Order) => (
        <OrderItems key={order._id} order={order} currency={currency} />
      ))}
    </section>
  );
};

export default OrderSection;
