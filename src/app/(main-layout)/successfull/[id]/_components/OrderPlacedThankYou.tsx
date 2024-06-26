import { orderPlacedDesign, orderPlacedDesign2 } from "@/assets";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderPlacedThankYou = ({
  id,
  isQuickOrder,
}: {
  id: string;
  isQuickOrder: boolean;
}) => {
  return (
    <div className="flex-1 md:h-[670px] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image src={orderPlacedDesign2} alt="order placed design" />
          <h2>Thank You!</h2>
          <span className="my-2.5">Your order is successfully placed</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus turpis morbi
            fermentum sed quis.
          </p>
          {isQuickOrder ? (
            ""
          ) : (
            <button className="border-gradient-primary p-[1px] rounded-full mt-2.5">
              <Link
                href={`/order-track/${id}`}
                className="text-gradient-secondary px-4 py-2"
              >
                TRACK YOUR ORDER
              </Link>
            </button>
          )}
        </div>
      </div>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-x-1  py-2.5"
      >
        <IconArrowLeft width={20} height={20} />
        <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default OrderPlacedThankYou;
