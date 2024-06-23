"use client";
import { ResponseShippingAddress } from "@/interfaces/defaultShippingAddress.interface";
import React, { useState } from "react";
import DefaultAddress from "./DefaultAddress";
import AddNewShippingInputSection from "./AddNewShippingInputSection";

const ShippingAddess = ({
  defaultAddress,
}: {
  defaultAddress: ResponseShippingAddress;
}) => {
  const [selectedOption, setSelectedOption] = useState("addedAddress");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-7 border border-black-10 rounded-lg ">
      <DefaultAddress defaultAddress={defaultAddress?.data?.[0]} />

      {/* Radio button */}
      <div className="my-5 flex items-center justify-start gap-5">
        <label className="inline-flex items-center mb-4 cursor-pointer  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center  border-gradient-primary p-[2px]  ${
              selectedOption === "addedAddress"
                ? " border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "addedAddress" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use Default Address </span>
          <input
            type="radio"
            value="addedAddress"
            name="addedAddress"
            checked={selectedOption === "addedAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center mb-4 cursor-pointer  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center  border-gradient-primary p-[2px]  ${
              selectedOption === "addNewAddress"
                ? " border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "addNewAddress" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use Different Shipping Address</span>
          <input
            type="radio"
            value="addNewAddress"
            name="addNewAddress"
            checked={selectedOption === "addNewAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>

      {selectedOption === "addNewAddress" && <AddNewShippingInputSection />}
    </div>
  );
};

export default ShippingAddess;
