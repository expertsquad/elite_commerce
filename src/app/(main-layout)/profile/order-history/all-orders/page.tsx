import React from "react";
import OrderItems from "../../_components/OrderItems";
import { fetchProtectedData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

const AllOrderHistory = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const allOrderData = await fetchProtectedData({
    route: "/online-order",
    query: `buyer.userId=${getMe?.data?._id}`,
    limit: 20,
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
        {totalPages > 1 ? (
          <Pagination
            redirectTo="/profile/order-history/all-orders/page"
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

export default AllOrderHistory;
