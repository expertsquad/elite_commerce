import Image from "next/image";
import { IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import { calculateDiscountAndBulkOrderPrice } from "@/utils/calculateDiscountAndBulkOrderPrice";

export const QuickOrderItem = ({
  product,
  currencyIcon,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
}: {
  product: IProduct;
  currencyIcon?: string;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveProduct: () => void;
}) => {
  const { sellingPrice, discountPercentage, discountedPrice } =
    calculateDiscountAndBulkOrderPrice(
      product,
      product?.variant,
      product?.orderQuantity
    );

  return (
    <div className="flex justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5 w-full">
        <div>
          <div className="bg-gradient-primary-light p-1.5 rounded-lg">
            <div className="relative shrink-0 w-[55px] h-[55px]">
              {product?.productPhotos?.length > 0 && (
                <Image
                  src={`${server_url + product?.productPhotos[0]}`}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  alt="product"
                  className="top-0 left-0 w-full h-full object-contain"
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
              <button className="text-danger" onClick={onRemoveProduct}>
                <IconX stroke={1} size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brand?.brandName}
              </span>
              {product?.variant?.variantName !== "Not specified" && (
                <span className="text-black-10">|</span>
              )}
              {product?.variant?.variantName !== "Not specified" && (
                <div className="flex items-center gap-x-1">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: product?.variant?.variantName,
                    }}
                  ></div>
                  <span className="text-[10px] md:text-xs">
                    {product?.variant?.variantName}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1.5">
              <span className="text-black-80 text-base">
                {currencyIcon}
                {discountedPrice}
              </span>
              <div className="flex items-center gap-x-1.5 bg-gradient-primary-light rounded-2xl px-1 py-0.5">
                <span
                  className="bg-gradient-primary text-white rounded-full font-bold cursor-pointer"
                  onClick={onDecreaseQuantity}
                >
                  <IconMinus
                    stroke={2}
                    height={16}
                    width={16}
                    className="hover:fill-white"
                  />
                </span>
                <span className="text-black-80 text-sm">
                  {product?.orderQuantity}
                </span>
                <span
                  className="bg-gradient-primary text-white rounded-full font-bold cursor-pointer"
                  onClick={onIncreaseQuantity}
                >
                  <IconPlus stroke={2} height={16} width={16} />
                </span>
              </div>
            </div>
            <strong className="font-semibold text-gradient-primary text-base">
              {currencyIcon}
              {discountedPrice * product?.orderQuantity}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
