import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";

import { server_url } from "@/constants";

import { fetchProtectedData } from "@/actions/fetchData";
import EditReviewBtn from "../_components/EditReviewBtn";
import Pagination from "@/Components/Pagination";

const AllReviewHistory = async () => {
  const me = await fetchProtectedData({
    route: "/user/me",
  });
  const allReviews = await fetchProtectedData({
    route: "/review",
    query: `reviewer.userId=${me?.data?._id}&reviewStatus=Reviewed`,
  });

  return (
    <div className="space-y-3">
      {allReviews?.data?.length ? (
        allReviews?.data?.map((allReview: any) => (
          <div
            key={allReview?._id}
            className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5
     "
          >
            {/* Image and titile */}
            <div className="w-full lg:w-1/2 flex  justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-gradient-primary-light rounded-lg relative shrink-0 w-16 h-16">
                <Image
                  alt="Product Image"
                  // src={`${server_url}${allReview.product.productPhoto}}
                  // `}
                  src={`${server_url}${allReview?.product?.productPhoto}`}
                  // src={imageUrl}
                  fill
                  className="inset-0 object-contain p-1"
                />
              </div>{" "}
              <p className="line-clamp-2">{allReview?.product?.productName}</p>
            </div>
            {/* Purchase on and review */}
            <div className="flex w-full lg:w-1/2  justify-between items-center">
              <div className="flex justify-start flex-col">
                <p className="text-black-50 text-sm">Purchase on</p>
                <p>{dateFormat(allReview?.createdAt)}</p>
              </div>

              <EditReviewBtn allReview={allReview} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-black-50 text-sm">No review yet</p>
        </div>
      )}
      <Pagination
        currentPage={1}
        totalPages={Math.ceil(
          allReviews?.meta?.total / allReviews?.meta?.limit
        )}
        redirectTo="all-review-history"
      />
    </div>
  );
};

export default AllReviewHistory;
