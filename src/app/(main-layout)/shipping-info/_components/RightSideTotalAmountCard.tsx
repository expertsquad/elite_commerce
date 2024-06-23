import { Button } from "@/Components/Buttons";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { calculateTotalPriceAndDiscount } from "../../cart/_components/CartItems";
import Link from "next/link";

const RightSideTotalAmountCard = ({
  cartProducts,
  buttonLink,
  buttonText,
}: {
  cartProducts: ICartProduct[];
  buttonText: string;
  buttonLink: string;
}) => {
  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscount(cartProducts);

  const shippingFee = 100;
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;

  return (
    <>
      {/* Sub total , shipping , and discount  */}
      <div className="flex flex-col  gap-4 py-4 border-b border-black-10">
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <strong> ${totalPrice}</strong>
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
        <h2 className="text-gradient-primary"> ${totalPayable}</h2>
      </div>
      {/* Button Link */}
      <div>
        <Button className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2">
          <Link href={buttonLink}> {buttonText} </Link> <IconArrowRight />{" "}
        </Button>
      </div>
    </>
  );
};

export default RightSideTotalAmountCard;
