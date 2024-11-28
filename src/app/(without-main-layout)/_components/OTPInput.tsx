"use client";
import { Fragment, useState } from "react";

interface OTPInputProps {
  length: number;

  setVerifyOtp?: any;
}

const OTPInput = ({ length }: OTPInputProps) => {
  const [otp, setOTP] = useState<number[]>(Array(length).fill(NaN));

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = parseInt(value);
      setOTP(newOTP);

      if (index < length - 1) {
        const nextInput = document.getElementById(`otp_${index + 2}`);
        if (nextInput) nextInput.focus();
      }
    } else if (value === "") {
      const newOTP = [...otp];
      newOTP[index] = NaN;
      setOTP(newOTP);

      if (index > 0) {
        const prevInput = document.getElementById(`otp_${index}`);
        if (prevInput) prevInput.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="font-bold text-gradient-primary text-base">
        Enter Code
      </span>
      <div
        id="otpNumberCounter"
        className="flex justify-center text-center gap-5  "
      >
        {otp.map((value, index) => (
          <input
            name="otp"
            title="OTP Input"
            key={index}
            className={` text-[34px] md:text-[45px] font-bold p-1  border border-black-10 bg-gradient-primary-light  h-[70px] md:max-h-[100px] w-[70px] md:max-w-[90px] text-center  rounded outline-none overflow-hidden ${
              !isNaN(value) ? "border-gradient-primary p-[2px]" : ""
            }`}
            type="tel"
            maxLength={1}
            value={!isNaN(value) ? value.toString() : ""}
            onChange={(e) => handleChange(index, e.target.value)}
            autoFocus={index === 0}
            id={`otp_${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
