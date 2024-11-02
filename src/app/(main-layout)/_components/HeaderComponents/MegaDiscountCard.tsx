import { demoProductPhoto } from "@/assets";
import { server_url } from "@/constants";
import { IWidgetCard } from "@/interfaces/widget.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MegaDiscountCard = ({ widget }: { widget: IWidgetCard }) => {
  return (
    <div className="bg-gradient-secondary-light  p-8 flex flex-col gap-4 items-center max-w-[340px] h-[500px] overflow-hidden rounded">
      <div className="flex flex-col items-center gap-2">
        <span>{widget?.tag}</span>
        <h3 className="text-2xl font-semibold line-clamp-1">{widget?.title}</h3>
        <p className="text-base text-black-50 text-center line-clamp-2">
          {widget?.description}
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Link
          href={`products/${widget?.link}`}
          className="flex transition-all duration-300 hover:bg-gradient-secondary-reverse py-2.5 px-10 rounded items-center justify-center gap-3 text-white bg-gradient-secondary uppercase"
        >
          {widget?.buttonText} &rarr;
        </Link>
      </div>
      <div className="relative w-[195px] h-[200px]">
        <Image
          src={`${server_url}${widget?.productPhoto}`}
          alt="mega-discount-product"
          fill
          className="object-contain top-0 left-0"
        />
      </div>
    </div>
  );
};

export default MegaDiscountCard;
