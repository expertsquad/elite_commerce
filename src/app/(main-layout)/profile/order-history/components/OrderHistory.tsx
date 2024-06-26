import { IOrderApiResponse } from "@/interfaces/orderApiResponse";
import React from "react";
import OrderSection from "../../_components/OrderSection";
import OrderItems from "../../_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";

const OrderHistory = ({
  orderPlacedData,
  orderPackagingData,
  orderShippingData,
  orderDeliveredData,
}: {
  orderPlacedData: IOrderApiResponse;
  orderPackagingData: IOrderApiResponse;
  orderShippingData: IOrderApiResponse;
  orderDeliveredData: IOrderApiResponse;
}) => {
  return (
    <div>
      {orderDeliveredData?.data?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrderHistory;
