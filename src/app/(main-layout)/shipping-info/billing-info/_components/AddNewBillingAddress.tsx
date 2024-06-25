import React, { useContext, useState } from "react";
import { countryNames } from "@/constants/countryNames.constant";
import CustomInput from "@/Components/CustomInput";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";

const AddNewBillingAddress = ({
  onNewAddressChange,
}: {
  onNewAddressChange: (newAddress: any) => void;
}) => {
  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    zipCode: "",
    companyName: "",
    streetAddress: "",
    country: "",
    isDefault: false,
  });

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const updatedAddress = {
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    };
    setNewAddress(updatedAddress);
    onNewAddressChange(updatedAddress);
  };

  // order init context
  const { orderData, setOrderData } = useContext(OrderInitContext);
  return (
    <form>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          value={newAddress.firstName}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.firstName === ""
              ? " border border-danger"
              : ""
          }
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          value={newAddress.lastName}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.lastName === ""
              ? " border border-danger"
              : ""
          }
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          value={newAddress.phoneNumber}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.phoneNumber === ""
              ? " border border-danger"
              : ""
          }
        />

        <label htmlFor="country" className="text-black-50">
          Select Country
          <select
            name="country"
            id="country"
            className="w-full border border-black-10 text-black-80 px-3.5 py-2.5 mt-2 focus:outline-none focus:border-fuchsia-800 rounded-md"
            value={newAddress.country}
            onChange={handleInputChange}
          >
            {countryNames?.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <CustomInput
          label="State"
          type="text"
          name="state"
          placeholder="California"
          value={newAddress.state}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.state === ""
              ? " border border-danger"
              : ""
          }
        />

        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          value={newAddress.zipCode}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.zipCode === ""
              ? " border border-danger"
              : ""
          }
        />

        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newAddress.companyName}
          onChange={handleInputChange}
        />
        <CustomInput
          label="Street Address"
          type="text"
          name="streetAddress"
          placeholder="1234 Main St"
          value={newAddress.streetAddress}
          onChange={handleInputChange}
          inputStyle={
            orderData?.billingAddress?.streetAddress === ""
              ? " border border-danger"
              : ""
          }
        />
      </div>
    </form>
  );
};

export default AddNewBillingAddress;
