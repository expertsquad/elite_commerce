"use client";
import { PasswordInputProps } from "@/interfaces/passwordInputProps";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  placeholder,
  className,
  inputStyle,
  value,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "password" : "text"}
        // type="password"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`border border-black-10 w-full py-2 pl-3 outline-none  rounded-md mt-3 placeholder:text-sm ${inputStyle}`}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute top-6 right-0 flex items-center px-3 text-black-50"
      >
        {showPassword ? (
          <IconEyeOff width={20} stroke={2} height={20} />
        ) : (
          <IconEye width={20} stroke={2} height={20} />
        )}
      </button>
      <small className="text-xs text-danger">{error}</small>
    </div>
  );
};

export default PasswordInput;
