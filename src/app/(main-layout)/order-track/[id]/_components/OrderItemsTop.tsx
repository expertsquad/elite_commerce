import { formatDate } from "@/constants/formateDate.constants";
import { IconTruckDelivery } from "@tabler/icons-react";
import React from "react";

type OrderItemsTopProps = {
  orderId: number;
  orderQuanity: number;
  orderItemsLength: number;
  createdAt: string;
  updatedAt: string;
};

const OrderItemsTop = ({
  orderId,
  orderQuanity,
  orderItemsLength,
  createdAt,
  updatedAt,
}: OrderItemsTopProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <span className="text-gradient-primary font-bold text-sm md:text-lg">
          Order Id: #{orderId}
        </span>
        <span className="text-xs md:text-sm">
          {orderQuanity} Package, {orderItemsLength} Items
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-xs md:text-sm">
          Date: {formatDate(createdAt)}
        </span>
        <div className="flex items-center text-black-50 text-xs md:text-sm whitespace-nowrap">
          <IconTruckDelivery size={18} />
          <span>Estimated Delivery : {formatDate(updatedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsTop;
