import React, { Fragment } from "react";
import OrderItems from "../../../_components/OrderItems";

const OrderPlacedHistory = ({ orderPackagingData }: any) => {
  return (
    <Fragment>
      {orderPackagingData?.data?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </Fragment>
  );
};

export default OrderPlacedHistory;
