"use client";

import React, { useState, useEffect } from "react";

const ResendOtpAndCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Start with a 1-minute countdown
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsButtonDisabled(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [timeLeft]);

  const handleResendOTP = () => {
    setTimeLeft(60); // Reset the countdown
    setIsButtonDisabled(true); // Disable the button again
    // Logic to resend the OTP goes here
  };

  return (
    <div className="flex items-center flex-col gap-[clamp(6px,2.5vh,10px)] justify-between">
      <button
        className={`${
          isButtonDisabled ? "opacity-30 cursor-not-allowed" : "text-positive"
        }`}
        onClick={handleResendOTP}
        disabled={isButtonDisabled}
      >
        Resend OTP code
      </button>
      {isButtonDisabled && (
        <span className="text-gradient-primary">{`0:${
          timeLeft < 10 ? `0${timeLeft}` : timeLeft
        }s`}</span>
      )}
    </div>
  );
};

export default ResendOtpAndCountdown;
