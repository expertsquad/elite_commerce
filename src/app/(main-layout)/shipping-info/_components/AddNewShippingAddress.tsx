"use client";
import React, { useContext } from "react";
import AddNewShippingInputSection from "./AddNewShippingInputSection";
import { AddressData } from "@/interfaces/defaultShippingAddress.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
const AddNewShippingAddress = () => {
  const { orderData, setOrderData } = useContext(OrderInitContext);
  const handleNewAddressChange = (newAddress: AddressData) => {
    updateShippingAddressInContext(newAddress);
  };

  const updateShippingAddressInContext = (address: AddressData) => {
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      shippingAddress: address,
    }));
  };
  return (
    <div>
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-7 ">
        {" "}
        Contact Information
      </h3>

      <AddNewShippingInputSection onNewAddressChange={handleNewAddressChange} />
    </div>
  );
};

export default AddNewShippingAddress;
