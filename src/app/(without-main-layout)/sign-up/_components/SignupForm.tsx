"use client";
import PasswordInput from "@/app/(main-layout)/profile/_components/PasswordInput";
import CustomInput from "@/Components/CustomInput";
import CustomLoader from "@/Components/CustomLoader";
import SubmitButton from "@/Components/SubmitButton";
import { IErrorMessages } from "@/interfaces/error.interface";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signUpServerAction } from "./SignUpServerAction";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<IErrorMessages[] | null>(null);

  const globalError = error?.find(
    (err) => !err.path || err.path.includes("/signup")
  );

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await signUpServerAction(formData);
    if (result?.success) {
      setIsLoading(false);
      toast.success("Signup Successful");
      router.replace(`/verify-email?email=${result?.data?.user?.email}`);
    } else {
      toast.error(result?.message);
      setError(result?.errorMessages);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmit} className="w-full">
      {isLoading && <CustomLoader />}
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
          type="text"
          placeholder="+880123456789"
          name="phoneNumber"
        />

        <CustomInput
          errors={error}
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <div className="space-y-2.5">
          <PasswordInput
            placeholder="Passoword"
            name="password"
            error={error as any}
          />

          <PasswordInput
            placeholder="Confirm Passoword"
            name="confirmPassword"
            error={error as any}
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
