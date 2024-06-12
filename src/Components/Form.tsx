import React from "react";

const Form = async ({
  handleSubmit,
  children,
}: {
  handleSubmit: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
}) => {
  return (
    <form
      className="w-full flex items-start justify-center"
      action={handleSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
