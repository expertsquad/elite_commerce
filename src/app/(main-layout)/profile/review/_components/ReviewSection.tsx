import React from "react";
import ReviewCard from "./ReviewCard";
import { fetchProtectedData } from "@/actions/fetchData";

const ReviewSection = () => {
  // const data = fetchProtectedData({
  //     route: "/user/me",
  // });
  return (
    <div>
      <ReviewCard />
    </div>
  );
};

export default ReviewSection;
