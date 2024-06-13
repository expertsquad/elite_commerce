"use client";
import CustomInput from "../../../../../Components/CustomInput";
import { countryNames } from "@/constants/countryNames.constant";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import { IAddress } from "@/interfaces/address.interface";

const BillingAddress = ({
  submitAction,
  billingAddress,
}: {
  submitAction: (addressId: string, formData: FormData) => Promise<void>;
  billingAddress: IAddress;
}) => {
  const handleSubmitWithId = (formData: FormData) =>
    submitAction(billingAddress?._id || "", formData);

  return (
    <Form handleSubmit={handleSubmitWithId}>
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

        {/* all country name */}
        <label htmlFor="country" className="text-black-50">
          Select Country
          <select
            name="country"
            id="country"
            className="w-full border border-black-10 text-black-80 px-3.5 py-2.5 mt-2 focus:outline-none focus:border-fuchsia-800 rounded-md"
            defaultValue={billingAddress?.country}
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
          defaultValue={billingAddress?.state}
        />

        {/* <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          defaultValue={billingAddress?.zipCode}
        /> */}

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
    </Form>
  );
};

export default BillingAddress;
