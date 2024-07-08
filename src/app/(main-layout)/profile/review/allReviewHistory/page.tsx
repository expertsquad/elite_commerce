import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
// import ButtonSection from "./ButtonSection";
import { server_url } from "@/constants";
import { postDataMutation } from "@/actions/postDataMutation";
import { fetchData } from "@/actions/fetchData";
import EditReviewBtn from "../_components/EditReviewBtn";

const AllReviewHistory = async () => {
  const addCommentSubmitAction = async (
    productId: string,
    orderId: string,
    rating: number,
    formData: FormData
  ) => {
    // "use server";
    // formData.set("productId", reviewNow?.product?.productId);
    // formData.set("orderId", reviewNow?.orderId);
    // formData.set("rating", rating);

    const result = await postDataMutation({
      route: "/review/add",
      data: formData,
    });
    console.log(result);
  };

  const comments = await fetchData({
    route: "/review",
    // query: `product.productId=${orderItem?.productId}&orderId=${orderId}`,y
  });
  console.log(comments);
  const allReviews = comments?.data?.filter(
    (comment: any) => comment?.reviewStatus !== "Pending"
  );
  console.log(allReviews);
  return (
    <div>
      {allReviews?.map(
        (allReview: any) => (
          console.log(allReview),
          (
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
                <p className="line-clamp-2">
                  {allReview?.product?.productName}
                </p>
              </div>
              {/* Purchase on and review */}
              <div className="flex w-full lg:w-1/2  justify-between items-center">
                <div className="flex justify-start flex-col">
                  <p className="text-black-50 text-sm">Purchase on</p>
                  <p>{dateFormat(allReview?.createdAt)}</p>
                </div>
                {/* <ButtonSection
              // comment={comments?.data?.length && comments?.data[0]}
              // isReviewed={orderItem?.isReviewed}
              // orderStatus={orderStatus}
              // orderItem={orderItem}
              // orderItem={orderItem}
              comments={allComments}
              orderId={allReview?.orderId}
              allReview={allReview}
              addCommentSubmitAction={addCommentSubmitAction}
            /> */}
                <EditReviewBtn
                  allReview={allReview}
                  // addCommentSubmitAction={addCommentSubmitAction}
                />
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default AllReviewHistory;
