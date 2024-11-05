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
            className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5"
          >
            <div className="w-full lg:w-1/2 flex  justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-gradient-primary-light rounded-lg relative shrink-0 w-[70px] h-[70px]">
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
                <p className="line-clamp-2">
                  {allReview?.product?.productName}
                </p>
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">
                    {allReview?.product?.brandName}
                  </span>
                  <span className="text-black-10">|</span>

                  <StarRating rating={allReview?.rating} />
                </div>
              </div>
            </div>

            <div className="flex w-full lg:w-1/2  justify-between items-center mt-3 md:mt-0">
              <div className="flex items-center gap-x-2">
                <div className="flex justify-start flex-col">
                  <p className="text-black-50 text-sm">Purchase on</p>
                  <p className="text-sm">{dateFormat(allReview?.createdAt)}</p>
                </div>
                <div className="flex justify-start flex-col">
                  <p className="text-black-50 text-sm">Updated At</p>
                  <span className="text-sm">
                    {formatDateShorting(allReview?.updatedAt)}
                  </span>
                </div>
              </div>

              <EditReviewBtn allReview={allReview} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="flex justify-center items-center">
            No reviewed products available!!
          </div>
          <div className="flex items-center justify-center">
            <Image src={noReview} alt="No Review" height={100} width={100} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllReviewHistory;
