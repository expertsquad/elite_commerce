import React from "react";

const Form = async ({
  handleSubmit,
  children,
  className,
}: {
  handleSubmit: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <form className={className} action={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
