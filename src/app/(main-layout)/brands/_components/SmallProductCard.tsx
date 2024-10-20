import { demoProductPhoto } from "@/assets";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallProductCard = ({
  product,
  currency,
}: {
  product: IProduct;
  currency: string;
}) => {
  return (
    <Link
      href={`/products/${product?._id}`}
      className="flex items-center gap-2.5 transition-all hover:bg-gradient-primary-light rounded-md px-3.5 py-2.5"
    >
      <div className="relative shrink-0 w-[65px] h-[65px]  rounded-md bg-gradient-primary-light overflow-hidden">
        {product?.productPhotos?.length > 0 && (
          <Image
            src={server_url + product?.productPhotos[0]}
            alt="product image"
            fill
            style={{ objectFit: "cover" }}
            className="object-cover w-full h-full  top-0 left-0"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-1">
        <span className="text-black text-base line-clamp-1">
          {product?.productName}
        </span>
        <span className="text-gradient-primary text-xs">
          {product?.brand?.brandName}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-black font-semibold text-sm">
            {currency}
            {product?.variants[0]?.discountedPrice || 0}
          </span>
          <del className="text-xs text-black text-opacity-70">
            {currency}
            {product?.variants[0]?.sellingPrice || 0}
          </del>
        </div>
      </div>
    </Link>
  );
};

export default SmallProductCard;
