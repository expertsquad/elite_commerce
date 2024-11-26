import React from "react";
import ProfileTopCard from "../_components/ProfileTopCard";
import OrderSection from "../_components/OrderSection";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderItems = fetchData({
    route: "/online-order",
    query: "buyer.userId=" + getMe?.data?._id,
  });

  const reviewPending = fetchData({
    route: "/review",
    query: `reviewer.userId=${getMe?._id}&reviewStatus=Pending`,
  });

  const [orderItemsData, reviewPendingData] = await Promise.all([
    orderItems,
    reviewPending,
  ]);

  return (
    <div className="">
      <ProfileTopCard
        orderItems={orderItemsData}
        reviewPending={reviewPendingData}
      />
      <OrderSection orderItems={orderItemsData} />
    </div>
  );
};

export default page;
