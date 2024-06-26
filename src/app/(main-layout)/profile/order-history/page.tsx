import { fetchProtectedData } from "@/actions/fetchData";
import OrderSection from "../_components/OrderSection";
import OrderHistory from "./components/OrderHistory";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  // Order placed data
  const orderPlacedData = await fetchProtectedData({
    route: "/online-order",
    query: "orderStatus.status=Order placed&buyer.userId=" + getMe?.data?._id,
  });
  // order packaging data
  const orderPackagingData = await fetchProtectedData({
    route: "/online-order",
    query: "orderStatus.status=Packaging&buyer.userId=" + getMe?.data?._id,
  });
  // order Shipping data
  const orderShippingData = await fetchProtectedData({
    route: "/online-order",
    query: "orderStatus.status=Order placed&buyer.userId=" + getMe?.data?._id,
  });
  //order delivered data
  const orderDeliveredData = await fetchProtectedData({
    route: "/online-order",
    query: "orderStatus.status=Shipping&buyer.userId=" + getMe?.data?._id,
  });

  return (
    <div>
      <OrderHistory
        orderPlacedData={orderPlacedData}
        orderPackagingData={orderPackagingData}
        orderShippingData={orderShippingData}
        orderDeliveredData={orderDeliveredData}
      />
    </div>
  );
};

export default page;
