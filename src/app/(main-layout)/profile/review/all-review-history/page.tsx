import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import { server_url } from "@/constants";
import { fetchProtectedData } from "@/actions/fetchData";
import EditReviewBtn from "../_components/EditReviewBtn";
import Pagination from "@/Components/Pagination";
import { noReview } from "@/assets";
import StarRating from "@/Components/StarRating";
import { formatDateShorting } from "@/constants/formateDate.constants";

const AllReviewHistory = async () => {
  // <== Get me to get all reviews by user id ==>
  const getUserInfo = await fetchProtectedData({
    route: "/user/me",
  });

  const userId = getUserInfo?.data?._id;

  // <== Get all reviews by user id ==>
  const allReviews = await fetchProtectedData({
    route: "/review",
    query: `reviewStatus=Reviewed&reviewer.userId=${userId}&sortBy=updatedAt`,
    limit: 20,
  });

  return (
    <div className="space-y-3">
      {allReviews?.data?.length ? (
        allReviews?.data?.map((allReview: any) => (
          <div
            key={allReview?._id}
            className="flex items-center justify-between lg:items-center w-full border-b border-black-10 py-5"
          >
            <div className="flex justify-start items-center gap-x-2 md:gap-x-3 w-[60%] lg:w-[40%] xl:w-[55%]">
              <div className="flex justify-center items-center bg-image-background rounded-lg relative shrink-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
                <Image
                  alt="Product Image"
                  src={`${server_url}${allReview?.product?.productPhoto}`}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  className="inset-0 object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm md:text-base line-clamp-1 md:line-clamp-2">
                  {allReview?.product?.productName}
                </p>
                <div className="flex items-center gap-x-1">
                  <span className="text-sm text-positive">
                    {allReview?.product?.brandName}
                  </span>
                  <span className="text-black-10">|</span>

                  <StarRating rating={allReview?.rating} />
                </div>
                <div className="flex items-center gap-x-1 lg:hidden">
                  <div className="flex items-center whitespace-nowrap">
                    <p className="text-black-50 text-xs mr-1">Purchase: </p>
                    <p className="text-xs">
                      {dateFormat(allReview?.createdAt)}
                    </p>
                  </div>
                  <span className="text-black-10">|</span>
                  <div className="flex items-center whitespace-nowrap">
                    <p className="text-black-50 text-xs mr-1">Updated: </p>
                    <p className="text-xs">
                      {formatDateShorting(allReview?.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-start flex-col lg:w-[20%] xl:w-[15%]">
              <p className="text-black-50 text-sm">Purchase on</p>
              <p className="text-sm">{dateFormat(allReview?.createdAt)}</p>
            </div>

            <div className="hidden lg:flex justify-start flex-col w-[20%] lg:w-[20%] xl:w-[15%]">
              <p className="text-black-50 text-xs md:text-sm">Updated At</p>
              <span className="text-xs md:text-sm">
                {formatDateShorting(allReview?.updatedAt)}
              </span>
            </div>

            <div className="w-[20%] lg:w-[20%] xl:w-[15%] flex items-end justify-end">
              <EditReviewBtn allReview={allReview} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="flex items-center justify-center">
            <Image src={noReview} alt="No Review" height={350} width={250} />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="text-2xl font-medium mb-1">
              No Review Found here
            </span>
            <span className="text-center text-sm">
              No reviews found. Be the first to share your thoughts and help{" "}
              <br />
              others make informed decisions about this product.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllReviewHistory;
