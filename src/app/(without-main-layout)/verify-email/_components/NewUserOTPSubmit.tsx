"use client";
import React from "react";
import OTPInput from "../../_components/OTPInput";
import SubmitButton from "@/Components/SubmitButton";

const NewUserOTPSubmit = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <OTPInput length={4} />

      <SubmitButton
        className={
          "bg-gradient-primary w-full py-2.5 px-10 text-white rounded-md mt-5"
        }
      >
        Verify
      </SubmitButton>
    </form>
  );
};

export default NewUserOTPSubmit;
