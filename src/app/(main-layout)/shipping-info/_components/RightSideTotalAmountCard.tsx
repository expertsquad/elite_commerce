import { Button } from "@/Components/Buttons";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const RightSideTotalAmountCard = () => {
  return (
    <>
      {/* Sub total , shipping , and discount  */}
      <div className="flex flex-col  gap-4 py-4 border-b border-black-10">
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <strong>$1300</strong>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>-30</p>
        </div>
      </div>
      {/* Total */}
      <div className="flex items-center justify-between [font-size:_clamp(1.4em,40vw,1.7em)] font-bold my-2">
        <h2 className="">Total</h2>
        <h2 className="text-gradient-primary">$1350</h2>
      </div>
      {/* Button Link */}
      <div>
        <Button className="bg-gradient-primary w-full rounded-lg py-2.5 text-white my-2">
          Button Text <IconArrowRight />{" "}
        </Button>
      </div>
    </>
  );
};

export default RightSideTotalAmountCard;
