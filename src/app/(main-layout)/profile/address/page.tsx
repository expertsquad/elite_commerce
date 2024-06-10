import React from "react";
import BillingAddress from "./_components/BillingAddress";
import ShippingAddress from "./_components/ShippingAddress";

const page = () => {
  return (
    <div>
      <BillingAddress />
      <ShippingAddress />
    </div>
  );
};

export default page;
