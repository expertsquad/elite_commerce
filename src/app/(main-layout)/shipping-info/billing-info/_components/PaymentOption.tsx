import React from "react";
import PaymentOptionCard from "./PaymentOptionCard";
import CODIcon from "@/assets/Images/CODIcon.svg";

const PaymentOption = () => {
  return (
    <div className="border border-black-10 p-7 rounded-lg my-7">
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-3 ">
        {" "}
        Choose payment option :
      </h3>

      <div>
        <PaymentOptionCard name="Cash On Delivery" cardIcon={CODIcon} />
      </div>
    </div>
  );
};

export default PaymentOption;
