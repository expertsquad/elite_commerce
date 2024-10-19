import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import AllOrderHistory from "../profile/order-history/components/SortedOrderHistory/AllOrderHistory";
import Pagination from "@/Components/Pagination";

const OrderHistoryDemo = async () => {
  const allOrderData = await fetchProtectedData({
    route: "/online-order",
    limit: 20,
  });
  const currentPage = 1;

  const totalPages = Math.ceil(
    allOrderData?.meta?.total / allOrderData?.meta?.limit
  );

  return (
    <div className="h-[calc(100vh-130px)] overflow-y-auto scrollbar-y-remove">
      <h1>Order History Demo Page</h1>

      <div className="w-[70%] mx-auto">
        <AllOrderHistory allOrderData={allOrderData?.data} />
      </div>

      <Pagination
        redirectTo="/order-history-demo/page"
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default OrderHistoryDemo;
