import React from "react";
import { FeaturedProduct } from "./FeaturedProduct";
import MegaDiscountCard from "./MegaDiscountCard";
import { IWidgetCard } from "@/interfaces/widget.interface";
import { IProduct } from "@/interfaces/product.interface";

const FeaturedCard = ({
  widget,
  products,
  currencySymbol,
}: {
  widget: IWidgetCard;
  products?: IProduct[];
  currencySymbol?: string;
}) => {
  return (
    <div className="hidden lg:flex px-5 gap-5 min-w-max">
      <div className=" flex flex-col gap-5">
        <h1 className="text-base font-semibold text-black-80 uppercase text-gradient-primary">
          Top Products
        </h1>
        <div className="flex flex-col gap-4 overflow-y-auto scrollbar-y-remove h-[clamp(100px,70vh,500px)]">
          {products?.map((product, index) => (
            <FeaturedProduct
              key={index}
              product={product}
              currencySymbol={currencySymbol ? currencySymbol : ""}
            />
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
