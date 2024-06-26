"use client";
import {
  AddressData,
  ResponseShippingAddress,
} from "@/interfaces/defaultShippingAddress.interface";
import React, { useContext, useState, useEffect } from "react";
import DefaultAddress from "./DefaultAddress";
import AddNewShippingInputSection from "./AddNewShippingInputSection";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { storages } from "@/constants";

const ShippingAddess = ({
  defaultAddress,
}: {
  defaultAddress: ResponseShippingAddress;
}) => {
  const [selectedOption, setSelectedOption] = useState("defaultAddress");
  const [shippingAddress, setShippingAddress] = useState(
    defaultAddress?.data[0] || {}
  );
  const { orderData, setRefetch } = useContext(OrderInitContext);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "defaultAddress") {
      const defaultAddr = defaultAddress?.data[0] || {};
      setShippingAddress(defaultAddr);
      updateShippingAddressInContext(defaultAddr);
    }
  };

  const handleNewAddressChange = (newAddress: AddressData) => {
    setShippingAddress(newAddress);
    updateShippingAddressInContext(newAddress);
  };

  const updateShippingAddressInContext = (address: AddressData) => {
    setLocalStorageData(storages.orderInit, {
      ...getLocalStorageData(storages.orderInit),
      shippingAddress: address,
    });
    setRefetch((prev) => prev + 1);
  };

  useEffect(() => {
    // Initialize with default address if selectedOption is defaultAddress
    if (selectedOption === "defaultAddress") {
      updateShippingAddressInContext(shippingAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, shippingAddress]);

  return (
    <div className="p-7 border border-black-10 rounded-lg ">
      <DefaultAddress defaultAddress={defaultAddress?.data?.[0]} />

      {/* Radio button */}
      <div className="my-5 flex items-center justify-start gap-5">
        <label className="inline-flex items-center mb-4 cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ${
              selectedOption === "defaultAddress"
                ? "border-gradient-primary p-[2px]"
                : ""
            }`}
          >
            {selectedOption === "defaultAddress" && (
              <div className="h-3 w-3 bg-gradient-primary rounded-full"></div>
            )}
          </div>
          <span className="ml-2">Use Default Address </span>
          <input
            type="radio"
            value="defaultAddress"
            name="shippingAddressOption"
            checked={selectedOption === "defaultAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>

        <label className="inline-flex items-center mb-4 cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ${
              selectedOption === "addNewAddress"
                ? "border-gradient-primary p-[2px]"
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
            name="shippingAddressOption"
            checked={selectedOption === "addNewAddress"}
            onChange={handleOptionChange}
            className="hidden"
          />
        </label>
      </div>

      {selectedOption === "addNewAddress" && (
        <AddNewShippingInputSection
          onNewAddressChange={handleNewAddressChange}
        />
      )}
    </div>
  );
};

export default ShippingAddess;
