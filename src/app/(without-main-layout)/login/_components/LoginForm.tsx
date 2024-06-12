"use client";
import CustomInput from "@/Components/CustomInput";
import React from "react";
import SubmitButton from "../../../../Components/SubmitButton";

const LoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (formData: FormData) => Promise<void>;
}) => {
  return (
    <form
      className="w-full flex items-start justify-center"
      action={handleSubmit}
    >
      <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
        <legend className="mx-auto">Log in</legend>

        <CustomInput placeholder="Email or Phone" name="email" />
        <CustomInput placeholder="Type your password" name="password" />
        <small className="ml-auto">Forgot password</small>
        <SubmitButton
          className={"bg-gradient-primary w-full py-1 text-white rounded-md"}
        />
        <div className="flex mx-auto gap-2 text-xs">
          <input type="checkbox" id="expandDate" name="isDayExtended" />
          <label htmlFor="expandDate">Remember me for 30 days</label>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
