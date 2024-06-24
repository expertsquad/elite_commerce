import { demoProductPhoto } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MegaDiscountCard = () => {
  return (
    <div className="bg-gradient-secondary-light p-8 flex flex-col gap-4 items-center max-w-[320px]">
      <div className="relative w-[195px] h-[120px]">
        <Image
          src={demoProductPhoto}
          alt="mega-discount-product"
          fill
          className="object-cover top-0 left-0"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-semibold">21% Discount</h3>
        <p className="text-base text-black-50 text-center">
          Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center justify-center gap-2">
          <span>Starting price:</span>
          <strong className="bg-white px-3 py-1.5 rounded">$99 USD</strong>
        </div>

        <Link
          href={"#"}
          className="flex py-2.5 px-10 rounded items-center justify-center gap-3 text-white bg-gradient-secondary uppercase"
        >
          Shop now &rarr;
        </Link>
      </div>
    </div>
  );
};

export default MegaDiscountCard;
