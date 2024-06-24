import { fetchData } from "@/actions/fetchData";
import { testWidget } from "@/assets";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { server_url } from "@/constants";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IWidgetCard {
  widgetTitle: string;
  discountPercentage: number;
  productType: string;
  buttonText: string;
}
const WidgetCard = async ({ className }: { className?: string }) => {
  const promotion = await fetchData({
    route: "/promotions/deals-of-the-day",
  });

  const widget = promotion?.data?.widget;

  return (
    <div
      className={`flex flex-col items-center gap-3.5 justify-center bg-gradient-primary rounded-[10px] p-5 md:w-full max-w-[300px] ${className}`}
    >
      <div className="flex flex-col items-center gap-1.5 text-white">
        <span className="text-sm">{widget?.tag}</span>
        <span className="text-[26px] font-bold">{widget?.title}</span>
        <span className="text-sm">{widget?.description}</span>
      </div>
      <Link
        href={widget?.link}
        className="uppercase flex items-center justify-center gap-2.5 py-2.5 px-3.5 rounded bg-white "
      >
        <span className="text-gradient-primary text-base">
          {widget?.buttonText}
        </span>
        <span>
          <GenerateGradientIcon
            IconComponent={IconArrowRight}
            className="!w-4 !h-4"
          />
        </span>
      </Link>
      <div className="relative w-[165px] h-[220px] mt-5">
        <Image
          src={server_url + widget?.productPhoto}
          alt="widget image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WidgetCard;
