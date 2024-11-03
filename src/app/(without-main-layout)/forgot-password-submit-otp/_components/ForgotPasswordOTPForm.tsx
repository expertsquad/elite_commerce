"use client";
import React, { useState } from "react";
import OTPInput from "../../_components/OTPInput";
import SubmitButton from "@/Components/SubmitButton";
import ResendOtpAndCountdown from "../../_components/ResendOtpAndCountdown";
import { submitOTPServerAction } from "./SubmitOTPServerAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomLoader from "@/Components/CustomLoader";
import { requestForOTP } from "../../forgot-password/_components/RequesetForOTP";

const ForgotPasswordOTPForm = ({
  searchParams,
}: {
  searchParams: { email: string };
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const userEmail = searchParams?.email;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const dataObj: Record<string, any> = {};

    for (const [key, value] of Array.from(formData.entries())) {
      if (key === "otp") {
        dataObj[key] = dataObj[key] ? dataObj[key] + value : value;
      }
    }
    const data = {
      email: userEmail,
      otp: Number(dataObj["otp"]),
    };

    const res = await submitOTPServerAction({
      data: data,
    });

    if (res?.success) {
      router.replace("/reset-password");
      toast.success(res?.message);
    } else {
      setError(res?.message);
      toast.error(res?.message);
    }

    setLoading(false);
  };
  const resendOTP = async () => {
    const formdata = new FormData();
    formdata.append("email", userEmail);

    const data = Object.fromEntries(formdata.entries());

    const res = await requestForOTP(formdata);
  };

  return (
    <div className={`space-y-[clamp(10px,2.5vh,20px)] `}>
      <form onSubmit={handleSubmit} className="w-full space-y-5 relative">
        {loading && <CustomLoader />}
        <OTPInput length={4} />
        <p className="text-center text-danger">{error}</p>
        <SubmitButton
          className={`bg-gradient-primary mt-[clamp(10px,2.5vh,20px)] w-full py-[clamp(6px,2.5vh,10px)] px-10 text-white rounded-md hover:scale-105 transition-all duration-300 `}
        >
          Submit
        </SubmitButton>
      </form>

      <form action={resendOTP}>
        <ResendOtpAndCountdown />
      </form>
    </div>
  );
};

export default ForgotPasswordOTPForm;
