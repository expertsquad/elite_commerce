"use client";
import React, { useContext } from "react";
import AddNewShippingInputSection from "./AddNewShippingInputSection";
import { AddressData } from "@/interfaces/defaultShippingAddress.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const AddNewShippingAddress = ({
  country,
  states,
  cities,
}: {
  country: string;
  states?: any;
  cities?: any;
}) => {
  const { orderData, setOrderData } = useContext(OrderInitContext);
  const handleNewAddressChange = (newAddress: AddressData) => {
    updateShippingAddressInContext(newAddress);
  };

  console.log(states, cities);
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

      <AddNewShippingInputSection
        onNewAddressChange={handleNewAddressChange}
        country={country}
        states={states}
        cities={cities}
      />
    </div>
  );
};

export default AddNewShippingAddress;
