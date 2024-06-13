import React from "react";

type TotalSubTotalShippingFeeProps = {
  subTotal: number;
  discount: number;
  shipping: number;
  total: number;
  orderQuanity: number;
  orderItemsLength: number;
};

const OrderSummary = ({
  discount,
  shipping,
  subTotal,
  total,
  orderItemsLength,
  orderQuanity,
}: TotalSubTotalShippingFeeProps) => {
  return (
    <div className="border border-black-10 md:p-[30px] p-5 rounded-lg my-6 md:my-0">
      <h1 className="font-semibold text-base md:text-lg mb-[30px]">
        Order Summary
      </h1>
      <div className="flex items-center justify-between mb-3">
        <span className="text-black-80">Sub Total </span>
        <span className="font-bold">${subTotal}</span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span>Shipping </span>
        <span>${shipping}</span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span>Discount </span>
        <span className="text-danger">-${discount}</span>
      </div>
      <span className="h-[1px] bg-black-10 flex w-full mb-5"></span>
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-bold">Total: </span>
          <span className="text-black-50">
            ({orderQuanity} Package, {orderItemsLength} Items)
          </span>
        </div>
        <span className="font-bold text-gradient-primary">${total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
