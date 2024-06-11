import React, { MouseEventHandler } from "react";

type IButtonPrimary = {
  children: React.ReactNode;
  buttonText?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonPrimary = ({
  buttonText,
  className,
  children,
  onClick,
}: IButtonPrimary) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 px-5 w-full py-3.5 hover:scale-105 transition-all bg-gradient-primary  text-white rounded-lg ${className}`}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
