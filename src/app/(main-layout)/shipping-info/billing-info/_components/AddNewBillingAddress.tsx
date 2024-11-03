import React, { useEffect, useState } from "react";
import CustomInput from "@/Components/CustomInput";
import CustomDropdown from "@/Components/CustomDropdown";

const AddNewBillingAddress = ({
  onNewAddressChange,
  country,
  states,
  cities,
}: {
  onNewAddressChange: (newAddress: any) => void;
  country: string;
  states?: any;
  cities?: any;
}) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
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
    selectedShippingAddress: "newAddress",
    city: "",
  });
  // country data api
  const stateByCountryName = states?.data?.map((s: any) => s.name);
  const cityByCountryName = cities?.data?.map((s: any) => s.name);

  // used useEffect to set city and state
  useEffect(() => {
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      city: city,
      state: state,
      country: country,
    }));
  }, [city, state, country]);

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const updatedAddress = {
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    };
    setNewAddress(updatedAddress);
    onNewAddressChange(updatedAddress);
  };

  return (
    <form>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 ">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          value={newAddress?.firstName}
          onChange={handleInputChange}
          // inputStyle={
          //   newAddress?.firstName === "" ? " border border-danger" : ""
          // }
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          value={newAddress?.lastName}
          onChange={handleInputChange}
          // inputStyle={
          //   newAddress?.lastName === "" ? " border border-danger" : ""
          // }
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          value={newAddress?.phoneNumber}
          onChange={handleInputChange}
          // inputStyle={
          //   newAddress?.phoneNumber === "" ? " border border-danger" : ""
          // }
        />
        <div className="opacity-50 pointer-events-none">
          <CustomInput
            label="Country"
            type="text"
            name="country"
            placeholder="Bangladesh"
            value={country}
            onChange={handleInputChange}
            readonly
          />
        </div>
        <CustomDropdown
          data={stateByCountryName}
          onClick={(value) => setState(value)}
          className={`w-full py-2 rounded-lg px-3 border border-black-10 ${
            state == "" ? "" : "border border-black-10"
          }`}
          // className={`w-full py-2 rounded-lg px-3 ${
          //   state == "" ? "border border-danger" : "border border-black-10"
          // }`}
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={newAddress?.state ? newAddress?.state : "Select State"}
          label="State"
          searchInput={true}
        />
        <CustomDropdown
          data={cityByCountryName}
          onClick={(value) => setCity(value)}
          className={`w-full py-2 rounded-lg px-3 border border-black-10 ${
            city == "" ? "" : "border border-black-10"
          }`}
          // className={`w-full py-2 rounded-lg px-3 ${
          //   city == "" ? "border border-danger" : "border border-black-10"
          // }`}
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={newAddress?.city ? newAddress?.city : "Select City"}
          label="City"
          searchInput={true}
        />

        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          value={newAddress?.zipCode}
          onChange={handleInputChange}
          // inputStyle={newAddress?.zipCode === "" ? " border border-danger" : ""}
        />
        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newAddress?.companyName}
          onChange={handleInputChange}
        />
        <div className="row-span-1">
          <CustomInput
            label="Street Address"
            type="text"
            name="streetAddress"
            placeholder="1234 Main St"
            value={newAddress?.streetAddress}
            onChange={handleInputChange}
            // inputStyle={
            //   newAddress?.streetAddress == "" ? " border border-danger" : ""
            // }
          />
        </div>
      </div>
    </form>
  );
};

export default AddNewBillingAddress;
