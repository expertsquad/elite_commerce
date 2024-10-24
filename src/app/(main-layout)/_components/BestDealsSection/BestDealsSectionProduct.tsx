import StarRating from "@/Components/StarRating";
import Image from "next/image";
import React from "react";
import { server_url } from "@/constants";
import Link from "next/link";
import { fetchData } from "@/actions/fetchData";
import { IBestDealsProductData } from "@/interfaces/bestDeals.interface";

const BestDealsSectionProduct = async ({
  product,
}: {
  product: IBestDealsProductData;
}) => {
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });
  return (
    <Link
      href={`products/${product?.productId}`}
      className="flex items-center min-w-[200px] md:min-w-[220px] xl:min-w-[250px] max-w-[350px] p-2.5 rounded-md bg-white hover:drop-shadow-lg hover:duration-500 cursor-pointer"
    >
      <div className="relative w-[60px] h-[60px] shrink-0 mr-2">
        <Image
          src={server_url + product?.productPhoto}
          alt="Product Photo"
          fill
          style={{
            objectFit: "cover",
          }}
          className="inset-0 top-0 left-0 object-cover rounded-sm"
        />
      </div>
      <div className="flex justify-center flex-col gap-1">
        <span className="text-black text-sm md:text-base line-clamp-1">
          {product?.productName}
        </span>

        <StarRating
          rating={Math.round(product?.averageRating || 1)}
          className="w-2 h-2 md:w-2.5 md:h-2.5"
        />

        <div className="flex items-center">
          <span className="flex items-center text-xs md:text-base font-medium text-gradient-primary">
            {currencyIcon?.data?.currencySymbol}
            {product?.sellingPrice}
          </span>
          {product?.discountedPrice && (
            <del className="flex items-center text-[10px] md:text-sm">
              {currencyIcon?.data?.currencySymbol}
              {product?.discountedPrice}
            </del>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BestDealsSectionProduct;
