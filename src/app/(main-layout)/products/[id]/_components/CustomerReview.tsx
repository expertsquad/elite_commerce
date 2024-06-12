import { fetchData } from "@/actions/fetchData";
import { gradientLine } from "@/assets";
import Image from "next/image";
import React from "react";
import CustomerReviewStatistic from "./CustomerReviewStatistic";
import ProductReviewdCustomer from "./ProductReviewdCustomer";

type CustomerReviewProps = {
  productId: string;
  averageRating: number;
};

const CustomerReview = async ({
  productId,
  averageRating,
}: CustomerReviewProps) => {
  const response = await fetchData({
    route: `/review`,
    query: `product.productId=${productId}`,
  });
  return (
    <div>
      <h2 className="text-gradient-primary text-[18px] md:text-[24px] font-semibold">
        Customer Reivew
      </h2>
      <Image src={gradientLine} alt="underline" />
      <div className="flex flex-col md:flex-row md:items-center gap-x-4 mt-5">
        <span className="mb-3 md:mb-0">Sort By- </span>
        <div className="flex items-center gap-x-3 flex-wrap gap-y-3">
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            Newest
          </button>
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            5 Star
          </button>
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            4 Star
          </button>
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            3 Star
          </button>
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            2 Star
          </button>
          <button className="text-sm md:text-base border border-black-10 rounded-full px-2 py-1 whitespace-nowrap text-gradient-primary">
            1 Star
          </button>
        </div>
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
