import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import { server_url } from "@/constants";
import { fetchProtectedData } from "@/actions/fetchData";
import EditReviewBtn from "../_components/EditReviewBtn";
import Pagination from "@/Components/Pagination";

const AllReviewHistory = async () => {
  const allReviews = await fetchProtectedData({
    route: "/review",
    query: `reviewStatus=Reviewed`,
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
              <p className="line-clamp-2">{allReview?.product?.productName}</p>
            </div>

            <div className="flex w-full lg:w-1/2  justify-between items-center mt-3 md:mt-0">
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
