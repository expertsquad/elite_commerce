import React from "react";
import SmallProductCard from "../_components/SmallProductCard";
import WidgetCard from "@/Components/WidgetCard";

const RightSideComponent = () => {
  return (
    <div className="flex flex-col gap-7 ">
      {/* To Selling Brands Product */}
      <div className="hidden md:flex flex-col gap-7 ">
        <span className="uppercase text-lg font-semibold">
          To Selling Brands Product
        </span>
        <div className="flex flex-col gap-7">
          {[...Array(5)].map((_, index) => {
            return <SmallProductCard key={index} />;
          })}
        </div>
      </div>
      <hr className="border-black-10 hidden md:block" />

      {/* Widget Promotion card */}

      <div>
        <WidgetCard />
      </div>
    </div>
  );
};

export default RightSideComponent;
