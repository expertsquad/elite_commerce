"use client";
import React, { useContext, useState } from "react";
import PaymentOptionCard from "./PaymentOptionCard";
import CODIcon from "@/assets/Images/CODIcon.svg";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const PaymentOption = ({ paymentMethod }: { paymentMethod: any }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  // order init context
  const { orderData, setOrderData } = useContext(OrderInitContext);
  console.log(orderData.payment);

  // Handler for selecting a payment option
  const handleSelectCOD = (option: string) => {
    setSelectedOption(option);

    if (option == "COD") {
      setOrderData({
        ...orderData,
        payment: {
          paymentStatus: "Unpaid",
          paymentMethod: option,
        },
      });
    } else if (option == "sslcommerz") {
      setOrderData({
        ...orderData,
        payment: {
          paymentStatus: "Paid",
          paymentGateway: option,
        },
      });
    } else if (option == "stripe") {
      setOrderData({
        ...orderData,
        payment: {
          paymentStatus: "Paid",
          paymentGateway: option,
        },
      });
    }
  };
  return (
    <div className="border border-black-10 p-7 rounded-lg my-7">
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-3">
        Choose payment option:
      </h3>

      <div className="flex items-center justify-center gap-4 flex-col w-full">
        {paymentMethod?.map((payment: any) => (
          <PaymentOptionCard
            key={payment?._id}
            name={payment?.paymentMethodName}
            title={payment?.paymentMethodName}
            cardIcon={CODIcon}
            onSelect={() => handleSelectCOD(payment?.paymentMethodName)}
            selected={selectedOption === payment?.paymentMethodName}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentOption;
