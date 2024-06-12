"use client";
import React, { useState } from "react";
import ShipToCard from "./ShipToCard";
import { GetMeApiRes } from "@/interfaces/getMe.interface";
import AddNewBillingAddress from "./AddNewBillingAddress";

const ShipToAndBillingSection = ({ getMe }: { getMe: GetMeApiRes }) => {
  const [selectedOption, setSelectedOption] = useState("sameAsShipping");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="md:border md:border-black-10 border-transparent md:p-7 p-5 rounded-lg">
      <ShipToCard getMe={getMe} />

      {/* Radio button */}
      <div className="my-5 flex items-center justify-start gap-5">
        <label className="inline-flex items-center mb-4 cursor-pointer  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center  border-gradient-primary p-[2px]  ${
              selectedOption === "sameAsShipping"
                ? " border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "sameAsShipping" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Same as Shipping Address </span>
          <input
            type="radio"
            value="sameAsShipping"
            name="sameAsShipping"
            checked={selectedOption === "sameAsShipping"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center mb-4 cursor-pointer  ">
          <div
            className={`w-5 h-5 rounded-full bg-white  flex items-center justify-center  border-gradient-primary p-[2px]  ${
              selectedOption === "addNewBillingAddress"
                ? " border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "addNewBillingAddress" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use a different billing address</span>
          <input
            type="radio"
            value="addNewBillingAddress"
            name="addNewBillingAddress"
            checked={selectedOption === "addNewBillingAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>

      {selectedOption === "addNewBillingAddress" && <AddNewBillingAddress />}
    </div>
  );
};

export default ShipToAndBillingSection;
