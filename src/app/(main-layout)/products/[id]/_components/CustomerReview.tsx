import { gradientLine } from "@/assets";
import Image from "next/image";
import React from "react";

const CustomerReview = () => {
  return (
    <div>
      <h2 className="text-gradient-primary text-[18px] md:text-[24px] font-semibold">
        Customer Reivew
      </h2>
      <Image src={gradientLine} alt="underline" />
    </div>
  );
};

export default CustomerReview;
