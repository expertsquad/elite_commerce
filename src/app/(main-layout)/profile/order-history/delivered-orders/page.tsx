import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";

const DeliveredOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderDeliveredData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Delivered&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderDeliveredData?.meta?.total / orderDeliveredData?.meta?.limit
  );
  const currency = await getCurrency();

  return (
    <div className="space-y-5">
      <div>
        {orderDeliveredData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} currency={currency} />
        ))}
      </div>

      <div>
        {totalPages > 1 ? (
          <Pagination
            redirectTo="/profile/order-history/delivered-orders/page"
            totalPages={totalPages}
            currentPage={1}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DeliveredOrders;
