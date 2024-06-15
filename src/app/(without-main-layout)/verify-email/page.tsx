"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/utils/Logo";

import OTPInput from "./_components/OTPsection";

const VerifyEmail = () => {
  const [verifyOtp, setVerifyOtp] = useState(0);
  return (
    <div className="flex items-center justify-center h-full w-full relative px-5">
      <Link className="absolute top-20 left-[40%]" href={"/signUp"}>
        &larr; Back
      </Link>
      <div className="w-[clamp(350px,90vw,450px)] bg-white  aspect-square flex flex-col items-center justify-center gap-3">
        <Logo />
        <p>Best Online ecommerce website for you</p>
        <div className="flex items-center flex-col gap-5">
          <h3 className=" text-black-80 font-semibold text-xl md:text-2xl">
            OTP Code Sent
          </h3>
          <p>Enter the 6 digits code that you Received on your E-mail</p>
          <span className="text-gradient-primary">+8801879069525</span>
        </div>

        <OTPInput length={4} setVerifyOtp={setVerifyOtp} />
        <button className="py-3.5 px-5 bg-gradient-primary text-white rounded-md md:w-[80%] w-full mt-10">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
