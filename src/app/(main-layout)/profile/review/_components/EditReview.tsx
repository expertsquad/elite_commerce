import React from "react";
import ReviewCard from "./ReviewCard";
import StarRating from "@/Components/StarRating";
import Image from "next/image";

const EditReview = () => {
  return (
    <div>
      <ReviewCard />
      <div className="border-b border-black-10 py-5">
        <StarRating rating={4} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore adipiscing elit, sed do eiusmod
        </p>
        <div>
          <Image
            src="/images/product-image.png"
            width={60}
            height={60}
            alt="Review Image"
          />
        </div>
      </div>
    </div>
  );
};

export default EditReview;
