import Logo from "@/utils/Logo";
import Link from "next/link";
import React from "react";
import LoginForm from "./_components/LoginForm";

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
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="w-[clamp(350px,90vw,450px)] bg-white border border-black-10 aspect-square flex flex-col items-center justify-center gap-3">
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
