import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import Image from "next/image";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import AddOrEditReview from "./AddOrEditReview";

const OrderItemsCard = ({
  orderItem,
  currency,
}: {
  orderItem: OrderItem;
  currency?: string;
}) => {
  return (
    <div className="text-black-50 flex gap-5 py-5 w-full border-b border-black-10">
      {/* flex first div */}
      <div className="flex items-center gap-3 w-full lg:w-1/2">
        {/* image part */}
        <div className="bg-gradient-primary-light rounded-lg flex items-center justify-center relative w-14 h-14 shrink-0">
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
            <div>|</div>
            <StarRating rating={4} />
          </div>

          {/* will apply only sm device */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <p>
                {currency}
                {orderItem?.variant?.discountedPrice
                  ? orderItem?.variant?.discountedPrice?.toString()
                  : orderItem?.variant?.sellingPrice?.toString()}{" "}
                x {orderItem.orderQuantity}
              </p>
              <strong className="text-gradient-primary">
                {currency}
                {orderItem?.subTotalPayable}
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
              orderItem?.variant?.discountedPrice
                ? orderItem?.variant?.discountedPrice?.toString()
                : orderItem?.variant?.sellingPrice?.toString()
            }`}
            className="text-lg text-black"
          />
          <OrderCardHeader
            title="Sub Total"
            value={`${currency}${orderItem?.subTotalPayable?.toString()}`}
            className="text-lg font-bold text-gradient-primary"
          />
          {orderItem?.isReviewed && (
            <AddOrEditReview value={orderItem?.isReviewed} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItemsCard;
