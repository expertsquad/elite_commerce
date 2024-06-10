import { fetchProtectedData } from "@/actions/fetchData";
import CustomInput from "../../_components/CustomInput";
import { Button } from "@/Components/Buttons";
import { countryNames } from "@/constants/countryNames.constant";

const BillingAddress = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  return (
    <div>
      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Billing Address
      </h3>

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="First Name"
          type="text"
          name="firstlName"
          placeholder="Zayed"
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastlName"
          placeholder="Hossain"
        />
        <CustomInput
          label="Email"
          type="email"
          name="email"
          placeholder="zayedhossain120@gmail.com"
        />
        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
        />

        {/* all country name */}
        <label htmlFor="state" className="text-black-50">
          Select State
          <select
            name="state"
            id="state"
            className="w-full border border-black-10 text-black-80 px-3.5 py-2.5 mt-2 focus:outline-none focus:border-fuchsia-800 rounded-md"
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
        />

        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
        />

        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
        />
      </div>
      <div className="mt-2.5">
        <CustomInput
          label="Street Address"
          type="text"
          name="streetAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="flex justify-end items-center mt-5">
        <Button className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
          Update Account Details
        </Button>
      </div>
    </div>
  );
};

export default BillingAddress;