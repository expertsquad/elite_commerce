import { fetchData } from "@/actions/fetchData";
import React from "react";
import CustomerReviewStatistic from "./CustomerReviewStatistic";
import ProductReviewdCustomer from "./ProductReviewdCustomer";
import CustomerReviewSorting from "./CustomerReviewSorting";

type CustomerReviewProps = {
  productId: string;
  averageRating: number;
  slug: string;
  rating: number;
};

const CustomerReview = async ({
  productId,
  averageRating,
  slug,
  rating,
}: CustomerReviewProps) => {
  const response = await fetchData({
    route: `/review`,
    query: `sortby=updatedAt&reviewStatus=Reviewed&product.productId=${productId}&${
      rating ? `rating=${rating}` : ""
    }`,
  });
  return (
    <div>
      <h2 className="text-[18px] md:text-[22px] font-semibold pb-3 border-b border-black-10">
        Customer Reivew
      </h2>

      <div className="flex flex-col md:flex-row md:items-center gap-x-4 mt-5">
        <span className="mb-3 md:mb-0">Sort By- </span>
        <CustomerReviewSorting slug={slug} />
      </div>
      <div>
        <CustomerReviewStatistic
          averageRating={averageRating}
          ratingInfo={response?.data}
        />
      </div>
      <ProductReviewdCustomer reviewData={response?.data} />
    </div>
  );
};

export default CustomerReview;
