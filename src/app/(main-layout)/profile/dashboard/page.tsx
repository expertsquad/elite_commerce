import React from "react";
import ProfileTopCard from "../_components/ProfileTopCard";
import OrderSection from "../_components/OrderSection";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const orderItems = await fetchProtectedData({
    route: "/online-order",
    query: "buyer.userId=" + getMe?.data?._id,
  });

  const reviewPending = await fetchData({
    route: "/review",
    query: `reviewer.userId=${getMe?.data?._id}&reviewStatus=Pending`,
  });

  return (
    <div className="">
      <ProfileTopCard orderItems={orderItems} reviewPending={reviewPending} />
      <OrderSection orderItems={orderItems} />
    </div>
  );
};

export default page;
