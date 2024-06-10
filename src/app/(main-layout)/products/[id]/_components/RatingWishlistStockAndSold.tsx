import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IconHeart, IconStarFilled } from "@tabler/icons-react";
import React from "react";

type RatingWishlistStockAndSoldProps = {
  averageRating: any;
  instock: any;
  soldQuantity: any;
};

const RatingWishlistStockAndSold = ({
  averageRating,
  instock,
  soldQuantity,
}: RatingWishlistStockAndSoldProps) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <div className="flex items-center gap-x-1">
        <IconStarFilled className="text-[#E73C17] w-4 h-4" />
        <span className="text-gradient-secondary">{averageRating || 0}</span>
      </div>
      <span className="text-black-50">|</span>
      <div className="flex items-center gap-x-1">
        <div className="border border-black-10 rounded-full flex items-center justify-center p-0.5">
          <GenerateGradientIcon
            IconComponent={IconHeart}
            stroke={2}
            size={18}
          />
        </div>
        <span>Add To Wishlist</span>
      </div>
      <span className="text-black-50">|</span>
      <span className="text-positive">In Stock : {instock}</span>
      <span className="text-black-50">|</span>
      <span className="text-black-80">Sold: {soldQuantity}</span>
    </div>
  );
};

export default RatingWishlistStockAndSold;
