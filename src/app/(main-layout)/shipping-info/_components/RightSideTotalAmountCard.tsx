import { Button } from "@/Components/Buttons";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IconArrowRight } from "@tabler/icons-react";
import React, { useContext } from "react";
import Link from "next/link";
import calculateTotalPriceAndDiscountOfCart from "@/helpers/calculateTotalPriceAndDiscountOfCart";
import Form from "@/Components/Form";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { fetchData } from "@/actions/fetchData";
import { IShippingChargeProps } from "./OrderItemsRightSection";
import { AddressData } from "@/interfaces/defaultShippingAddress.interface";

const RightSideTotalAmountCard = ({
  products,
  buttonLink = "#",
  buttonText,
  disabled,
  submitAction,
  shippingCharge,
  defaultAddress,
}: {
  products: ICartProduct[];
  buttonText: string;
  buttonLink?: string;
  disabled?: string;
  submitAction?: (e: React.FormEvent) => Promise<void>;
  shippingCharge?: IShippingChargeProps;
  defaultAddress: AddressData;
}) => {
  console.log(shippingCharge);
  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);

  let shippingFee = 0;
  if (totalPrice > shippingCharge?.freeShippingMinOrderAmount) {
    shippingFee = 0;
  } else if (defaultAddress?.state === shippingCharge?.state) {
    shippingFee = shippingCharge?.inside;
  } else {
    shippingFee = shippingCharge?.outside || 0;
  }

  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;

  return (
    <>
      {/* Sub total , shipping , and discount  */}
      <div className="flex flex-col  gap-4 py-4 border-b border-black-10">
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <strong> ${totalPrice.toFixed(2)}</strong>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <p> ${shippingFee}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p> -${totalDiscount}</p>
        </div>
      </div>
      {/* Total */}
      <div className="flex items-center justify-between [font-size:_clamp(1.4em,40vw,1.7em)] font-bold my-2">
        <h2 className="">Total</h2>
        <h2 className="text-gradient-primary"> ${totalPayable.toFixed(2)}</h2>
      </div>
      {/* Button Link */}
      {submitAction ? (
        <>
          <Button
            onClick={(e) => submitAction(e)}
            className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2"
            disabled={disabled}
          >
            {buttonText} <IconArrowRight />
          </Button>
        </>
      ) : (
        <Link href={buttonLink}>
          <Button
            className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2"
            disabled={disabled}
          >
            {buttonText} <IconArrowRight />
          </Button>
        </Link>
      )}
    </>
  );
};

export default RightSideTotalAmountCard;
