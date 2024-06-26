"use client";
import { IOrderApiResponse } from "@/interfaces/orderApiResponse";
import React, { Fragment } from "react";
import OrderSection from "../../_components/OrderSection";
import OrderItems from "../../_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";
import { orderHistoryMenus } from "@/constants/orderHistory.constants";

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
  const allOrderData = [
    ...orderPlacedData?.data,
    ...orderPackagingData?.data,
    ...orderShippingData?.data,
    ...orderDeliveredData?.data,
  ];

  const [selectedOrderHistoryType, setSelectedOrderHistoryType] =
    React.useState("All Order");

  return (
    <Fragment>
      <div className="flex items-center gap-5">
        {orderHistoryMenus?.map((label: any, i) => (
          <button
            onClick={() => setSelectedOrderHistoryType(label?.label || " ")}
            key={i}
            className={`border border-black-10 hover:bg-gradient-primary transition-all rounded-full hover:text-white text-black-80 px-5 py-2.5 ${
              selectedOrderHistoryType === label?.label
                ? "bg-gradient-primary text-white"
                : ""
            }`}
          >
            {label?.label}
          </button>
        ))}
      </div>
      <div>
        {selectedOrderHistoryType === "Order Placed" ? (
          orderPlacedData?.data?.map((order: any) => (
            <OrderItems key={order._id} order={order} />
          ))
        ) : selectedOrderHistoryType === "Packaging" ? (
          orderPackagingData?.data?.map((order: any) => (
            <OrderItems key={order._id} order={order} />
          ))
        ) : selectedOrderHistoryType === "Shipping" ? (
          orderShippingData?.data?.map((order: any) => (
            <OrderItems key={order._id} order={order} />
          ))
        ) : selectedOrderHistoryType === "Delivered" ? (
          orderDeliveredData?.data?.map((order: any) => (
            <OrderItems key={order._id} order={order} />
          ))
        ) : selectedOrderHistoryType === "All Order" ? (
          allOrderData?.map((order: any) => (
            <OrderItems key={order._id} order={order} />
          ))
        ) : (
          <div className="flex items-center justify-center h-screen">
            <span>No Data Found</span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default OrderHistory;
