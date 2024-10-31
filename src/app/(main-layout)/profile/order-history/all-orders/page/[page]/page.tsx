import React from "react";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import OrderItems from "@/app/(main-layout)/profile/_components/OrderItems";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

// export const generateStaticParams = async () => {
//   const getMe = await fetchProtectedData({
//     route: "/user/me",
//   });
//   const { meta } = await fetchData({
//     route: "/online-order",
//     query: `buyer.userId=${getMe?.data?._id}`,
//     limit: 20,
//   });
//   const totalPages = Math.ceil(meta?.total / meta?.limit);
//   return [...Array(totalPages)].map((_, i) => ({
//     params: { page: i + 1 },
//   }));
// };

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
  const currency = await getCurrency();

  return (
    <div className="space-y-5">
      {allOrderData?.data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <ProductEmptyState />
        </div>
      ) : (
        <div className="p-3">
          {allOrderData?.data?.map((order: Order) => (
            <OrderItems currency={currency} key={order._id} order={order} />
          ))}
        </div>
      )}
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
