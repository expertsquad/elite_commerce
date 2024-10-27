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
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { storages } from "@/constants";
import QuickOrderButton from "../../_components/QuickOrder/QuickOrderButton";
import { getShippingFee } from "@/utils/getShippingFee";

const CartItems = ({
  suggestions,
  currencyIcon,
  shippingCharge,
  shippingAmout,
}: {
  suggestions: IProduct[];
  currencyIcon?: string;
  shippingCharge: any;
  shippingAmout: number;
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

  // city if it's available in order data context otherwise from default address
  const city = orderData?.shippingAddress?.city
    ? orderData?.shippingAddress?.city
    : "";
  // culculating shipping fee
  const shippingFee = getShippingFee(shippingCharge, city, totalPrice);

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
      <div className="flex flex-col gap-5 mt-7">
        <span className="block text-base">
          Buy{" "}
          <span className="text-gradient-primary">
            {currencyIcon + shippingCharge?.freeShippingMinOrderAmount}
          </span>{" "}
          more to get
          <span className="text-gradient-primary font-semibold">
            {" " + "Freeship"}
          </span>{" "}
          🔥
        </span>
        {/* <ProgressBar progressValue={50} /> */}
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-7">
        {cartProducts?.length ? (
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
        ) : null}

        {cartProducts.length ? (
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
                  <p className={`${shippingFee ? "" : "text-primary-light"}`}>
                    {shippingFee
                      ? currencyIcon! + shippingFee
                      : "You Got Free Shipping"}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80 capitalize">
                    discount
                  </span>
                  <p className="text-base font-semibold text-danger">
                    -{currencyIcon}
                    {totalDiscount}
                  </p>
                </div>
                <hr className="border border-black-10" />
              </div>
              <div className="flex items-center justify-between mt-5 gap-5">
                <span className="font-semibold text-2xl">Total</span>
                <span className="text-gradient-primary font-semibold text-2xl">
                  {currencyIcon}
                  {totalPrice + shippingFee}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 mt-12">
                <ButtonPrimary className="!rounded-full hover:bg-gradient-primary-reverse !py-3 !uppercase !text-sm">
                  <Link href="/shipping-info" onClick={handleAddToInitOrder}>
                    Proceed To Checkout &rarr;
                  </Link>
                </ButtonPrimary>

                <QuickOrderButton
                  product={cartProducts}
                  buttonStyle="text-black-80 !uppercase !whitespace-nowrap py-[clamp(2px,1.2vh,20px)] flex items-center justify-center gap-x-1 px-5 w-full py-3.5 bg-gradient-primary-light hover:bg-gradient-primary rounded-full hover:text-white !text-sm"
                  buttonIcon={
                    <IconBolt size={17} stroke={1.5} className="fill-white" />
                  }
                  buttonText="Quick Order"
                  currencyIcon={currencyIcon}
                  shippingAmount={shippingAmout}
                />
              </div>
              <div className="mt-5">
                <Link
                  href={"/"}
                  className="flex items-center justify-center uppercase font-semibold text-sm hover:text-primary"
                >
                  &larr; Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* suggestions section */}
      <div className="my-10 flex flex-col gap-7">
        <span className="font-semibold text-2xl">
          You May be Interested in...
        </span>
        <div className="grid grid-cols-product-grid gap-5 overflow-y-auto scrollbar-x-remove">
          {suggestions?.map((product: IProduct) => {
            return (
              <ProductCard
                key={product?._id}
                product={product}
                currencyIcon={currencyIcon}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default CartItems;
