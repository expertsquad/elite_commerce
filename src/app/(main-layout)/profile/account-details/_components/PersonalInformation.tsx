import { fetchProtectedData } from "@/actions/fetchData";
import CustomInput from "../../_components/CustomInput";
import { Button } from "@/Components/Buttons";

const PersonalInformation = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  console.log(getMe);

  return (
    <div>
      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Zayed Hossain"
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
        {/* <label htmlFor="state" className="text-black-50">
          Select State
          <select
            name="state"
            id="state"
            className="w-full border border-black-10 text-black-80 px-3.5 py-3 my-2.5 focus:outline-none focus:border-fuchsia-800 rounded-md"
          >
            {countryNames?.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label> */}

        {/* gender name */}

        {/* <label htmlFor="state" className="text-black-50">
          Select State
          <select
            name="state"
            id="state"
            className="w-full border border-black-10 text-black-80 px-3.5 py-3 my-2.5 focus:outline-none focus:border-fuchsia-800 rounded-md"
          >
            {gender?.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </label> */}
      </div>

      <Button className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
        Update Account Details
      </Button>
    </div>
  );
};

export default PersonalInformation;
