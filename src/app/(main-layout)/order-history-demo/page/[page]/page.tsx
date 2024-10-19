import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";

import Pagination from "@/Components/Pagination";
import AllOrderHistory from "@/app/(main-layout)/profile/order-history/components/SortedOrderHistory/AllOrderHistory";

const page = async ({ params }: { params: { page: number } }) => {
  const allOrderData = await fetchProtectedData({
    route: "/online-order",
    limit: 20,
    page: params?.page,
  });

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
        currentPage={Number(params?.page)}
        totalPages={totalPages}
      />
    </div>
  );
};

export default page;
