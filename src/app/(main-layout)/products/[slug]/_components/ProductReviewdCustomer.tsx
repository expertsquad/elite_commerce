import { fetchData } from "@/actions/fetchData";
import { userPlaceholder } from "@/assets";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { formatDateShorting } from "@/constants/formateDate.constants";
import { CustomerReviewProps } from "@/interfaces/productview.review.interface";
import Image from "next/image";
import React from "react";

const ProductReviewdCustomer = async ({
  reviewData,
}: {
  reviewData: CustomerReviewProps[];
}) => {
  const getAuthor = await fetchData({
    route: "/settings/shop",
  });
  return (
    <div className="">
      {reviewData?.map((review: CustomerReviewProps) => (
        <div
          className="border-t-[1px] border-black-10 mb-5 pt-5 md:pt-[30px]"
          key={review?._id}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[45px] w-[45px] relative shrink-0">
              {review?.reviewer?.profilePhoto ? (
                <Image
                  src={`${server_url + review?.reviewer?.profilePhoto}`}
                  alt="user Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="inset-0 top-0 left-0 object-cover rounded-full border border-black-10"
                />
              ) : (
                <Image
                  src={userPlaceholder}
                  alt="user Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="inset-0 top-0 left-0 object-cover rounded-full border border-black-10"
                />
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {review?.reviewer?.fullName}
                </h3>
                <span className="w-[6px] h-[6px] rounded-full bg-black-10"></span>
                <span className="text-xs">
                  {formatDateShorting(
                    review?.createdAt ? review?.updatedAt : review?.createdAt
                  )}
                </span>
              </div>
              <div className="flex">
                <StarRating rating={Math.round(review?.rating)} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {review?.reviewPhotos?.map((photo: string, index: number) => (
              <div
                key={index}
                className="relative w-[45px] h-[45px] border border-black-10 rounded-md bg-image-background"
              >
                <Image
                  src={server_url + photo}
                  alt="review photo"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  className="inset-0 object-contain p-1"
                />
              </div>
            ))}
          </div>
          <span className="text-xs md:text-sm text-black-opacity-70 mb-5 italic">
            {review?.comment}
          </span>
          {review?.reply && (
            <div className="ml-6 mt-3">
              <div className="flex items-center gap-3 mb-1 md:mb-3">
                <div className="h-[45px] w-[45px] relative shrink-0">
                  <Image
                    src={`${server_url + getAuthor?.data?.favIcon}`}
                    alt="AUTHOR"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full top-0 left-0 object-cover rounded-full border border-black-10 p-2"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">
                    {getAuthor?.data?.shopName}
                  </h3>
                  <span className="w-[6px] h-[6px] rounded-full bg-black-10"></span>
                  <span className="text-xs">
                    {formatDateShorting(review?.replyTime || "")}
                  </span>
                </div>
              </div>
              <span className="text-xs md:text-sm text-black-opacity-70 mb-5 italic">
                {review?.reply}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductReviewdCustomer;
