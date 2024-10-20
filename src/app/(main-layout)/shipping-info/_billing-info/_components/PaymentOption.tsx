"use client";
import React, { useContext } from "react";
import PaymentOptionCard from "./PaymentOptionCard";
import CODIcon from "@/assets/Images/CODIcon.svg";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const PaymentOption = () => {
  // order init context
  const { orderData, setOrderData } = useContext(OrderInitContext);

  // Handler for selecting a payment option
  const handleSelectCOD = () => {
    setOrderData({
      ...orderData,
      payment: {
        ...orderData.payment,
        paymentStatus: "Unpaid",
        paymentMethod: "COD",
      },
    });
  };

  return (
    <div className="border border-black-10 p-7 rounded-lg my-7">
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-3 ">
        Choose payment option:
      </h3>

      <div>
        <PaymentOptionCard
          name="COD"
          title="Cash On Delivery"
          cardIcon={CODIcon}
          onSelect={handleSelectCOD}
        />
      </div>
    </div>
  );
};

export default PaymentOption;
