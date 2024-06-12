import { fetchProtectedData } from "@/actions/fetchData";
import CustomInput from "../../../../../Components/CustomInput";
import { Button } from "@/Components/Buttons";

const PersonalInformation = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

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
      </div>

      <div className="flex justify-end items-center mt-10">
        <Button className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
          Update Account Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalInformation;
