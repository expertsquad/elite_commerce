import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

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
  const currency = await getCurrency();
  return (
    <div className="space-y-5">
      {orderPackagingData?.data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <ProductEmptyState />
        </div>
      ) : (
        <div className="p-3">
          {orderPackagingData?.data?.map((order: Order) => (
            <OrderItems currency={currency} key={order._id} order={order} />
          ))}
        </div>
      )}
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
