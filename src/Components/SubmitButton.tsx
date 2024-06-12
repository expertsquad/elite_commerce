import { Button } from "@/Components/Buttons";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending}>
      Login
    </Button>
  );
};

export default SubmitButton;
