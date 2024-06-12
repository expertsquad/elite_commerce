import React from "react";

type TotalSubTotalShippingFeeProps = {
  subTotal: number;
  discount: number;
  shipping: number;
  total: number;
};

const TotalSubTotalShippingFee = ({
  discount,
  shipping,
  subTotal,
  total,
}: TotalSubTotalShippingFeeProps) => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex items-center justify-between">
        <span>Sub Total</span>
        <span>${subTotal}</span>
      </div>
      <span className="h-[1px] w-full flex bg-[#4C4C4C]"></span>
      <div className="flex items-center justify-between font-light">
        <span>Discount</span>
        <span className="text-[#FF3838]">-${discount}</span>
      </div>
      <span className="h-[1px] w-full flex bg-[#4C4C4C]"></span>

      <div className="flex items-center justify-between font-light">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>
      <span className="h-[1px] w-full flex bg-[#4C4C4C]"></span>

      <div className="flex items-center justify-between">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalSubTotalShippingFee;
