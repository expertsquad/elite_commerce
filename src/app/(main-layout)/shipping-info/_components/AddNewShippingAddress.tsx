import React from "react";
import AddNewShippingInputSection from "./AddNewShippingInputSection";
const AddNewShippingAddress = () => {
  return (
    <div>
      <h3 className="uppercase text-lg font-semibold text-gradient-primary my-7 ">
        {" "}
        Contact Information
      </h3>

      <AddNewShippingInputSection />
    </div>
  );
};

export default AddNewShippingAddress;
