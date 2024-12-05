import { AddressData } from "@/interfaces/defaultShippingAddress.interface";
import React from "react";

const DefaultAddress = ({
  defaultAddress,
}: {
  defaultAddress: AddressData;
}) => {
  return (
    <div className="flex items-start justify-start gap-3 flex-col p-5 border border-black-10 rounded-lg">
      <strong>
        {defaultAddress?.firstName + " " + defaultAddress?.lastName}
      </strong>
      <p>{defaultAddress?.streetAddress}</p>
      <p>
        {defaultAddress?.country +
          ", " +
          defaultAddress?.state +
          ", " +
          defaultAddress?.city +
          ", " +
          defaultAddress?.zipCode}
      </p>
      <p>{defaultAddress?.phoneNumber}</p>
    </div>
  );
};

export default DefaultAddress;
