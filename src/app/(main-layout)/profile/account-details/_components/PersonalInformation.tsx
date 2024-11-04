"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import { useState } from "react";

const PersonalInformation = ({ getMe }: { getMe: any }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await updateDataMutation({
      route: "/user/update",
      data: formData,
      method: "PUT",
    });
    if (result) {
      revalidateTagAction("/user/me");
    }
  };

  return (
    <div className={`${loading}`}>
      <h3 className="[font-size:_clam p(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Personal Information
      </h3>
      <form onSubmit={handleSubmit}>
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
            required={true}
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
            required={true}
          />
        </div>

        <div className="flex justify-end items-center mt-10">
          <SubmitButton className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
            Update Account Details
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
