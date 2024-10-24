"use client";
import React, { useContext, useState, useEffect } from "react";
import ShipToCard from "./ShipToCard";
import AddNewBillingAddress from "./AddNewBillingAddress";
import { IApiResponse } from "@/interfaces/apiResponse.interface";
import { IUserMe } from "@/interfaces/getMe.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { AddressData } from "@/interfaces/defaultShippingAddress.interface";

const ShipToAndBillingSection = ({ country }: { country: string }) => {
  const [selectedOption, setSelectedOption] = useState("sameAsShipping");
  const { orderData, setOrderData } = useContext(OrderInitContext);

  useEffect(() => {
    if (selectedOption === "sameAsShipping") {
      setOrderData((prevData) => ({
        ...prevData,
        billingAddress: orderData?.shippingAddress,
      }));
    }
  }, [selectedOption, orderData?.shippingAddress, setOrderData]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "sameAsShipping") {
      setOrderData((prevData) => ({
        ...prevData,
        billingAddress: orderData?.shippingAddress,
      }));
    }
  };

  const handleNewAddressChange = (newAddress: AddressData) => {
    if (selectedOption === "addNewBillingAddress") {
      setOrderData((prevData) => ({
        ...prevData,
        billingAddress: newAddress,
      }));
    }
  };

  return (
    <div className="md:border md:border-black-10 border-transparent md:p-7 p-5 rounded-lg">
      <ShipToCard />

      <div className="my-5 flex md:items-center justify-start md:flex-row flex-col gap-5">
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ${
              selectedOption === "sameAsShipping"
                ? "border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "sameAsShipping" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Same as Shipping Address</span>
          <input
            type="radio"
            value="sameAsShipping"
            name="billingOption"
            checked={selectedOption === "sameAsShipping"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center mb-4 cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ${
              selectedOption === "addNewBillingAddress"
                ? "border-gradient-primary p-[2px]"
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
            name="billingOption"
            checked={selectedOption === "addNewBillingAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>

      {selectedOption === "addNewBillingAddress" && (
        <AddNewBillingAddress
          onNewAddressChange={handleNewAddressChange}
          country={country}
        />
      )}
    </div>
  );
};

export default ShipToAndBillingSection;
