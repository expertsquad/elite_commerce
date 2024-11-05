import React, { MouseEventHandler } from "react";

type IButtonPrimaryLight = {
  buttonType?: "reset" | "submit" | undefined;
  children: React.ReactNode;
  buttonText?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const ButtonPrimaryLight = ({
  buttonType,
  buttonText,
  className,
  children,
  onClick,
  disabled,
}: IButtonPrimaryLight) => {
  return (
    <button
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 px-5 w-full py-3.5  bg-gradient-primary-light  text-white rounded-lg ${className}`}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default ButtonPrimaryLight;
