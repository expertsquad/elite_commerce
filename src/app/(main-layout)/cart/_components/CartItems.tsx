"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import ButtonPrimaryLight from "../../brands/_components/ButtonPrimaryLight";
import { IconBolt } from "@tabler/icons-react";
import Link from "next/link";
import { CartItem } from "./CartItem";
import { ICartProduct } from "@/interfaces/cart.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import ProgressBar from "../../_components/SliderComponents/ProgressBar";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { storages } from "@/constants";
import QuickOrderButton from "../../brands/_components/QuickOrderButton";
// import { useGetShippingFee } from "@/utils/shppingCharge/getShippingFee";

const CartItems = ({
  suggestions,
  currencyIcon,
  freeShipping,
}: {
  suggestions: IProduct[];
  currencyIcon?: string;
  freeShipping: number;
}) => {
  const {
    cartProducts,
    calculateTotalPriceAndDiscountOfCart,

    setRefetch,
  } = useContext(CartContext);
  const { orderData, setRefetch: setRefetchOrderInit } =
    useContext(OrderInitContext);

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(cartProducts);

  // const shippingFee = useGetShippingFee({ soldAmount: totalPrice }) || 0;
  const shippingFee = 0;
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;
  // handle add to init order to add all cart items to the context
  const handleAddToInitOrder = () => {
    setLocalStorageData(storages.orderInit, {
      ...orderData,
      orderItems: cartProducts,
    });
    setRefetchOrderInit((prev) => prev + 1);
  };
  return (
    <Fragment>
      <div className="md:flex hidden items-center justify-center bg-gradient-primary-light py-3 my-5">
        🔥 Your cart will expire in{" "}
        <span className="mx-2 font-bold"> 09:56 </span> minutes! Please checkout
        now before your items sell out!
      </div>

      <div className="flex flex-col gap-5">
        <span className="block text-base">
          Buy{" "}
          <span className="text-gradient-primary">
            {currencyIcon}
            {freeShipping}
          </span>{" "}
          more to get{" "}
          <span className="text-gradient-primary font-semibold">Freeship</span>{" "}
          🔥
        </span>
        {/* <ProgressBar progressValue={50} /> */}
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-7">
        <div className=" flex flex-col gap-5 md:border border-black-10 md:p-[30px] md:basis-4/6 rounded-[10px]">
          {cartProducts?.map((product: ICartProduct) => {
            return (
              <CartItem
                key={product?._id}
                product={product}
                setRefetch={setRefetch}
                currencyIcon={currencyIcon}
              />
            );
          })}
        </div>
        <div className="md:basis-1/3">
          <div className="bg-white p-5 shadow-md rounded-[10px] md:border-none border border-black-10">
            <span className="text-gradient-primary font-semibold text-xl ">
              Cart Total
            </span>
            <div className="flex flex-col gap-3.5 mt-5">
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80">Sub Total</span>
                <strong className="text-base font-semibold">
                  {currencyIcon}
                  {totalPrice}
                </strong>
              </div>
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80">Shipping Fee</span>
                <strong className="text-base font-semibold">
                  {currencyIcon}
                  {shippingFee}
                </strong>
              </div>
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80 capitalize">
                  discount
                </span>
                <strong className="text-base font-semibold text-danger">
                  -{currencyIcon}
                  {totalDiscount}
                </strong>
              </div>
              <hr className="border border-black-10" />
            </div>
            <div className="flex items-center justify-between mt-5 gap-5">
              <span className="font-semibold text-2xl">Total</span>
              <span className="text-gradient-primary font-semibold text-2xl">
                {currencyIcon}
                {totalPayable}
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mt-12">
              <ButtonPrimary className="!rounded-full">
                <Link href="/shipping-info" onClick={handleAddToInitOrder}>
                  Proceed To Checkout &rarr;
                </Link>
              </ButtonPrimary>

              <QuickOrderButton
                product={cartProducts}
                buttonStyle="!uppercase !text-black-80 !whitespace-nowrap py-[clamp(2px,1.2vh,20px)] flex items-center justify-center gap-x-1 px-5 w-full py-3.5 bg-gradient-primary-light text-white rounded-full font-semibold"
                buttonIcon={<IconBolt size={20} className="fill-primary" />}
                buttonText="QUICK ORDER"
              />
            </div>
            <div className="mt-5">
              <Link
                href={"/"}
                className="flex items-center justify-center uppercase font-semibold text-sm"
              >
                &larr; Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* suggestions section */}
      <div className="my-10 flex flex-col gap-7">
        <span className="font-semibold text-2xl">
          You May be Interested in...
        </span>
        <div className="grid grid-cols-product-grid gap-5 overflow-y-auto scrollbar-x-remove">
          {suggestions?.map((product: IProduct) => {
            return <ProductCard key={product?._id} product={product} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default CartItems;
