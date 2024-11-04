"use client";
import CustomInput from "../../../../../Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import { IAddress } from "@/interfaces/address.interface";
import CustomDropdown from "@/Components/CustomDropdown";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useState } from "react";
import CustomLoader from "@/Components/CustomLoader";
import toast from "react-hot-toast";

const ShippingAddress = ({
  shippingAddress,
  country,
  states,
  cities,
}: {
  shippingAddress: IAddress;
  country: string;
  states: any;
  cities: any;
}) => {
  const [state, setState] = useState(
    shippingAddress?.state ? shippingAddress?.state : "Select State"
  );
  const [city, setCity] = useState(
    shippingAddress?.city ? shippingAddress?.city : "Select City"
  );
  const [loading, setLoading] = useState(false);

  const stateByCountryName = states?.data?.map((s: any) => s.name);
  const cityByCountryName = cities?.data?.map((s: any) => s.name);
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
    // Add isDefault = true
    dataObj.isDefault = true;

    if (!shippingAddress) {
      const result = await postDataMutation({
        route: "/user-address/add",
        data: JSON.stringify(dataObj),
        formatted: true,
      });
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } else {
      const result = await updateDataMutation({
        route: "/user-address" + "/" + shippingAddress?._id,
        data: JSON.stringify(dataObj),
        formatted: true,
        method: "PUT",
      });
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative`}>
      {loading && <CustomLoader />}
      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Shipping Address
      </h3>

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          defaultValue={shippingAddress?.firstName}
          required={true}
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          defaultValue={shippingAddress?.lastName}
          required={true}
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          defaultValue={shippingAddress?.phoneNumber}
          required={true}
        />

        <div className="opacity-50 pointer-events-none">
          <CustomInput
            label="Country"
            type="text"
            name="state"
            placeholder="Bangladesh"
            defaultValue={country}
            readonly
          />
        </div>
        <CustomDropdown
          data={stateByCountryName}
          onClick={(value) => setState(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={state}
          label="State"
          searchInput={true}
        />
        <CustomDropdown
          data={cityByCountryName}
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
          defaultValue={shippingAddress?.zipCode}
          required={true}
        />

        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          defaultValue={shippingAddress?.companyName}
        />
      </div>
      <div className="mt-2.5">
        <CustomInput
          label="Street Address"
          type="text"
          name="streetAddress"
          placeholder="1234 Main St"
          defaultValue={shippingAddress?.streetAddress}
          required={true}
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

export default ShippingAddress;
