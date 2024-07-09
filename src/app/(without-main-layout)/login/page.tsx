import Logo from "@/utils/Logo";
import Link from "next/link";
import React from "react";
import LoginForm from "./_components/LoginForm";
import Image from "next/image";
import { loginSignupTopShapeBg } from "@/assets";

const LoginPage = () => {
  // const handleSubmit = async (formData: FormData) => {
  //   "use server";
  //   const result = await postDataUnauthenticatedMutation({
  //     route: "/user/login",
  //     data: formData,
  //   });

  //   if (result?.data?.accessToken) {
  //     cookies().set("accessToken", result?.data?.accessToken);
  //     permanentRedirect("/");
  //     // check localStorage like localStorage.getItem("cartProduct")
  //   }
  // };

  return (
    <div className="flex items-center justify-center h-full w-full relative login-signup-container-background">
      <div className="absolute top-0 w-full h-full md:block hidden main-container">
        <Image
          src={loginSignupTopShapeBg}
          alt="logintopshape"
          className="left-0 top-0"
        />
      </div>
      <div className="w-[clamp(350px,90vw,450px)] h-[500px] bg-white border border-black-10 aspect-square flex flex-col items-center justify-center gap-3 z-20 rounded-lg">
        <Logo />
        <p>Best Online ecommerce website for you</p>
        <LoginForm />
        <p className="text-sm mt-3">
          Don&apos;t have your account?{" "}
          <Link href="/sign-up" className="text-gradient-primary font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
