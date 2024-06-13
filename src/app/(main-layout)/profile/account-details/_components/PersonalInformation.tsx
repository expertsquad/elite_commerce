import { fetchProtectedData } from "@/actions/fetchData";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { Button } from "@/Components/Buttons";
import CustomInput from "@/Components/CustomInput";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";

const PersonalInformation = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const result = await updateDataMutation({
      route: "/user/update",
      data: formData,
      method: "PUT",
    });
  };

  return (
    <div className="">
      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Personal Information
      </h3>
      <Form handleSubmit={handleSubmit}>
        <div
          id="myform"
          className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 w-full"
        >
          <CustomInput
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Zayed Hossain"
            defaultValue={getMe?.data?.fullName}
          />
          <CustomInput
            label="Email"
            type="email"
            name="email"
            defaultValue={getMe?.data?.email}
            placeholder="zayedhossain120@gmail.com"
            disabled={true}
            readonly
          />
          <CustomInput
            label="Phone Number"
            type="text"
            name="phoneNumber"
            defaultValue={getMe?.data?.phoneNumber}
            placeholder="017*******"
          />
        </div>

        <div className="flex justify-end items-center mt-10">
          <SubmitButton className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
            Update Account Details
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInformation;
