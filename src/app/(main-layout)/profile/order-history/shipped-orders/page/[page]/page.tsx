import React from "react";
import { fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";

const ShippedOrdersHistory = async ({
  params,
}: {
  params: { page: number };
}) => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderShippingData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Shipping&buyer.userId=" + getMe?.data?._id,
    limit: 20,
    page: params?.page,
  });

  const totalPages = Math.ceil(
    orderShippingData?.meta?.total / orderShippingData?.meta?.limit
  );

  return (
    <div className="space-y-5">
      <div>
        {orderShippingData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </div>
      <div>
        <Pagination
          redirectTo="/profile/order-history/shipped-orders/page"
          totalPages={totalPages}
          currentPage={Number(params?.page)}
        />
      </div>
    </div>
  );
};

export default ShippedOrdersHistory;
