import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import { server_url } from "@/constants";
import { fetchProtectedData } from "@/actions/fetchData";
import ReviewNewBtn from "./_components/ReviewNewBtn";
import { noReview } from "@/assets";

const ProductReviewComponents = async () => {
  // <== Get me to get all reviews by user id ==>
  const getUserInfo = await fetchProtectedData({
    route: "/user/me",
  });

  const userId = getUserInfo?.data?._id;

  const reviewPending = await fetchProtectedData({
    route: "/review",
    query: `reviewStatus=Pending&reviewer.userId=${userId}`,
  });
  return (
    <div>
      {reviewPending?.data?.length ? (
        reviewPending?.data?.map((reviewNow: any) => (
          <div
            key={reviewNow?._id}
            className="flex w-full lg:flex-row lg:items-center lg:gap-x-5 flex-col border-b border-black-10 py-5
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
              </div>
              <div>
                <p className="line-clamp-2 text-sm md:text-base">
                  {reviewNow?.product?.productName}
                </p>
                <span className="text-sm">{reviewNow?.product?.brandName}</span>
              </div>
            </div>
            {/* Purchase on and review */}
            <div className="flex w-full lg:w-1/2 justify-between items-center">
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="flex items-center justify-center">
            <Image src={noReview} alt="No Review" height={350} width={250} />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="text-2xl font-medium"> No Review Found here</span>
            <span className="text-center">
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

export default ProductReviewComponents;
