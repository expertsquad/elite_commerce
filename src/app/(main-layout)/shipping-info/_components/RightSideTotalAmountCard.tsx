import { Button } from "@/Components/Buttons";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import calculateTotalPriceAndDiscountOfCart from "@/helpers/calculateTotalPriceAndDiscountOfCart";

const RightSideTotalAmountCard = ({
  cartProducts,
  buttonLink,
  buttonText,
  disabled,
}: {
  cartProducts: ICartProduct[];
  buttonText: string;
  buttonLink: string;
  disabled?: string;
}) => {
  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(cartProducts);

  const shippingFee = 100;
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
      <div>
        {" "}
        <Link href={buttonLink}>
          <Button
            className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2   "
            disabled={disabled}
          >
            {buttonText} <IconArrowRight />{" "}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default RightSideTotalAmountCard;
