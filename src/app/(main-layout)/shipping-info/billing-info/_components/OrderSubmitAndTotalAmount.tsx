"use client";
import { IconArrowRight } from "@tabler/icons-react";
import calculateTotalPriceAndDiscountOfCart from "@/helpers/calculateTotalPriceAndDiscountOfCart";
import { useContext } from "react";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { getShippingFee } from "@/utils/getShippingFee";
import { IShippingChargeProps } from "../../_components/OrderItemsRightSection";

const OrderSubmitAndTotalAmount = ({
  shippingCharge,
  currencySymbol,
  handleSubmit,
}: {
  shippingCharge?: IShippingChargeProps;
  currencySymbol?: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}) => {
  const { orderData } = useContext(OrderInitContext);

  const products = orderData?.orderItems;
  const city = orderData?.shippingAddress?.city || "";

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);
  const shippingFee = getShippingFee(shippingCharge, city, totalPrice);

  // Function to check if the shipping address is complete
  const isAddressComplete = () => {
    const address = orderData?.billingAddress;
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
          <div className="flex flex-col gap-4 py-4 border-b border-black-10">
            <div className="flex items-center justify-between">
              <p>Sub Total</p>
              <strong>
                {currencySymbol}
                {totalPrice?.toFixed(2)}
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
                -{currencySymbol}
                {totalDiscount}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between [font-size:_clamp(1.4em,40vw,1.7em)] font-bold my-2">
            <h2>Total</h2>
            <h2 className="text-gradient-primary">
              {currencySymbol}
              {totalPrice + shippingFee}
            </h2>
          </div>
          <div
            className={`${
              !orderData?.payment || !isAddressComplete()
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
          >
            <form
              className="bg-gradient-primary w-full rounded-lg text-white my-2"
              onSubmit={handleSubmit}
            >
              <button className="flex items-center justify-center py-2.5 w-full gap-x-1">
                Place Order
                <IconArrowRight size={20} stroke={1.5} />
              </button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OrderSubmitAndTotalAmount;
