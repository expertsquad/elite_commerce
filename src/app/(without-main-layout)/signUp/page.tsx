import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import CustomInput from "@/Components/CustomInput";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";

import { cookies } from "next/headers";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import React from "react";

const Page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const res = await postDataUnauthenticatedMutation({
      route: "/user/signup",
      data: formData,
    });
    console.log(res);

    if (res?.data?.accessToken) {
      cookies().set("accessToken", res?.data?.accessToken);
      permanentRedirect("/verify-email");
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="w-[clamp(350px,90vw,450px)] bg-white  aspect-square flex flex-col  justify-center gap-3 md:px-0 px-3.5">
        <Form handleSubmit={handleSubmit} className="w-full">
          <fieldset className="w-4/4 flex flex-col gap-3 border-t border-black-10">
            <legend className="mx-auto md:mb-10 mb-7 font-medium md:text-xl text-lg text-black-80">
              Sign up
            </legend>

            <CustomInput
              label="Full Name"
              type="text"
              placeholder="Full Name"
              name="fullName"
            />

            <CustomInput
              label="Mobile Number"
              type="number"
              placeholder="Mobile Number"
              name="phoneNumber"
            />

            <CustomInput
              label="Email"
              type="email"
              placeholder="Email"
              name="email"
            />

            <CustomInput
              label="Password"
              type="password"
              placeholder="Passoword"
              name="password"
            />

            <CustomInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Passoword"
              name="confirmPassword"
            />

            <div className="mt-5">
              <SubmitButton
                className={
                  "bg-gradient-primary w-[80%] mx-auto py-2.5 text-white rounded-md"
                }
              >
                Sign Up
              </SubmitButton>
            </div>
          </fieldset>
        </Form>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-gradient-primary font-bold">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
