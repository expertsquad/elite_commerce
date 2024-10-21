import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";

const PlacedOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderPlacedData = await fetchProtectedData({
    route: "/online-order",
    query:
      "existOrderStatus.status=Order placed&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderPlacedData?.data?.total / orderPlacedData?.meta?.limit
  );
  return (
    <div className="space-y-5">
      <div>
        {orderPlacedData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            redirectTo="/profile/order-history/placed-oders/page"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PlacedOrders;
