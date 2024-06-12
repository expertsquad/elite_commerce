import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import Image from "next/image";
import { demoProductPhoto } from "@/assets";
import StarRating from "@/Components/StarRating";
import IncreaseDecrease from "../brands/_components/IncreaseDecrease";
import { IconBolt, IconX } from "@tabler/icons-react";
import ButtonPrimary from "../brands/_components/ButtonPrimary";
import ButtonPrimaryLight from "../brands/_components/ButtonPrimaryLight";
import Link from "next/link";
import ProductCard from "@/Components/ProductCard/ProductCard";

export const CartItem = () => {
  return (
    <div className="flex  justify-between border-b pb-5 border-black-10">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
          <div className="relative  md:w-[44px] md:h-[44px]  w-[40px] h-[40px]">
            <Image
              alt="product"
              src={demoProductPhoto}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-4">
          <span className="line-clamp-1 [font-size:clamp(10px,5vw,14px)]">
            Apple Watch Series 8 GP
          </span>
          <div className="flex items-center gap-2">
            <span className="text-positive">Apple</span>
            <span className="text-black-10 text-xs ">|</span>
            <StarRating rating={2} />
          </div>
          <div className="md:hidden flex items-center gap-3">
            <strong className="text-black-50 text-xs font-normal">
              ${1500.03}
            </strong>
            <IconX className="text-black-50" width={12} height={12} />
            <IncreaseDecrease />
          </div>
        </div>
      </div>
      <div className="md:flex flex-col justify-between hidden">
        <span className="text-sm text-black-80">Unit Price</span>
        <strong className="text-gradient-primary">${1500.03}</strong>
      </div>
      <div className="md:flex flex-col justify-between hidden">
        <span className="text-sm text-black-80">Quantity</span>
        <IncreaseDecrease />
      </div>
      <div className="md:flex flex-col justify-between hidden">
        <span className="text-sm text-black-80">Sub Total</span>
        <strong className="text-gradient-primary">${4500.09}</strong>
      </div>
      <div className="flex flex-col md:items-center items-end md:justify-center justify-between">
        <button className="md:border rounded-full border-danger p-1">
          <IconX stroke={1} color="#FF3838" width={18} height={18} />
        </button>
        <strong className="text-gradient-primary md:hidden block">
          ${4500.09}
        </strong>
      </div>
    </div>
  );
};

const CartView = () => {
  return (
    <div>
      <div>
        <Breadcrumb title="Shopping Cart" />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="md:flex hidden items-center justify-center bg-gradient-primary-light py-3 my-5">
          🔥 Your cart will expire in <span>09:56</span> minutes! Please
          checkout now before your items sell out!
        </div>

        <div className="flex flex-col-reverse gap-2.5">
          <input
            type="range"
            className="w-full  pointer-events-none"
            value={10}
          />
          <span className="block text-base">
            Buy <span className="text-gradient-primary">$900</span> more to get{" "}
            <span className="text-gradient-primary font-semibold">
              Freeship
            </span>{" "}
            🔥
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-5 mt-7">
          <div className=" flex flex-col gap-5 md:border border-black-10 md:p-[30px] md:basis-4/6 rounded-[10px]">
            {[...Array(5)].map((item, index) => {
              return <CartItem key={index} />;
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
                  <strong className="text-base font-semibold">${1300}</strong>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80">Sub Shipping</span>
                  <strong className="text-base font-semibold">${100}</strong>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <span className="text-base text-black-80 capitalize">
                    discount
                  </span>
                  <strong className="text-base font-semibold text-danger">
                    -${50}
                  </strong>
                </div>
                <hr className="border border-black-10" />
              </div>
              <div className="flex items-center justify-between mt-5 gap-5">
                <span className="font-semibold text-2xl">Total</span>
                <span className="text-gradient-primary font-semibold text-2xl">
                  $1250
                </span>
              </div>
              <div className="flex flex-col gap-2.5 mt-12">
                <ButtonPrimary className="!rounded-full">
                  Proceed To Checkout &rarr;
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
        <div className="mt-10 flex flex-col gap-7">
          <span className="font-semibold text-2xl">
            You May be Interested in...
          </span>
          <div className="flex items-center gap-5 overflow-y-auto scrollbar-x-remove">
            {[...Array(10)].map((product, index) => {
              return <ProductCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
