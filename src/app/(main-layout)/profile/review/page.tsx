import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";

import { server_url } from "@/constants";

import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import ReviewNewBtn from "./_components/ReviewNewBtn";

const ProductReviewComponents = async () => {
  const me = await fetchProtectedData({
    route: "/user/me",
  });

  const reviewPending = await fetchData({
    route: "/review",
    query: `reviewStatus=Pending`,
  });

  console.log(reviewPending);

  return (
    <div>
      {reviewPending?.data?.length ? (
        reviewPending?.data?.map((reviewNow: any) => (
          <div
            key={reviewNow?._id}
            className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5
     "
          >
            {/* Image and titile */}
            <div className="w-full lg:w-1/2 flex  justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-gradient-primary-light rounded-lg relative shrink-0 w-16 h-16">
                <Image
                  alt="Product Image"
                  src={`${server_url}${reviewNow?.product?.productPhoto}`}
                  fill
                  className="inset-0 object-contain p-1"
                />
              </div>{" "}
              <p className="line-clamp-2">{reviewNow?.product?.productName}</p>
            </div>
            {/* Purchase on and review */}
            <div className="flex w-full lg:w-1/2  justify-between items-center">
              <div className="flex justify-start flex-col">
                <p className="text-black-50 text-sm">Purchase on</p>
                <p>{dateFormat(reviewNow?.createdAt)}</p>
              </div>

              <ReviewNewBtn
                reviewStatus={reviewNow?.reviewStatus}
                reviewNow={reviewNow}
                id={reviewNow?._id}
                productId={reviewNow?.product?.productId}
                orderId={reviewNow?.orderId}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="h-72 flex items-center justify-center w-full">
          No Pending Review Found!
        </div>
      )}
    </div>
  );
};

export default ProductReviewComponents;
