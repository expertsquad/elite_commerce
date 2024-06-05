import { brandTestImage } from "@/assets";

import Image from "next/image";
import React from "react";

const BrandCard = () => {
  return (
    <div className="border  border-black-50 rounded-[10px] px-2.5 md:py-5 py-4 w-[clamp(256px,2vw,185px)] flex flex-col gap-5 cursor-pointer">
      <div className="flex flex-col items-center md:gap-5 gap-2.5">
        <div className="relative md:w-[100px] md:h-[100px] w-[50px] h-[50px] overflow-hidden rounded-[10px] ">
          <Image
            fill
            src={brandTestImage}
            alt="brand image"
            className="object-cover"
          />
        </div>
        <span className="text-lg font-semibold text-gradient-primary">
          Фактор-ТС
        </span>
      </div>
      <hr className="h-[1px] border-black-50" />
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-center text-black-80">
          55 product available
        </span>
      </div>
    </div>
  );
};

export default BrandCard;
