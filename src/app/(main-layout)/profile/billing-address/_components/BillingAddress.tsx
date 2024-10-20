"use client";
import CustomInput from "../../../../../Components/CustomInput";
import { countryNames } from "@/constants/countryNames.constant";
import SubmitButton from "@/Components/SubmitButton";
import { IAddress } from "@/interfaces/address.interface";
import CustomDropdown from "@/Components/CustomDropdown";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useState } from "react";

const BillingAddress = ({ billingAddress }: { billingAddress: IAddress }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    billingAddress.country ? billingAddress.country : ""
  );
  const [loading, setLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("country", selectedCountry);
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
        method: "PUT",
        formatted: true,
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
        Billing Address
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
        <CustomDropdown
          data={countryNames}
          onClick={(value) => setSelectedCountry(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={billingAddress?.country}
          label="Country"
          searchInput={true}
        />

        <CustomInput
          label="State"
          type="text"
          name="state"
          placeholder="California"
          defaultValue={billingAddress?.state}
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
