import { orderPlacedDesign, orderPlacedDesign2 } from "@/assets";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderPlacedThankYou = ({ id }: { id: string }) => {
  return (
    <div className="flex-1 bg-[#2943931A] bg-opacity-10 md:rounded-lg">
      <div className="flex items-center">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={orderPlacedDesign} alt="order placed design" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image src={orderPlacedDesign2} alt="order placed design" />
          <h2>Thank You!</h2>
          <span className="my-2.5">Your order is successfully placed</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus turpis morbi
            fermentum sed quis.
          </p>
          <button className="border-gradient-primary p-[1px] rounded-full mt-2.5">
            <Link
              href={`/order-track/${id}`}
              className="text-gradient-secondary px-4 py-2"
            >
              TRACK YOUR ORDER
            </Link>
          </button>
        </div>
      </div>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-x-1 text-black-80 py-2.5"
      >
        <IconArrowLeft width={20} height={20} />
        <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default OrderPlacedThankYou;
