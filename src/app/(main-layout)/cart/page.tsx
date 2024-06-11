import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import Image from "next/image";
import { demoProductPhoto } from "@/assets";
import StarRating from "@/Components/StarRating";
import IncreaseDecrease from "../brands/_components/IncreaseDecrease";
import { IconX } from "@tabler/icons-react";

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
        <div className="flex flex-col gap-4">
          <span className="line-clamp-1">Apple Watch Series 8 GP</span>
          <div className="flex items-center gap-2">
            <span className="text-positive">Apple</span>
            <span className="text-black-10 text-xs ">|</span>
            <StarRating rating={2} />
          </div>
        </div>
      </div>
      <div className="flex  justify-between flex-col">
        <span className="text-sm text-black-80">Unit Price</span>
        <strong className="text-gradient-primary">${1500.03}</strong>
      </div>
      <div className="flex flex-col justify-between">
        <span>Quantity</span>
        <IncreaseDecrease />
      </div>
      <div className="flex flex-col items-center justify-between">
        <span>Sub Total</span>
        <strong className="text-gradient-primary">${4500.09}</strong>
      </div>
      <div className="flex items-center justify-center">
        <button className="">
          <IconX stroke={1} color="#FF3838" />
        </button>
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
        <div className="flex gap-5 mt-7">
          <div className=" flex flex-col gap-5 md:border border-black-10 md:p-[30px] md:basis-4/6 rounded-[10px]">
            {[...Array(5)].map((item, index) => {
              return <CartItem key={index} />;
            })}
          </div>
          <div className="md:basis-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
