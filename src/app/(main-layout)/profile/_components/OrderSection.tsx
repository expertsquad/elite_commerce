import React from "react";
import OrderItems from "./OrderItems";

const OrderSection = () => {
  return (
    <section className="w-full">
      <h3 className="font-bold text-lg my-5">Recent Order</h3>
      <OrderItems />
    </section>
  );
};

export default OrderSection;
