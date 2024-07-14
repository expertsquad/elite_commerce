"use client";
import PasswordInput from "@/app/(main-layout)/profile/_components/PasswordInput";
import Loading from "@/app/loading";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";
import { IErrorMessages } from "@/interfaces/error.interface";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupForm = ({
  handleSubmit,
}: {
  handleSubmit: (formData: FormData) => Promise<any>;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<IErrorMessages[] | null>(null);

  const globalError = error?.find(
    (err) => !err.path || err.path.includes("/signup")
  );

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // handle signup action
    const formData = new FormData(event.currentTarget);
    const result = await handleSubmit(formData);
    if (result?.success) {
      setIsLoading(false);
      router.replace(`/verify-email?email=${result?.data?.user?.email}`);
    } else {
      setError(result?.errorMessages);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmit} className="w-full">
      {isLoading && <Loading />}
      <fieldset className="w-4/4 flex flex-col border-t border-black-10">
        <legend className="mx-auto md:mb-3 font-medium md:text-xl text-lg text-black-80">
          Sign up
        </legend>

        <CustomInput
          errors={error}
          type="text"
          placeholder="Full Name"
          name="fullName"
        />

        <CustomInput
          errors={error}
          type="number"
          placeholder="Mobile Number"
          name="phoneNumber"
        />

        <CustomInput
          errors={error}
          type="email"
          placeholder="Email"
          name="email"
        />
        <div className="space-y-2.5">
          <PasswordInput
            placeholder="Passoword"
            name="password"
            errors={error}
          />

          <PasswordInput
            placeholder="Confirm Passoword"
            name="confirmPassword"
            errors={error}
          />
        </div>
        <small className="text-xs text-danger text-center my-3">
          {globalError?.message}
        </small>
        <SubmitButton className="bg-gradient-primary w-full mx-auto py-1.5 text-white rounded-md">
          Sign Up
        </SubmitButton>
      </fieldset>
    </form>
  );
};

export default SignupForm;
