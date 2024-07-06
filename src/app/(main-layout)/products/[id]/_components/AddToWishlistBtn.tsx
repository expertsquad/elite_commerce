"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import React, { useContext } from "react";

const AddToWishlistBtn = ({ products }: any) => {
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);

  const handleAddToFavourite = () => {
    updateWishlist({ product: products });
    setRefetch && setRefetch((prev) => prev + 1);
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleAddToFavourite();
      }}
      className={`cursor-pointer  p-0.5  rounded-full flex justify-center items-center bg-white`}
    >
      {wishlistProducts?.find(
        (item: IWishlistProduct) => item?.productId === products._id
      ) ? (
        <IconHeartFilled stroke={2} height={18} width={18} />
      ) : (
        <GenerateGradientIcon IconComponent={IconHeart} stroke={2} size={18} />
      )}
    </button>
  );
};

export default AddToWishlistBtn;
