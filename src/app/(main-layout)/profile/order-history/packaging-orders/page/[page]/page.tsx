import React from "react";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";

export const generateStaticParams = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const { meta } = await fetchData({
    route: "/online-order",
    query: "existOrderStatus.status=Packaging&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });
  const totalPages = Math.ceil(meta?.total / meta?.limit);
  return [...Array(totalPages)].map((_, i) => ({
    params: { page: i + 1 },
  }));
};

const PackagingOrderHistory = async ({
  params,
}: {
  params: { page: number };
}) => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderPackagingData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Packaging&buyer.userId=" + getMe?.data?._id,
    limit: 20,
    page: params?.page,
  });

  const totalPages = Math.ceil(
    orderPackagingData?.meta?.total / orderPackagingData?.meta?.limit
  );
  const currency = await getCurrency();

  return (
    <div className="space-y-5">
      <div>
        {orderPackagingData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} currency={currency} />
        ))}
      </div>
      <div>
        <Pagination
          redirectTo="/profile/order-history/packaging-orders/page"
          totalPages={totalPages}
          currentPage={Number(params?.page)}
        />
      </div>
    </div>
  );
};

export default PackagingOrderHistory;
