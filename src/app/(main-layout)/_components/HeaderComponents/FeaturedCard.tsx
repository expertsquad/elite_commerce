import { demoProductPhoto } from "@/assets";
import Image from "next/image";
import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { FeaturedProduct } from "./FeaturedProduct";
import MegaDiscountCard from "./MegaDiscountCard";
import { IWidgetCard } from "@/interfaces/widget.interface";

const FeaturedCard = ({ widget }: { widget: IWidgetCard }) => {
  return (
    <div className="hidden lg:flex px-5 gap-5 min-w-max">
      <div className=" flex flex-col gap-5">
        <h1 className="text-base font-semibold text-black-80">
          FEATURED PHONES
        </h1>
        <div className="flex flex-col gap-4 overflow-y-auto scrollbar-y-remove h-[clamp(100px,70vh,500px)]">
          {[...Array(5)].map((_, index) => (
            <FeaturedProduct key={index} />
          ))}
        </div>
      </div>
      <div className="hidden 2xl:block h-full overflow-auto">
        <MegaDiscountCard widget={widget} />
      </div>
    </div>
  );
};

export default FeaturedCard;
