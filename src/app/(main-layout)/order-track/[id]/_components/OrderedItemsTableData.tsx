import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import OrderCancelModal from "./OrderCancelModal";
import { fetchData } from "@/actions/fetchData";
import { formatProductVariantName } from "@/constants/formatProductVariantName";
import { calculateOrderedItemPricesAndDiscount } from "@/utils/calculateBulkOrderDiscount";

const OrderedItemsTableData = async ({
  orderItems,
  id,
  orderStatusLength,
}: {
  orderItems: OrderItemsTypes[];
  id: string;
  orderStatusLength: number;
}) => {
  // Fetch currency icon
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });

  return (
    <section>
      {/* Table Headers */}
      <div className="hidden md:flex bg-[#F7F7F7] px-3 py-2 text-sm font-medium mb-5 w-full">
        <span className="w-[45%]">Product Name</span>
        <span className="w-[15%]">Unit Price</span>
        <span className="w-[15%]">QTY</span>
        <span className="w-[15%]">Total</span>
        <span className="w-[10%]"></span>
      </div>

      {/* Table Data */}
      <div>
        {orderItems?.map((item: OrderItemsTypes) => {
          const {
            finalDiscountedPrice,
            totalDiscountPercentage,
            discountedTotal,
          } = calculateOrderedItemPricesAndDiscount(item);

          return (
            <div key={item?._id} className="mb-5 flex items-center">
              {/* Product Details */}
              <div className="flex items-center w-full md:w-[45%]">
                <div className="w-[55px] h-[60px] shrink-0 relative bg-image-background rounded-md mr-2.5">
                  <Image
                    src={`${server_url + item?.productPhotos?.[0]}`}
                    alt="product photo"
                    fill
                    style={{ objectFit: "contain" }}
                    className="inset-0 top-0 left-0 object-contain p-1.5"
                  />
                </div>
                <div className="w-full">
                  {/* Product Name & Cancel Modal */}
                  <div className="flex items-center gap-x-2 justify-between">
                    <span className="line-clamp-1 text-sm">
                      {item?.productName}
                    </span>
                    {orderStatusLength <= 2 && (
                      <div className="block md:hidden">
                        <OrderCancelModal id={id} />
                      </div>
                    )}
                  </div>

                  {/* Brand & Rating */}
                  <div className="flex items-center">
                    <span className="text-xs md:text-sm">
                      {item?.brand?.brandName}
                    </span>
                    <span className="text-black-10">|</span>
                    <div>
                      <StarRating rating={2} />
                    </div>
                  </div>

                  {/* Variant & Discounts */}
                  <div className="flex items-center">
                    {item?.variant &&
                      item?.variant?.variantName !== "Not specified" && (
                        <>
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: item?.variant?.variantName,
                            }}
                          ></div>
                          <span className="text-xs ml-1">
                            {formatProductVariantName(
                              item?.variant?.variantName
                            )}
                          </span>
                        </>
                      )}
                    {/* {item?.variant?.discountPercentage && (
                      <>
                        {item?.variant?.variantName !== "Not specified" && (
                          <span className="text-black-10">|</span>
                        )}
                        <span className="text-secondary text-[10px] md:text-xs">
                          {item?.variant?.discountPercentage}% OFF
                        </span>
                      </>
                    )} */}
                    {item?.bulk || item?.variant?.discountPercentage ? (
                      <>
                        <span className="text-black-10">|</span>
                        <span className="text-secondary text-[10px] md:text-xs">
                          {item?.bulk
                            ? totalDiscountPercentage
                            : item?.variant?.discountPercentage}
                          % OFF
                        </span>
                      </>
                    ) : null}
                  </div>

                  {/* Mobile View Pricing */}
                  <div className="md:hidden flex items-center justify-between">
                    <div className="flex items-center gap-x-1 text-black-80">
                      <span className="text-sm">
                        {currencyIcon?.data?.currencySymbol}
                        {item?.bulk
                          ? finalDiscountedPrice
                          : item?.variant?.discountedPrice
                          ? item?.variant?.discountedPrice
                          : item?.variant?.sellingPrice}
                      </span>
                      <span className="text-sm">
                        <IconX size={16} stroke={2} />
                      </span>
                      <span className="text-sm">{item?.orderQuantity}</span>
                    </div>
                    <span className="text-sm font-bold text-gradient-primary">
                      {currencyIcon?.data?.currencySymbol}
                      {discountedTotal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Unit Price */}
              <div className="hidden md:block md:w-[14%]">
                <span className="text-sm md:text-base">
                  {currencyIcon?.data?.currencySymbol}
                  {item?.bulk
                    ? finalDiscountedPrice
                    : item?.variant?.discountedPrice
                    ? item?.variant?.discountedPrice
                    : item?.variant?.sellingPrice}
                </span>
              </div>

              {/* Quantity */}
              <div className="hidden md:flex items-center md:w-[15%]">
                <IconX size={16} stroke={1} className="text-black-80" />
                <span>{item?.orderQuantity}</span>
              </div>

              {/* Total Price */}
              <div className="hidden md:block font-bold text-gradient-primary md:w-[15%]">
                {currencyIcon?.data?.currencySymbol}
                {item?.subTotalPayable?.toFixed(2)}
              </div>

              {/* Cancel Modal */}
              <div className="hidden md:w-[10%] md:flex items-center justify-center">
                {orderStatusLength <= 2 && (
                  <div>
                    <OrderCancelModal id={id} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OrderedItemsTableData;
