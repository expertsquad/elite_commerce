import { demoProductPhoto } from "@/assets";
import Image from "next/image";
import React from "react";

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
      <div className="flex flex-col justify-between gap-2">
        <span>iPhone 13 Pro</span>
        <span>Apple</span>
        <div className="flex items-center gap-1.5">
          <span>$66.33</span>
          <del>$100</del>
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
