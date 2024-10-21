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

  const products = orderData?.orderItems;
  // city if it's available in order data context otherwise from default address
  const city = orderData?.shippingAddress?.city
    ? orderData?.shippingAddress?.city
    : defaultAddress?.city;

  // getting total and discount by using custom function
  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);
  console.log(totalDiscount, totalPrice);

  // getting expected shipping fee by using custom function
  const shippingFee = getShippingFee(shippingCharge, city, totalPrice);

  // Function to check if the shipping address is complete
  const isAddressComplete = () => {
    const address = orderData?.shippingAddress || defaultAddress;
    return (
      address &&
      address.firstName &&
      address.lastName &&
      address.state &&
      address.country &&
      address.streetAddress &&
      address.phoneNumber &&
      address.zipCode &&
      address.city
    );
  };

  return (
    <>
      {orderData?.orderItems?.length ? (
        <>
          {/* Sub total, shipping, and discount  */}
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
          <Button
            className="bg-gradient-primary w-full rounded-lg text-white my-2"
            disabled={!isAddressComplete()}
          >
            <Link
              href={"/shipping-info/billing-info"}
              className="flex items-center justify-center py-2.5"
            >
              Continue To Payment
              <IconArrowRight />
            </Link>
          </Button>
        </>
      ) : null}
    </>
  );
};

export default ShippinInfoTotalAmountCard;
