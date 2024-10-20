"use client";
import CustomInput from "../../../../../Components/CustomInput";
import { countryNames } from "@/constants/countryNames.constant";
import SubmitButton from "@/Components/SubmitButton";
import { IAddress } from "@/interfaces/address.interface";
import CustomDropdown from "@/Components/CustomDropdown";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useState } from "react";

const BillingAddress = ({
  billingAddress,
  country,
}: {
  billingAddress: IAddress;
  country: string;
}) => {
  const [state, setState] = useState(
    billingAddress?.state ? billingAddress?.state : ""
  );
  const [city, setCity] = useState(
    billingAddress?.city ? billingAddress?.city : ""
  );
  const [loading, setLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    // state appended
    formData.append("state", state);
    // city appended
    formData.append("city", city);
    // country appended
    formData.append("country", country);
    const dataObj: Record<string, any> = {};

    for (const [key, value] of Array.from(formData.entries())) {
      dataObj[key] = value;
    }
    //zipCode string to number
    if (typeof dataObj.zipCode === "string") {
      dataObj.zipCode = parseInt(dataObj.zipCode);
    }
    // Add isBilling = true
    dataObj.isBilling = true;

    if (!billingAddress) {
      const result = await postDataMutation({
        route: "/user-address/add",
        data: JSON.stringify(dataObj),
        formatted: true,
      });
    } else {
      const result = await updateDataMutation({
        route: "/user-address" + "/" + billingAddress?._id,
        data: JSON.stringify(dataObj),
        formatted: true,
        method: "PUT",
      });
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${loading ? "opacity-50 pointer-events-none" : ""}`}
    >
      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Shipping Address
      </h3>

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          defaultValue={billingAddress?.firstName}
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          defaultValue={billingAddress?.lastName}
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          defaultValue={billingAddress?.phoneNumber}
        />

        <div className="opacity-50 pointer-events-none">
          <CustomInput
            label="Country"
            type="text"
            name="state"
            placeholder="Bangladesh"
            defaultValue={country}
          />
        </div>
        <CustomDropdown
          data={countryNames}
          onClick={(value) => setState(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={state}
          label="State"
          searchInput={true}
        />
        <CustomDropdown
          data={countryNames}
          onClick={(value) => setCity(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={city}
          label="City"
          searchInput={true}
        />
        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          defaultValue={billingAddress?.zipCode}
        />

        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          defaultValue={billingAddress?.companyName}
        />
      </div>
      <div className="mt-2.5">
        <CustomInput
          label="Street Address"
          type="text"
          name="streetAddress"
          placeholder="1234 Main St"
          defaultValue={billingAddress?.streetAddress}
        />
      </div>
      <div className="flex justify-end items-center mt-5">
        <SubmitButton className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
          Update Account Details
        </SubmitButton>
      </div>
    </form>
  );
};

export default BillingAddress;
