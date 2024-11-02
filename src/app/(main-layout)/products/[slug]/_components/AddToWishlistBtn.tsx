"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import React, { useContext } from "react";

const AddToWishlistBtn = ({
  product,
  className,
  variant,
}: {
  product: IProduct;
  className?: string;
  variant?: IProductVariant;
}) => {
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);

  const handleAddToFavourite = () => {
    updateWishlist({ product: product, variant });
    setRefetch && setRefetch((prev) => prev + 1);
  };

  const isWishlist = wishlistProducts?.find(
    (item: IWishlistProduct) =>
      item?.productId === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleAddToFavourite();
      }}
      className={`group/fav cursor-pointer rounded-full flex justify-center items-center hover:bg-black h-[30px] w-[30px] ${className} ${
        isWishlist ? "bg-[#f56565] hover:bg-black" : "bg-white"
      }`}
    >
      {isWishlist ? (
        <IconHeartFilled
          stroke={1.5}
          size={20}
          className={`${isWishlist && "fill-white"}`}
        />
      ) : (
        <IconHeart
          stroke={1.5}
          size={20}
          className="text-black hover:text-white group-hover/fav:text-white"
        />
      )}
    </button>
  );
};

export default AddToWishlistBtn;
