import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import { Button } from "@/Components/Buttons";
import Link from "next/link";
import OrderItemsCard from "./OrderItemsCard";
import { Order } from "@/interfaces/oreder.interface";
import { dateFormat } from "@/utils/dateFormat";

const OrderItems = async ({ order }: { order: Order }) => {
  console.log(order);

  const date = new Date();
  return (
    <div className=" md:shadow-lg shadow-none my-5 p-5 rounded-lg">
      {/* Order top section start */}
      <div className="flex items-center md:justify-between flex-col lg:flex-row  border border-transparent lg:border lg:border-black-10 px-0 lg:px-4 py-3 rounded-lg gap-5">
        <div className="flex  gap-3 justify-between lg:justify-around border border-black-10 rounded-lg lg:border-transparent w-full lg:w-7/12 p-3 ">
          <OrderCardHeader
            title="Order ID"
            value={order?.orderId}
            className="font-bold"
          />
          <OrderCardHeader
            title="Order Date"
            value={dateFormat(order?.createdAt)}
            className="font-bold"
          />
          <OrderCardHeader
            title="Estimated Delivery"
            value={dateFormat(date.toString())}
            className="font-bold"
          />
        </div>
        <div className="flex  items-center gap-3">
          <Link href="#" className="">
            <Button className="text-gradient-primary border ">
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
    </div>
  );
};

export default OrderItems;
