import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";

const PackagingOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderPackagingData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Packaging&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderPackagingData?.meta?.total / orderPackagingData?.meta?.limit
  );
  return (
    <div className="space-y-5">
      <div>
        {orderPackagingData?.data?.map((order: Order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            currentPage={1}
            totalPages={totalPages}
            redirectTo="/profile/order-history/packaging-orders/page"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PackagingOrders;
