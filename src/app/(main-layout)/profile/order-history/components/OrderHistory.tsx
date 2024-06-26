import { IOrderApiResponse } from "@/interfaces/orderApiResponse";
import React from "react";

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
  return <div>here comes the order history sorting</div>;
};

export default OrderHistory;
