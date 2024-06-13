"use client";

import { Button, IButtonProps } from "@/Components/Buttons";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, ...props }: IButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
