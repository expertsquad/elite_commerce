import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";

const ShippedOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderShippingData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Shipping&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderShippingData?.meta?.total / orderShippingData?.meta?.limit
  );
  const currency = await getCurrency();
  return (
    <div className="space-y-5">
      <div>
        {orderShippingData?.data?.map((order: Order) => (
          <OrderItems currency={currency} key={order._id} order={order} />
        ))}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            currentPage={1}
            totalPages={totalPages}
            redirectTo="/profile/order-history/shipped-orders/page"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShippedOrders;
