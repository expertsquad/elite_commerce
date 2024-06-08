import Image from "next/image";
import React from "react";

const OrderItemsCard = () => {
  return (
    <div>
      <div>
        <Image alt="Product Image" height={100} src="/" width={100} />
      </div>
      <p>Here will out titile</p>
      <small>Brand</small>
    </div>
  );
};

export default OrderItemsCard;
