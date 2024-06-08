import { testWidget } from "@/assets";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export interface IWidgetCard {
  widgetTitle: string;
  discountPercentage: number;
  productType: string;
  buttonText: string;
}
const WidgetCard = () => {
  return (
    <div className="flex flex-col items-center gap-3.5 justify-center bg-gradient-primary rounded-[10px] p-5 md:w-full max-w:[300px]">
      <div className="flex flex-col items-center gap-1.5 text-white">
        <span className="text-sm">Xiaomi Mobile Phone</span>
        <span className="text-[26px] font-bold">32% Discount</span>
        <span className="text-sm">For all ellectronics products</span>
      </div>
      <button className="uppercase flex items-center justify-center gap-2.5 py-2.5 px-3.5 rounded bg-white ">
        <span className="text-gradient-primary text-base">shop now</span>
        <span>
          <GenerateGradientIcon
            IconComponent={IconArrowRight}
            className="!w-4 !h-4"
          />
        </span>
      </button>
      <div className="relative w-[165px] h-[220px] mt-5">
        <Image
          src={testWidget}
          alt="widget image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WidgetCard;
