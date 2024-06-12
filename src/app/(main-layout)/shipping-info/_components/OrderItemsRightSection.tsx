import React from "react";
import { OrderItemsShippingInfo } from "./OrderItemsShippingInfo";
import RightSideTotalAmountCard from "./RightSideTotalAmountCard";

const OrderItemsRightSection = () => {
  return (
    <div className=" w-full  md:w-[clamp(350px,40vw,450px)]">
      {/*  Order Items  */}
      <strong className="text-lg uppercase my-2  ">Your Order Items</strong>
      <div className="border-b border-black-10">
        <div className="flex flex-col md:gap-7 gap-4 overflow-y-auto scrollbar-y-remove h-[400px] my-4 ">
          {[...Array(10)].map((item, index) => {
            return <OrderItemsShippingInfo key={index} />;
          })}
        </div>
      </div>

      {/* Total order amount card */}

      <RightSideTotalAmountCard />
    </div>
  );
};

export default OrderItemsRightSection;
