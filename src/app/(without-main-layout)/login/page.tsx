import { postDataMutation } from "@/actions/postDataMutation";
import Logo from "@/utils/Logo";
import Link from "next/link";
import React from "react";
import Form from "../../../Components/Form";
import CustomInput from "@/Components/CustomInput";
import SubmitButton from "@/Components/SubmitButton";

const Page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const result = await postDataMutation({
      route: "/user/login",
      data: formData,
    });
    console.log(result);
  };
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="w-[clamp(350px,90vw,450px)] bg-white border border-black-10 aspect-square flex flex-col items-center justify-center gap-3">
        <Logo />
        <p>Best Online ecommerce website for you</p>
        <Form handleSubmit={handleSubmit}>
          <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
            <legend className="mx-auto">Log in</legend>

            <CustomInput placeholder="Email or Phone" name="email" />
            <CustomInput placeholder="Type your password" name="password" />
            <small className="ml-auto">Forgot password</small>
            <SubmitButton
              className={
                "bg-gradient-primary w-full py-1 text-white rounded-md"
              }
            />
            <div className="flex mx-auto gap-2 text-xs">
              <input type="checkbox" id="expandDate" name="isDayExtended" />
              <label htmlFor="expandDate">Remember me for 30 days</label>
            </div>
          </fieldset>
        </Form>
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
