import React from "react";
import OrderItems from "./OrderItems";
import { fetchProtectedData } from "@/actions/fetchData";
import { Order } from "@/interfaces/oreder.interface";

const OrderSection = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderItems = await fetchProtectedData({
    route: "/online-order",
    query: "buyer.userId=" + getMe?.data?._id,
  });

  return (
    <section className="w-full">
      <h3 className="font-bold text-lg my-5">Recent Order</h3>
      {orderItems?.data?.map((order: Order) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </section>
  );
};

export default OrderSection;
