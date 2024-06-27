"use client";
import { IOrderApiResponse } from "@/interfaces/orderApiResponse";
import React, { Fragment, Suspense } from "react";
import OrderSection from "../../_components/OrderSection";
import OrderItems from "../../_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";
import { orderHistoryMenus } from "@/constants/orderHistory.constants";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const OrderPlacedHistory = dynamic(
  () => import("./SortedOrderHistory/OrderPlacedHistory")
);

const OrderPackagingHistory = dynamic(
  () => import("./SortedOrderHistory/PackagingOrderHistory")
);

const OrderShippingHistory = dynamic(
  () => import("./SortedOrderHistory/ShippedOrdersHistory")
);

const ReceivedOrderHistory = dynamic(
  () => import("./SortedOrderHistory/ReceivedOrderHistory")
);
const AllOrderHistory = dynamic(
  () => import("./SortedOrderHistory/AllOrderHistory")
);

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
      <div className="flex items-center md:gap-5 gap-2.5 overflow-x-auto scrollbar-x-remove   ">
        {orderHistoryMenus?.map((label: any, i) => (
          <button
            onClick={() => setSelectedOrderHistoryType(label?.label || " ")}
            key={i}
            className={`outline-none border border-black-10 [font-size:_clamp(10px,50vw,16px)] hover:bg-gradient-primary transition-all rounded-full hover:text-white text-black-80 px-5 py-2.5 whitespace-nowrap ${
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
          <Suspense fallback={<Loading />}>
            <OrderPlacedHistory orderPlacedData={orderPlacedData} />
          </Suspense>
        ) : selectedOrderHistoryType === "Packaging" ? (
          <Suspense fallback={<Loading />}>
            <OrderPackagingHistory orderPackagingData={orderPackagingData} />
          </Suspense>
        ) : selectedOrderHistoryType === "Shipping" ? (
          <Suspense fallback={<Loading />}>
            <OrderShippingHistory orderShippingData={orderShippingData} />
          </Suspense>
        ) : selectedOrderHistoryType === "Order Received" ? (
          <Suspense fallback={<Loading />}>
            <ReceivedOrderHistory receivedOrderData={orderDeliveredData} />
          </Suspense>
        ) : selectedOrderHistoryType === "All Order" ? (
          <Suspense fallback={<Loading />}>
            <AllOrderHistory allOrderData={allOrderData} />
          </Suspense>
        ) : (
          <div className="flex items-center justify-center md:h-screen mt-10">
            <span>No Data Found</span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default OrderHistory;
