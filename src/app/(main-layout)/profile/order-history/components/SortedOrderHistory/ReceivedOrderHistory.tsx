import React, { Fragment } from "react";
import OrderItems from "../../../_components/OrderItems";

const ReceivedOrderHistory = ({ receivedOrderData }: any) => {
  return (
    <Fragment>
      {receivedOrderData?.data?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </Fragment>
  );
};

export default ReceivedOrderHistory;
