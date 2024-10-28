import { orderPlacedDesign2, successGif } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderPlacedThankYou = ({
  id,
  isQuickOrder,
}: {
  id: string;
  isQuickOrder?: boolean;
}) => {
  return (
    <div className="flex-1 md:h-[670px] flex flex-col justify-center items-center pb-5 md:pb-0">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image src={successGif} alt="order placed design" />
          <h2 className="font-semibold text-gradient-secondary text-2xl">
            Thank You!
          </h2>
          <span className="my-2.5 font-semibold">
            Your order is successfully placed
          </span>
          <p className="text-sm">
            Your order is successfully confirmed! Get ready for an exciting
            journey ahead. Stay tuned for updates as we prepare your package.
            Thank you for choosing us!
          </p>
          <Link href={`/order-track/${id}`}>
            {!isQuickOrder && (
              <div className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-secondary rounded-full shadow-md group mt-5">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">
                  Track Order
                </span>
                <span className="relative invisible">Track Order</span>
              </div>
            )}
          </Link>
        </div>
      </div>

      {isQuickOrder ? (
        <Link
          href="/"
          className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-full shadow-inner group mt-5"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Back To Home
          </span>
        </Link>
      ) : (
        <Link className="mt-5 underline" href={"/"}>
          Back To Home
        </Link>
      )}
    </div>
  );
};

export default OrderPlacedThankYou;
