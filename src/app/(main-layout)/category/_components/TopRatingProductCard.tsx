import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ITopRatingProductProps = {
  products: IProduct[];
  currency?: string;
};

const TopRatingProductCard = ({
  products,
  currency,
}: ITopRatingProductProps) => {
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg uppercase whitespace-nowrap">
        Top 5 Ratings Product
      </h2>
      <div className="flex flex-col gap-y-3">
        {products?.map((product: IProduct) => (
          <Link
            href={`/products/${product?.productUrlSlug}`}
            className="flex items-center hover:bg-image-background rounded-md cursor-pointer"
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
                  {currency}
                  {product?.variants[0].discountPercentage}
                </span>
                <small>
                  <del className="text-black-50">
                    {currency}
                    {product?.variants[0].sellingPrice}
                  </del>
                </small>
              </div>
              <div>
                <StarRating rating={product?.averageRating || 0} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatingProductCard;
