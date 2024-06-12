import React, { MouseEventHandler } from "react";

type IButtonPrimary = {
  buttonType?: "reset" | "submit" | undefined;
  children: React.ReactNode;
  buttonText?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonPrimary = ({
  buttonType,
  buttonText,
  className,
  children,
  onClick,
}: IButtonPrimary) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 px-5 w-full py-3.5  bg-gradient-primary  text-white rounded-lg ${className}`}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
