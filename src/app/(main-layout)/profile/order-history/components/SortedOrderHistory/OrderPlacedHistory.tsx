import React, { Fragment } from "react";
import OrderItems from "../../../_components/OrderItems";

const OrderPlacedHistory = ({ orderPlacedData }: any) => {
  return (
    <Fragment>
      {orderPlacedData?.data?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </Fragment>
  );
};

export default OrderPlacedHistory;
