"use client";
import React, { useState } from "react";
import ShipToCard from "./ShipToCard";
import AddNewShippingInputSection from "../../_components/AddNewShippingInputSection";
import { GetMeApiRes } from "@/interfaces/getMe.interface";

const ShipToAndBillingSection = ({ getMe }: { getMe: GetMeApiRes }) => {
  const [selectedOption, setSelectedOption] = useState("addedAddress");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="">
      <ShipToCard getMe={getMe} />

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
          <span className="ml-2">Use Different Dhipping Address</span>
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

export default ShipToAndBillingSection;
