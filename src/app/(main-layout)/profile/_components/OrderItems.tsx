import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import { Button } from "@/Components/Buttons";
import Link from "next/link";
import OrderItemsCard from "./OrderItemsCard";

const OrderItems = async () => {
  const orderItems = await fetchProtectedData({
    route: "/online-order",
    query: "buyer.userId=6609a866652afd6056cdc5d8",
  });

  console.log(orderItems);

  return (
    <div>
      {/* Order top section start */}
      <div className="flex items-center md:justify-between flex-col lg:flex-row  border border-transparent lg:border lg:border-black-10 px-0 lg:px-4 py-3 rounded-lg gap-5">
        <div className="flex  gap-3 justify-between lg:justify-around border border-black-10 rounded-lg lg:border-transparent w-full lg:w-7/12 p-3 ">
          <OrderCardHeader
            title="Order ID"
            value="1234567890"
            className="font-bold"
          />
          <OrderCardHeader
            title="Order Date"
            value="12/12/2021"
            className="font-bold"
          />
          <OrderCardHeader
            title="Estimated Delivery"
            value="12/12/2021"
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
          <p className="bg-black-10 px-5 rounded-lg py-2 "> Order Place</p>
        </div>
      </div>
      {/* Order top section finish */}
      {/* Order items card */}
      <OrderItemsCard />
    </div>
  );
};

export default OrderItems;
