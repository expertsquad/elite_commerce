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
          className="text-black-50 text-sm md:text-base font-light"
          htmlFor=""
        >
          Name
        </label>
        <span>{ordreInformation?.fullName}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-50 text-sm md:text-base font-light"
          htmlFor=""
        >
          Email
        </label>
        <span>{ordreInformation?.email}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-50 text-sm md:text-base font-light"
          htmlFor=""
        >
          Phone
        </label>
        <span>{ordreInformation?.phoneNumber}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-50 text-sm md:text-base font-light"
          htmlFor=""
        >
          Country
        </label>
        <span>{ordreInformation?.shippingAddress?.country}</span>
      </div>
      <div className="flex flex-col gap-y-1 mb-3.5">
        <label
          className="text-black-50 text-sm md:text-base font-light"
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
          className="text-black-50 text-sm md:text-base font-light"
          htmlFor=""
        >
          Payment
        </label>
        <span>{paymentMethod}</span>
      </div>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-x-1 bg-gradient-primary text-white rounded-full py-1.5 text-base mt-10"
      >
        <IconArrowLeft stroke={2} size={18} />
        Go To Home
      </Link>
    </div>
  );
};

export default OrderInformation;
