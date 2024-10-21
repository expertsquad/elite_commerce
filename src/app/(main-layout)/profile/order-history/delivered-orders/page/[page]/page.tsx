import React from "react";
import { fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";

const DeliveredOrdersHistory = async ({
  params,
}: {
  params: { page: number };
}) => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderDeliveredData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Delivered&buyer.userId=" + getMe?.data?._id,
    limit: 20,
    page: params?.page,
  });
  const totalPages = Math.ceil(
    orderDeliveredData?.meta?.total / orderDeliveredData?.meta?.limit
  );

  return (
    <div className="space-y-5">
      <div>
        {orderDeliveredData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </div>
      <div>
        <Pagination
          redirectTo="/profile/order-history/delivered-orders/page"
          totalPages={totalPages}
          currentPage={Number(params?.page)}
        />
      </div>
    </div>
  );
};

export default DeliveredOrdersHistory;
