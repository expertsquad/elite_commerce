import StarRating from "@/Components/StarRating";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import Image from "next/image";
import React from "react";

const OrderItemsCard = (orderItem: OrderItem) => {
  console.log(orderItem);

  return (
    <div>
      <div>
        <Image alt="Product Image" height={100} src="/" width={100} />
      </div>
      <p>{orderItem?.productName}</p>
      <small>Brand</small>
      <StarRating rating={4} />
    </div>
  );
};

export default OrderItemsCard;
