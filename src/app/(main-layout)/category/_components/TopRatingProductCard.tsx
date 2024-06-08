import { fetchData } from "@/actions/fetchData";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React from "react";

type TopRatingProductProps = {
  image?: string;
  productName?: string;
  sellingPrice?: number;
  discountedPrice?: number;
  rating?: number;
};

const TopRatingProductCard = async ({
  discountedPrice,
  image,
  productName,
  rating,
  sellingPrice,
}: TopRatingProductProps) => {
  const response = await fetchData({
    route: "/product",
    limit: 5,
    query: "sortBy=averageRating",
  });
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-xl uppercase whitespace-nowrap">
        Top 05 Ratings Product
      </h2>
      <div className="flex flex-col gap-y-3">
        {response?.data?.map((product: IProduct) => (
          <div
            className="flex items-center hover:bg-gradient-primary-light"
            key={product?._id}
          >
            <div className="relative shrink-0 h-[70px] w-[70px]">
              <Image
                src={`${server_url + product?.productPhotos[0]}`}
                alt="Product Image"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="w-full h-full top-0 left-0 object-cover p-2"
              />
            </div>
            <div>
              <span className="line-clamp-1 text-black-80 text-base">
                {product?.productName}
              </span>
              <div className="flex items-baseline gap-x-1 text-sm">
                <span className="text-gradient-primary font-medium">
                  ${product?.variants[0].discountPercentage}
                </span>
                <small>
                  <del className="text-black-50">
                    ${product?.variants[0].sellingPrice}
                  </del>
                </small>
              </div>
              <div>
                <StarRating rating={product?.averageRating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatingProductCard;
