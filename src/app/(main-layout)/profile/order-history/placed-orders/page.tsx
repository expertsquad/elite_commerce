import { fetchProtectedData } from "@/actions/fetchData";
import React from "react";
import OrderItems from "../../_components/OrderItems";
import Pagination from "@/Components/Pagination";
import { Order } from "@/interfaces/oreder.interface";
import { getCurrency } from "@/utils/getCurrency";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";

const PlacedOrders = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const orderPlacedData = await fetchProtectedData({
    route: "/online-order",
    query:
      "existOrderStatus.status=Order placed&buyer.userId=" + getMe?.data?._id,
    limit: 20,
  });

  const totalPages = Math.ceil(
    orderPlacedData?.data?.total / orderPlacedData?.meta?.limit
  );
  const currency = await getCurrency();

  return (
    <div className="space-y-5">
      {orderPlacedData?.data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <ProductEmptyState />
        </div>
      ) : (
        <div className="p-3">
          {orderPlacedData?.data?.map((order: Order) => (
            <OrderItems currency={currency} key={order._id} order={order} />
          ))}
        </div>
      )}
      <div>
        {totalPages > 1 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            redirectTo="/profile/order-history/placed-oders/page"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PlacedOrders;
