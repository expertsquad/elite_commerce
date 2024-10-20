import React from "react";
import { fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";

const AllOrderHistory = async ({ params }: { params: { page: number } }) => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const allOrderData = await fetchProtectedData({
    route: "/online-order",
    query: `buyer.userId=${getMe?.data?._id}`,
    limit: 20,
    page: params?.page,
  });
  const totalPages = Math.ceil(
    allOrderData?.meta?.total / allOrderData?.meta?.limit
  );

  return (
    <div className="space-y-5">
      <div>
        {allOrderData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </div>
      <div>
        <Pagination
          redirectTo="/profile/order-history/all-orders/page"
          totalPages={totalPages}
          currentPage={Number(params?.page)}
        />
      </div>
    </div>
  );
};

export default AllOrderHistory;
