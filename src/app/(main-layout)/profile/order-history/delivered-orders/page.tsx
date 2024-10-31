import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

const DeliveredOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderDeliveredData = await fetchProtectedData({
    route: "/online-order",
    query: "existOrderStatus.status=Delivered&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderDeliveredData?.meta?.total / orderDeliveredData?.meta?.limit
  );
  const currency = await getCurrency();

  return (
    <div className="space-y-5">
      {orderDeliveredData?.data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <ProductEmptyState />
        </div>
      ) : (
        <div className="p-3">
          {orderDeliveredData?.data?.map((order: Order) => (
            <OrderItems currency={currency} key={order._id} order={order} />
          ))}
        </div>
      )}

      <div>
        {totalPages > 1 ? (
          <Pagination
            redirectTo="/profile/order-history/delivered-orders/page"
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

export default DeliveredOrders;
