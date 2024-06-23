import { postDataUnauthenticatedMutation } from "@/actions/postDataMutation";
import PasswordInput from "@/app/(main-layout)/profile/_components/PasswordInput";
import { loginSignupTopShapeBg } from "@/assets";
import CustomInput from "@/Components/CustomInput";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import Logo from "@/utils/Logo";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import React from "react";
import BackButton from "./_components/BackButton";

const Page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const res = await postDataUnauthenticatedMutation({
      route: "/user/signup",
      data: formData,
    });

    if (res?.data?.accessToken) {
      cookies().set("accessToken", res?.data?.accessToken);
      cookies().set("email", res?.data?.user?.email);
      permanentRedirect("/verify-email");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-7xl relative login-signup-container-background ">
      <div className="absolute top-0 max-w-7xl w-full h-full md:block hidden ">
        <Image
          src={loginSignupTopShapeBg}
          alt="logintopshape"
          className="left-0 top-0"
        />
      </div>
      <div className="z-20 ">
        <div className="bg-white md:px-6  py-5 rounded-[10px] shadow-2xl ">
          <div className="w-[clamp(350px,90vw,450px)] bg-white  relative z-40 aspect-square flex flex-col  justify-center gap-5 md:px-0 px-3.5">
            <div className="md:hidden block left-0 top-0 absolute">
              <BackButton href="/" className="!border-0" />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center ">
              <Logo />
              <span className="text-sm text-black-50">
                Best online ecommerce website for you
              </span>
            </div>
            <Form handleSubmit={handleSubmit} className="w-full">
              <fieldset className="w-4/4 flex flex-col gap-3 border-t border-black-10">
                <legend className="mx-auto md:mb-10 mb-7 font-medium md:text-xl text-lg text-black-80">
                  Sign up
                </legend>

                <CustomInput
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                />

                <CustomInput
                  type="number"
                  placeholder="Mobile Number"
                  name="phoneNumber"
                />

                <CustomInput type="email" placeholder="Email" name="email" />

                <PasswordInput placeholder="Passoword" name="password" />

                <PasswordInput
                  placeholder="Confirm Passoword"
                  name="confirmPassword"
                />

                <div className="mt-5">
                  <SubmitButton
                    className={
                      "bg-gradient-primary w-full mx-auto py-2.5 text-white rounded-md"
                    }
                  >
                    Sign Up
                  </SubmitButton>
                </div>
              </fieldset>
            </Form>

            <p className="text-sm mt-3 text-center text-black-50">
              Already have an account?{" "}
              <Link href="/login" className="text-gradient-primary font-bold">
                Login Now
              </Link>
            </p>
          </div>
        </div>
        <div className="md:flex hidden items-center  justify-center mt-5 ">
          <BackButton href="/" />
        </div>
      </div>
    </div>
  );
};

export default Page;
