import { demoProductPhoto } from "@/assets";
import Image from "next/image";
import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { FeaturedProduct } from "./FeaturedProduct";
import MegaDiscountCard from "./MegaDiscountCard";

const FeaturedCard = () => {
  return (
    <div className="px-5 flex  gap-5 ">
      <div className=" flex flex-col gap-5">
        <h1 className="text-base font-semibold text-black-80">
          FEATURED PHONES
        </h1>
        <div className="flex flex-col gap-4 overflow-y-auto scrollbar-y-remove h-[460px]">
          {[...Array(3)].map((_, index) => (
            <FeaturedProduct key={index} />
          ))}
        </div>
      </div>
      <div className="lg:block hidden">
        <MegaDiscountCard />
      </div>
    </div>
  );
};

export default FeaturedCard;
