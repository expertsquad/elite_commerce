"use client";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import React from "react";
import { requestForOTP } from "./RequesetForOTP";
import CustomLoader from "@/Components/CustomLoader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await requestForOTP(formData);
      if (response?.success === true) {
        toast.success("An OTP has been sent to your email");
        router.replace(
          `/forgot-password-submit-otp?email=${response?.data?.email}`
        );
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mx-auto space-y-[clamp(20px,2.5vw,30px)] relative"
    >
      {isLoading && <CustomLoader />}
      <CustomInput
        name="email"
        label="Email"
        placeholder="Enter your email here"
        type="email"
      />
      <div className="flex items-center justify-center gap-x-[clamp(10px,2.5vw,20px)]">
        <button
          type="reset"
          className="bg-gradient-secondary-light w-full py-[clamp(6px,2.5vh,10px)] rounded-md outline-none hover:scale-105 transition-all duration-300 "
        >
          <span className="text-danger text-[clamp(14px,2.5vw,16px)]">
            Cancel
          </span>
        </button>
        <SubmitButton
          className={`bg-gradient-primary text-white w-full py-[clamp(6px,2.5vh,10px)] rounded-md outline-none text-[clamp(14px,2.5vw,16px)] hover:scale-105 transition-all duration-300 `}
        >
          Send OTP
        </SubmitButton>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
