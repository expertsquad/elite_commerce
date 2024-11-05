import Link from "next/link";
import React from "react";

const AddOrEditReview = ({
  isReviewed,
  status,
}: {
  isReviewed: boolean;
  status?: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      {isReviewed && (
        <Link
          href={"/profile/review/all-review-history"}
          className="bg-positive text-white py-2 px-2.5 rounded-md"
        >
          Edit Review
        </Link>
      )}
      {isReviewed === false && status === "Delivered" && (
        <Link
          href={"/profile/review"}
          className="bg-gradient-primary text-white hover:bg-gradient-primary-reverse py-2 px-2.5 rounded-md"
        >
          Start Review
        </Link>
      )}
    </div>
  );
};

export default AddOrEditReview;
