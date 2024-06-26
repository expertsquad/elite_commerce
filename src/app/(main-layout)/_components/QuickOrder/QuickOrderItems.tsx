import StarRating from "@/Components/StarRating";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import IncreaseDecrease from "../../brands/_components/IncreaseDecrease";
import { IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";

export const QuickOrderItem = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative shrink-0 md:w-[55px] md:h-[55px] w-[50px] h-[50px]">
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
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              {product?.productName}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brand?.brandName}
              </span>
              <span className="text-black-10">|</span>
              <StarRating rating={product?.averageRating!} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-xs">
              $
              {product?.variant.discountedPrice
                ? product?.variant.discountedPrice
                : product?.variant.sellingPrice}
            </span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            {/* we will add here refetch  */}

            {/* <IncreaseDecrease product={product} /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          $
          {product?.variant.discountedPrice
            ? product?.variant.discountedPrice
            : product?.variant.sellingPrice * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};
