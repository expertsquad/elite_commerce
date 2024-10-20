"use client";
import CustomInput from "../../../../../Components/CustomInput";
import { countryNames } from "@/constants/countryNames.constant";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import { IAddress } from "@/interfaces/address.interface";
import CustomDropdown from "@/Components/CustomDropdown";

const ShippingAddress = ({
  submitAction,
  shippingAddress,
  country,
}: {
  submitAction: (addressId: string, formData: FormData) => Promise<void>;
  shippingAddress: IAddress;
  country: string;
}) => {
  const handleSubmitWithId = (formData: FormData) =>
    submitAction(shippingAddress?._id || "", formData);

  return (
    <Form handleSubmit={handleSubmitWithId}>
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
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          defaultValue={shippingAddress?.lastName}
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          defaultValue={shippingAddress?.phoneNumber}
        />

        <div className="opacity-50 pointer-events-none">
          <CustomInput
            label="Country"
            type="text"
            name="state"
            placeholder="California"
            defaultValue={country}
          />
        </div>
        <CustomDropdown
          data={countryNames}
          onClick={(value) => console.log(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={shippingAddress?.state}
          label="State"
          searchInput={true}
        />
        <CustomDropdown
          data={countryNames}
          onClick={(value) => console.log(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={shippingAddress?.state}
          label="City"
          searchInput={true}
        />
        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          defaultValue={shippingAddress?.zipCode}
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

export default ShippingAddress;
