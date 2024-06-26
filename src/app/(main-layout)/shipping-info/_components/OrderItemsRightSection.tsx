"use client";

import React, { useContext, useState } from "react";
import { ShippingInfoOrderItems } from "./ShippingInfoOrderItems";
import RightSideTotalAmountCard from "./RightSideTotalAmountCard";
import { usePathname } from "next/navigation";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const OrderItemsRightSection = ({
  buttonText,
  buttonLink,
  submitAction,
}: // ,
{
  buttonText: string;
  buttonLink: string;
  submitAction: (formData: FormData) => Promise<void>;
}) => {
  const pathName = usePathname();

  const { orderData } = useContext(OrderInitContext);

  // disabled button condition

  const isAddressIncomplete = (address: any) =>
    [
      address?.firstName,
      address?.lastName,
      address?.phoneNumber,
      address?.country,
      address?.state,
      address?.zipCode,
      address?.streetAddress,
    ].some((field) => !field);

  const isPaymentEmpty = (payment: any) =>
    !payment || Object.keys(payment).length === 0;

  const disableButton =
    (pathName === "/shipping-info" &&
      isAddressIncomplete(orderData?.shippingAddress)) ||
    (pathName === "/shipping-info/billing-info" &&
      (isAddressIncomplete(orderData?.billingAddress) ||
        isPaymentEmpty(orderData?.payment)));

  return (
    <div className="w-full md:w-[clamp(350px,40vw,450px)]">
      <strong className="text-lg uppercase my-2">Your Order Items</strong>
      <div className="border-b border-black-10">
        <div className="flex flex-col md:gap-7 gap-4 overflow-y-auto scrollbar-y-remove h-[400px] my-4">
          {orderData?.orderItems?.map((product) => (
            <ShippingInfoOrderItems key={product._id} product={product} />
          ))}
        </div>
      </div>

      <RightSideTotalAmountCard
        products={orderData?.orderItems}
        buttonLink={buttonLink}
        buttonText={buttonText}
        disabled={disableButton ? "disabled" : ""}
        submitAction={submitAction}
      />
    </div>
  );
};

export default OrderItemsRightSection;
