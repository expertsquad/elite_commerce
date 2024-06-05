import { demoProductPhoto } from "@/assets";
import Image from "next/image";
import React from "react";

interface SmallProductCardProps {
  productName: string;
  brandName: string;
  price: number;
  oldPrice: number;
}

const SmallProductCard = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-[70px] h-[70px] overflow-hidden rounded-md">
        <Image
          src={demoProductPhoto}
          alt="product image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-1">
        <span className="text-black text-base">iPhone 13 Pro</span>
        <span className="text-gradient-primary text-xs">Apple</span>
        <div className="flex items-center gap-1.5">
          <span className="text-black font-semibold text-sm">$66.33</span>
          <del className="text-xs text-black text-opacity-70">$100</del>
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
