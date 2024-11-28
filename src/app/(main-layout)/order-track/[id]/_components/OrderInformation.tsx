import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface Address {
  firstName: string;
  lastName: string;
  streetAddress: string;
  state: string;
  country: string;
  zipCode: number;
  phoneNumber: string;
  _id: string;
}

interface OrderInformationProps {
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  shippingAddress: Address;
  billingAddress: Address;
}

const OrderInformation = ({
  ordreInformation,
  paymentMethod,
}: {
  ordreInformation: OrderInformationProps;
  paymentMethod: string;
}) => {
  return (
    <div className="border border-black-10 md:p-[30px] p-5 rounded-lg w-full">
      <h1 className="font-semibold text-base md:text-lg mb-[30px]">
        Order Information
      </h1>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Name
        </label>
        <span>{ordreInformation?.fullName}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Email
        </label>
        <span>{ordreInformation?.email}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Phone
        </label>
        <span>{ordreInformation?.phoneNumber}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Country
        </label>
        <span>{ordreInformation?.shippingAddress?.country}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Shipping Address
        </label>
        <span className="text-wrap line-clamp-2">
          {ordreInformation?.shippingAddress?.streetAddress}
        </span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-70 text-sm md:text-base font-light"
          htmlFor=""
        >
          Payment
        </label>
        <span>{paymentMethod}</span>
      </div>
      {/* <Link
        href={"/"}
        className="flex items-center justify-center gap-x-1 bg-gradient-primary text-white rounded-full py-1.5 text-base mt-10"
      >
        <IconArrowLeft stroke={2} size={20} />
        Go To Home
      </Link> */}
      <Link
        href="/"
        className="relative inline-flex items-center justify-center py-2 overflow-hidden font-medium text-black transition duration-300 ease-out border border-black-80 rounded-full shadow-md group w-full"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6 rotate-180"
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
        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          GO TO HOME
        </span>
        <span className="relative invisible">GO TO HOME</span>
      </Link>
    </div>
  );
};

export default OrderInformation;
