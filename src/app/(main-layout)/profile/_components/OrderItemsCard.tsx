import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import Image from "next/image";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";

const OrderItemsCard = ({ orderItem }: { orderItem: OrderItem }) => {
  console.log(orderItem);
  return (
    <div className="text-black-50 flex gap-5 my-5 w-full">
      {/* flex first div */}
      <div className="flex gap-3 w-1/2">
        {/* image part */}
        <div className="bg-gradient-primary-light rounded-lg flex items-center justify-center">
          <Image
            alt="Product Image"
            height={60}
            src={server_url! + orderItem?.productPhotos}
            width={60}
            className="rounded-lg"
          />
        </div>

        {/* Title, brand , star part */}

        <div className="">
          <p className="line-clamp-1">{orderItem?.productName}</p>
          <div className="flex items-center gap-2">
            <small className="text-positive">
              {orderItem?.brand?.brandName}
            </small>
            <div>|</div>
            <StarRating rating={4} />
          </div>
        </div>
      </div>

      {/* flex second div */}
      <div className="flex text-center justify-between w-1/2  ">
        <OrderCardHeader
          title="QYT"
          value={orderItem?.orderQuantity.toString()}
          className="text-lg text-black"
        />
        <OrderCardHeader
          title="Unit Price"
          value={`$${
            orderItem?.variant?.discountedPrice
              ? orderItem?.variant?.discountedPrice?.toString()
              : orderItem?.variant?.sellingPrice?.toString()
          }`}
          className="text-lg text-black"
        />
        <OrderCardHeader
          title="Sub Total"
          value={`$${orderItem?.subTotalPayable?.toString()}`}
          className="text-lg font-bold text-gradient-primary"
        />
      </div>
    </div>
  );
};

export default OrderItemsCard;
