import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import { Button } from "@/Components/Buttons";
import Link from "next/link";
import OrderItemsCard from "./OrderItemsCard";
import { Order } from "@/interfaces/oreder.interface";
import { dateFormat } from "@/utils/dateFormat";

const OrderItems = async ({ order }: { order: Order }) => {
  const date = new Date();
  return (
    <div className=" md:shadow-lg shadow-none border border-black-10 md:border-transparent my-5 p-5 rounded-lg">
      {/* Order top section start */}
      <div className="flex items-center md:justify-between flex-col lg:flex-row  border border-transparent lg:border lg:border-black-10 px-0 lg:px-4 py-3 rounded-lg gap-5">
        <div className="flex   justify-between lg:justify-around border border-black-10 rounded-lg lg:border-transparent w-full lg:w-7/12 p-3 ">
          <OrderCardHeader
            title="Order ID"
            value={order?.orderId}
            className="[font-size:_clamp(0.5em,5vw,0.9em)]"
          />
          <OrderCardHeader
            title="Order Date"
            value={dateFormat(order?.createdAt)}
            className="[font-size:_clamp(0.5em,5vw,0.9em)]"
          />
          <OrderCardHeader
            title="Estimated Delivery"
            value={dateFormat(date.toString())}
            className="[font-size:_clamp(0.5em,5vw,0.9em)]"
          />
        </div>
        <div className="flex  items-center gap-3">
          <Link href="#" className="">
            <Button className="text-gradient-primary border border-gradient-primary px-5 rounded-full py-2 ">
              {" "}
              Track Order{" "}
            </Button>
          </Link>
          <p className="bg-black-10 px-5 rounded-lg py-2 ">
            {order?.orderStatus?.status}
          </p>
        </div>
      </div>
      {/* Order top section finish */}
      {/* Order items card */}
      {order?.orderItems?.map((orderItem) => (
        <OrderItemsCard key={orderItem._id} orderItem={orderItem} />
      ))}

      {/* bottom section total order  */}
      <div className="flex  justify-between  w-full py-5">
        <div className="flex items-center justify-center gap-2 ">
          {" "}
          <p className="[font-size:_clamp(0.5em,5vw,1em)]">
            Total Order :{" "}
            <small className="text-black-50">
              ({order?.orderItems.length} Items , {order?.totalQuantity}{" "}
              Quantity)
            </small>
          </p>{" "}
        </div>
        <h3 className="[font-size:_clamp(0.8em,5vw,1.5em)] text-gradient-primary font-bold">
          ${order?.totalPayable}
        </h3>
      </div>
    </div>
  );
};

export default OrderItems;
