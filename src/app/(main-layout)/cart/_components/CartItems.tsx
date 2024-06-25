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

const CartItems = ({ suggestions }: { suggestions: IProduct[] }) => {
  const {
    cartProducts,
    calculateTotalPriceAndDiscountOfCart,
    shippingFee,
    setRefetch,
  } = useContext(CartContext);

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(cartProducts);

  //   console.log(totalPrice, totalDiscount);
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;

  return (
    <Fragment>
      <div className="md:flex hidden items-center justify-center bg-gradient-primary-light py-3 my-5">
        🔥 Your cart will expire in{" "}
        <span className="mx-2 font-bold"> 09:56 </span> minutes! Please checkout
        now before your items sell out!
      </div>

      <div className="flex flex-col-reverse gap-2.5">
        <input
          type="range"
          className="w-full  pointer-events-none"
          value={10}
        />
        <span className="block text-base">
          Buy <span className="text-gradient-primary">$900</span> more to get{" "}
          <span className="text-gradient-primary font-semibold">Freeship</span>{" "}
          🔥
        </span>
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-7">
        <div className=" flex flex-col gap-5 md:border border-black-10 md:p-[30px] md:basis-4/6 rounded-[10px]">
          {cartProducts?.map((product: ICartProduct) => {
            return (
              <CartItem
                key={product?._id}
                product={product}
                setRefetch={setRefetch}
              />
            );
          })}
        </div>
        <div className="md:basis-1/3">
          <div className="bg-white p-5 md:shadow-2xl rounded-[10px] md:border-none border border-black-10">
            <span className="text-gradient-primary font-semibold text-xl ">
              Cart Total
            </span>
            <div className="flex flex-col gap-3.5 mt-5">
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80">Sub Total</span>
                <strong className="text-base font-semibold">
                  ${totalPrice}
                </strong>
              </div>
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80">Shipping Fee</span>
                <strong className="text-base font-semibold">
                  ${shippingFee}
                </strong>
              </div>
              <div className="flex items-center justify-between gap-5">
                <span className="text-base text-black-80 capitalize">
                  discount
                </span>
                <strong className="text-base font-semibold text-danger">
                  -${totalDiscount}
                </strong>
              </div>
              <hr className="border border-black-10" />
            </div>
            <div className="flex items-center justify-between mt-5 gap-5">
              <span className="font-semibold text-2xl">Total</span>
              <span className="text-gradient-primary font-semibold text-2xl">
                ${totalPayable}
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mt-12">
              <ButtonPrimary className="!rounded-full">
                <Link href="/shipping-info">Proceed To Checkout &rarr;</Link>
              </ButtonPrimary>
              <ButtonPrimaryLight className="!text-black !rounded-full">
                <IconBolt />
                Quick Order
              </ButtonPrimaryLight>
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
