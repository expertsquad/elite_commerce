import Image from "next/image";
import React from "react";
import emptyState from "@/assets/Images/ProductEmptyState.svg";

const ProductEmptyState = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 h-[calc(100vh-350px)]">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={emptyState}
          alt="No Product Found"
          fill
          className="object-contain inset-0 w-full h-full"
        />
      </div>
      <span className="[font-size:_clamp(14px,2.5vw,16px)] text-black-80">
        {message ? message : "Sorry No Data Found!!"}
      </span>
    </div>
  );
};

export default ProductEmptyState;
