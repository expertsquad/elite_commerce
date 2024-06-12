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
    <div>
      <div className="flex items-center justify-between">
        <span>Sub Total</span>
        <span>${subTotal}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Discount</span>
        <span>-{discount}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalSubTotalShippingFee;
