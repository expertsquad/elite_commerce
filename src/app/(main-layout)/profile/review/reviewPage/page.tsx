import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
// import ButtonSection from "./ButtonSection";
import { server_url } from "@/constants";
import { postDataMutation } from "@/actions/postDataMutation";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import { Order } from "@/interfaces/oreder.interface";
import ReviewNewBtn from "../_components/ReviewNewBtn";

const ProductReviewComponents = async () => {
  // const addCommentSubmitAction = async (
  //   productId: string,
  //   orderId: string,
  //   rating: number,
  //   formData: FormData
  // ) => {
  //   "use server";
  //   formData.set("productId", reviewNow?.product?.productId);
  //   formData.set("orderId", reviewNow?.orderId);
  //   // formData.set("rating", rating);

  //   const result = await postDataMutation({
  //     route: "/review/add",
  //     data: formData,
  //   });
  //   console.log(result);
  // };

  const addCommentSubmitAction = async (
    productId: string,
    orderId: string,
    rating: number,
    formData: FormData
  ) => {
    "use server";
    // formData.set("productId", reviewNow?.product?.productId);
    // formData.set("orderId", reviewNow?.orderId);
    // formData.set("rating", rating);
    // const result = await postDataMutation({
    //   route: "/review/add",
    //   data: formData,
    // });
    // console.log(result);
  };

  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const reviewPending = await fetchData({
    route: "/review",
    query: `buyer.userId=${getMe?.data?._id}&reviewStatus=Pending`,
  });

  return (
    <div>
      {reviewPending?.data?.map(
        (reviewNow: any) => (
          console.log(reviewNow),
          (
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
                    // src={`${server_url}${reviewNow.product.productPhoto}}
                    // `}
                    src={`${server_url}${reviewNow?.product?.productPhoto}`}
                    // src={imageUrl}
                    fill
                    className="inset-0 object-contain p-1"
                  />
                </div>{" "}
                <p className="line-clamp-2">
                  {reviewNow?.product?.productName}
                </p>
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
                />
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ProductReviewComponents;
