import Link from "next/link";
import React, { useRef } from "react";
import PasswordInput from "../../_components/PasswordInput";
import { Button } from "@/Components/Buttons";
import { updateDataMutation } from "@/actions/updateDataMutation";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";

const page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const result = await updateDataMutation({
      route: "/user/change-password",
      data: formData,
      method: "PUT",
    });
  };
  return (
    <div>
      {/* tab to toggle section */}
      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="py-2  text-lg">
          <Link className=" " href="/profile/account-details">
            Personal Information
          </Link>
        </div>
        <div className="pb-[2px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/account-details/change-password"
          >
            Change Password
          </Link>
        </div>
      </div>

      {/* main contain */}

      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Change Password
      </h3>

      <Form handleSubmit={handleSubmit}>
        <div>
          <p>Current Password</p>
          <PasswordInput name="oldPassword" />
        </div>

        <div>
          <p>New Password</p>
          <PasswordInput name="newPassword" />
        </div>

        <div>
          <p>Confirm Password</p>
          <PasswordInput name="confirmPassword" />
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

export default page;
