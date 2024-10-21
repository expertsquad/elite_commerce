import React from "react";
import { fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";

const PlacedOrdersHistory = async ({
  params,
}: {
  params: { page: number };
}) => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderPlacedData = await fetchProtectedData({
    route: "/online-order",
    query:
      "existOrderStatus.status=Order placed&buyer.userId=" + getMe?.data?._id,
    limit: 20,
    page: params?.page,
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
        <Pagination
          redirectTo="/profile/order-history/placed-orders/page"
          totalPages={totalPages}
          currentPage={Number(params?.page)}
        />
      </div>
    </div>
  );
};

export default PlacedOrdersHistory;
