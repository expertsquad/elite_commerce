import { IconTruckDelivery, IconX } from "@tabler/icons-react";
import React from "react";
import OrderItemsTop from "./OrderItemsTop";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import Image from "next/image";
import { server_url } from "@/constants";
import StarRating from "@/Components/StarRating";
import OrderedItemsTableData from "./OrderedItemsTableData";

type OrderItemsProps = {
  orderId: number;
  orderQuanity: number;
  createdAt: string;
  updatedAt: string;
  orderItems: any;
};

const OrderedItems = ({
  createdAt,
  orderId,
  orderItems,
  orderQuanity,
  updatedAt,
}: OrderItemsProps) => {
  return (
    <div className="md:border border-black-10 md:p-[30px] p-5 md:rounded-lg w-full">
      <OrderItemsTop
        createdAt={createdAt}
        orderId={orderId}
        orderItemsLength={orderItems?.length}
        orderQuanity={orderQuanity}
        updatedAt={updatedAt}
      />

      <OrderedItemsTableData orderItems={orderItems} />
    </div>
  );
};

export default OrderedItems;
