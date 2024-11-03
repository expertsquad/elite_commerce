import React from "react";
import ProfileTopCard from "../_components/ProfileTopCard";
import OrderSection from "../_components/OrderSection";
import { fetchProtectedData } from "@/actions/fetchData";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <div className="">
      <ProfileTopCard getMe={getMe?.data} />
      <OrderSection getMe={getMe} />
    </div>
  );
};

export default page;
