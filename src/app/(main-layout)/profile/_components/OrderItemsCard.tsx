import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import Image from "next/image";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import AddOrEditReview from "./AddOrEditReview";
import { formatProductVariantName } from "@/constants/formatProductVariantName";
import { calculateOrderedItemPricesAndDiscount } from "@/utils/calculateBulkOrderDiscount";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";

const OrderItemsCard = ({
  orderItem,
  currency,
  orderStatus,
}: {
  orderItem: OrderItemsTypes;
  currency?: string;
  orderStatus?: string;
}) => {
  const orderItemPrice = orderItem?.variant?.discountedPrice
    ? orderItem?.variant?.discountedPrice
    : orderItem?.variant?.sellingPrice;

  const subTotalPrice = orderItemPrice * orderItem?.orderQuantity;

  const { finalDiscountedPrice, totalDiscountPercentage, discountedTotal } =
    calculateOrderedItemPricesAndDiscount(orderItem);
  return (
    <div className="text-black-50 flex gap-5 py-5 w-full border-b border-black-10">
      {/* flex first div */}
      <div className="flex items-center gap-3 w-full lg:w-1/2">
        {/* image part */}
        <div className="bg-image-background rounded-lg flex items-center justify-center relative w-14 h-14 shrink-0">
          <Image
            alt="Product Image"
            fill
            src={server_url! + orderItem?.productPhotos[0]}
            className="inset-0 object-contain p-1.5"
          />
        </div>

        {/* Title, brand , star part */}

        <div className="w-full">
          <p className="line-clamp-1">{orderItem?.productName}</p>
          <div className="flex items-center gap-2">
            <small className="text-positive">
              {orderItem?.brand?.brandName}
            </small>

            {orderItem?.variant?.variantName &&
              orderItem?.variant?.variantName !== "Not specified" && (
                <div className="flex items-center gap-x-1">
                  <div>|</div>
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: orderItem?.variant?.variantName,
                    }}
                  ></div>
                  <span className="text-sm">
                    {formatProductVariantName(orderItem?.variant?.variantName)}
                  </span>
                </div>
              )}

            {orderItem?.bulk || orderItem?.variant?.discountPercentage ? (
              <>
                <span className="text-black-10">|</span>
                <span className="text-secondary text-sm">
                  {orderItem?.bulk
                    ? totalDiscountPercentage
                    : orderItem?.variant?.discountPercentage}
                  % OFF
                </span>
              </>
            ) : null}
          </div>

          {/* will apply only sm device */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <p>
                {currency}
                {finalDiscountedPrice?.toString()}
              </p>
              <strong className="text-gradient-primary">
                {currency}
                {discountedTotal?.toString()}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* flex second div */}
      <div className="hidden lg:block w-1/2">
        <div className="flex text-center justify-between   ">
          <OrderCardHeader
            title="QTY"
            value={orderItem?.orderQuantity.toString()}
            className="text-lg text-black"
          />
          <OrderCardHeader
            title="Unit Price"
            value={`${currency}${
              orderItem?.bulk
                ? finalDiscountedPrice.toString()
                : orderItem?.variant?.discountedPrice
                ? orderItem?.variant?.discountedPrice?.toString()
                : orderItem?.variant?.sellingPrice?.toString()
            }`}
            className="text-lg text-black"
          />

          <OrderCardHeader
            title="Sub Total"
            value={`${currency}${
              orderItem?.bulk
                ? discountedTotal.toString()
                : subTotalPrice?.toFixed(2)
            }`}
            className="text-lg font-bold text-gradient-primary"
          />
          {orderItem?.isReviewed ? (
            <AddOrEditReview isReviewed={orderItem?.isReviewed} />
          ) : (
            orderItem?.isReviewed === false &&
            orderStatus === "Delivered" && (
              <AddOrEditReview
                isReviewed={orderItem?.isReviewed}
                status={orderStatus}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItemsCard;
