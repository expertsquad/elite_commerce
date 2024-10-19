import React from "react";
import AddToWishlistBtn from "./AddToWishlistBtn";
import { IconStarFilled } from "@tabler/icons-react";

type RatingWishlistStockAndSoldProps = {
  averageRating: any;
  instock: any;
  soldQuantity: any;
  products: any;
};

const RatingWishlistStockAndSold = ({
  averageRating,
  instock,
  soldQuantity,
  products,
}: RatingWishlistStockAndSoldProps) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2.5">
      <div className="flex items-center gap-x-1">
        <IconStarFilled className="text-[#E73C17] w-4 h-4" />
        <span className="text-gradient-secondary text-xs md:text-base">
          {(averageRating || 0).toFixed(1)}
        </span>
      </div>
      <span className="text-black-10">|</span>
      <div className="flex items-center gap-x-1">
        <div className="border border-black-10 rounded-full flex items-center justify-center p-0.5">
          <AddToWishlistBtn products={products} />
        </div>
        <span className="text-xs md:text-base whitespace-nowrap">
          Add To Wishlist
        </span>
      </div>
      <span className="text-black-10">|</span>
      <span className="text-positive text-xs md:text-base whitespace-nowrap">
        In Stock : {instock}
      </span>
      <span className="text-black-10">|</span>
      <span className="text-black-80 text-xs md:text-base whitespace-nowrap">
        Sold: {soldQuantity || 0}
      </span>
    </div>
  );
};

export default RatingWishlistStockAndSold;
