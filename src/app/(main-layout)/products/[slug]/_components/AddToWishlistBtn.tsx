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
      className={`cursor-pointer rounded-full flex justify-center items-center bg-white hover:bg-gradient-primary-light h-[30px] w-[30px] border border-black-10`}
    >
      {wishlistProducts?.find(
        (item: IWishlistProduct) => item?.productId === products._id
      ) ? (
        <IconHeartFilled stroke={1} size={20} className="fill-primary" />
      ) : (
        <GenerateGradientIcon IconComponent={IconHeart} stroke={1} size={20} />
      )}
    </button>
  );
};

export default AddToWishlistBtn;
