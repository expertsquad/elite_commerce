import { Button } from "@/Components/Buttons";
import CustomInput from "@/Components/CustomInput";
import Logo from "@/utils/Logo";
import Link from "next/link";
import React from "react";

const Page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log(formData);
  };
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-[clamp(350px,90vw,450px)] bg-white border border-black-10 aspect-square flex flex-col items-center justify-center gap-3">
        <Logo />
        <p>Best Online ecommerce website for you</p>
        <form
          className="w-full flex items-start justify-center"
          action={handleSubmit}
        >
          <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
            <legend className="mx-auto">Log in</legend>

            <CustomInput placeholder="Email or Phone" name="email" />
            <CustomInput placeholder="Type your password" name="password" />
            <small className="ml-auto">Forgot password</small>
            <Button className="bg-gradient-primary w-full py-1 text-white rounded-md">
              Login
            </Button>
            <div className="flex mx-auto gap-2 text-xs">
              <input type="checkbox" id="expandDate" name="isDayExtended" />
              <label htmlFor="expandDate">Remember me for 30 days</label>
            </div>
          </fieldset>
        </form>
        <p className="text-sm mt-3">
          Don&apos;t have your account?{" "}
          <Link href="/signup" className="text-gradient-primary font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
