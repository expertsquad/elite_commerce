import { demoIphone } from "@/assets";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { formatDateShorting } from "@/constants/formateDate.constants";
import { CustomerReviewProps } from "@/interfaces/productview.review.interface";
import Image from "next/image";
import React from "react";

const ProductReviewdCustomer = ({
  reviewData,
}: {
  reviewData: CustomerReviewProps[];
}) => {
  return (
    <div className="">
      {reviewData?.map((review: CustomerReviewProps) => (
        <div
          className="border-t-[1px] border-black-10 mb-5 pt-5 md:pt-[30px]"
          key={review?._id}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[45px] w-[45px] relative shrink-0">
              <Image
                src={`${server_url + review?.reviewer?.profilePhoto}`}
                alt="user Photo"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full top-0 left-0 object-cover rounded-full border border-black-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {review?.reviewer?.fullName}
                </h3>
                <span className="w-[6px] h-[6px] rounded-full bg-black-10"></span>
                <span className="text-xs">
                  {formatDateShorting(review?.createdAt)}
                </span>
              </div>
              <div className="flex">
                <StarRating rating={Math.round(review?.rating)} />
              </div>
            </div>
          </div>
          <div>
            <Image src={demoIphone} alt="product image" />
          </div>
          <p className="text-xs md:text-sm text-black-opacity-70 mb-5 italic">
            {review?.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviewdCustomer;
