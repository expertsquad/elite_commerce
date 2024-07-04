"use client";
import StarRating from "@/Components/StarRating";
import Image from "next/image";
import React from "react";
import { IBestDealsProduct } from "./BestDealsSection";
import { server_url } from "@/constants";
import { useRouter } from "next/navigation";

const BestDealsSectionProduct = ({
  product,
}: {
  product: IBestDealsProduct;
}) => {
  const router = useRouter();
  const handleViewProduct = () => {
    router.push(`/products/${product?._id}`);
  };
  return (
    <div
      onClick={handleViewProduct}
      key={product?._id}
      className="flex items-center min-w-[200px] py-2 rounded-xl bg-white hover:drop-shadow-lg hover:duration-500 cursor-pointer"
    >
      <div className="w-[60px] h-[60px] relative mr-2">
        <Image
          src={server_url + product?.productPhoto}
          fill
          sizes="500px"
          alt="Product Photo"
          priority={true}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center flex-col gap-1">
        <span className="text-black text-sm md:text-base line-clamp-1">
          {product?.productName}
        </span>

        <StarRating
          rating={Math.round(product?.averageRating || 0)}
          className="w-2 h-2 md:w-2.5 md:h-2.5"
        />

        <div className="flex items-center gap-2.5">
          <span className="text-black flex items-baseline gap-1 main-text-color text-xs md:text-base font-semibold">
            {product?.discountedPrice} <small>$</small>
          </span>
          <del className="flex items-baseline gap-1 text-[10px] md:text-sm">
            {product?.sellingPrice} <small>$</small>
          </del>
        </div>
      </div>
    </div>
  );
};

export default BestDealsSectionProduct;
