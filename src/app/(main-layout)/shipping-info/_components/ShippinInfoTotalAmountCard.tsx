"use client";
import { Button } from "@/Components/Buttons";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import calculateTotalPriceAndDiscountOfCart from "@/helpers/calculateTotalPriceAndDiscountOfCart";
import { IShippingChargeProps } from "./OrderItemsRightSection";
import { AddressData } from "@/interfaces/defaultShippingAddress.interface";
import { useContext } from "react";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { getShippingFee } from "@/utils/getShippingFee";

const ShippinInfoTotalAmountCard = ({
  shippingCharge,
  defaultAddress,
  currencySymbol,
}: {
  shippingCharge?: IShippingChargeProps;
  defaultAddress?: AddressData;
  currencySymbol?: string;
}) => {
  const { orderData } = useContext(OrderInitContext);
  // console.log(shippingCharge, defaultAddress);
  const products = orderData?.orderItems;
  const city = defaultAddress?.city ? defaultAddress?.city : "";

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);
  console.log(totalPrice, totalDiscount);
  console.log(products);

  const shippingFee = getShippingFee(shippingCharge, city, totalPrice);

  return (
    <>
      {/* Sub total , shipping , and discount  */}
      <div className="flex flex-col  gap-4 py-4 border-b border-black-10">
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <strong>
            {currencySymbol} {totalPrice.toFixed(2)}
          </strong>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <p className={`${shippingFee ? "" : "text-primary-light"}`}>
            {shippingFee
              ? currencySymbol + shippingFee
              : "You Got Free Shipping"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            {" "}
            -{currencySymbol}
            {totalDiscount}
          </p>
        </div>
      </div>
      {/* Total */}
      <div className="flex items-center justify-between [font-size:_clamp(1.4em,40vw,1.7em)] font-bold my-2">
        <h2 className="">Total</h2>
        <h2 className="text-gradient-primary">
          {" "}
          {currencySymbol} {totalPrice + shippingFee}
        </h2>
      </div>
      {/* Button Link */}
      <Link href={""}>
        <Button
          className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2"
          disabled={false}
        >
          Continue To Payment
          <IconArrowRight />
        </Button>
      </Link>
    </>
  );
};

export default ShippinInfoTotalAmountCard;
