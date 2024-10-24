import StarRating from "@/Components/StarRating";
import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";

export const QuickOrderItem = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex justify-between gap-3.5 ">
      <div className="flex md:items-center gap-3.5 w-full">
        <div>
          <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
            <div className="relative shrink-0 w-[55px] h-[55px]">
              {product?.productPhotos?.length > 0 && (
                <Image
                  src={`${server_url + product?.productPhotos[0]}`}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  alt="product"
                  className="top-0 left-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-between gap-x-2 w-full">
              <span className="line-clamp-1 md:text-base text-sm text-black-80">
                {product?.productName}
              </span>
              <button className="text-danger">
                <IconX stroke={2} size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brand?.brandName}
              </span>
              <span className="text-black-10">|</span>
              <StarRating rating={product?.averageRating!} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-black-80 text-sm">
                $
                {product?.variant.discountedPrice
                  ? product?.variant.discountedPrice
                  : product?.variant.sellingPrice}
              </span>
              <span>
                <IconX stroke={1} height={16} width={16} />
              </span>
              <div className="flex items-center gap-x-1.5 bg-gradient-primary-light rounded-2xl px-1">
                <span className="bg-gradient-primary text-white rounded-full font-bold">
                  <IconMinus stroke={1} height={16} width={16} />
                </span>
                <span className="text-black-80 text-sm">
                  {product?.orderQuantity}
                </span>
                <span className="bg-gradient-primary text-white rounded-full font-bold">
                  <IconPlus stroke={1} height={16} width={16} />
                </span>
              </div>
            </div>
            <strong className="font-semibold text-gradient-primary text-base">
              $
              {product?.variant.discountedPrice
                ? product?.variant.discountedPrice * product?.orderQuantity
                : product?.variant.sellingPrice * product?.orderQuantity}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
