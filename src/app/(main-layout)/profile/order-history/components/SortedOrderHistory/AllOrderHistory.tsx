import React, { Fragment } from "react";
import OrderItems from "../../../_components/OrderItems";

const AllOrderHistory = ({ allOrderData }: any) => {
  return (
    <Fragment>
      {allOrderData?.map((order: any) => (
        <OrderItems key={order._id} order={order} />
      ))}
    </Fragment>
  );
};

export default AllOrderHistory;
