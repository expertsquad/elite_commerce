import React, { Fragment } from "react";
import OrderItems from "../../../_components/OrderItems";

const ShippedOrdersHistory = ({ orderShippingData }: any) => {
  return (
    <Fragment>
      {orderShippingData?.data?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </Fragment>
  );
};

export default ShippedOrdersHistory;
