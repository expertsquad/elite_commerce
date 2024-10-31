import Logo from "@/utils/Logo";
import Link from "next/link";
import React from "react";
import BackButton from "./_components/BackButton";
import SignupForm from "./_components/SignupForm";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen relative login-signup-container-background">
      <div className="z-20">
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
            <SignupForm />
            <p className="text-sm mt-3 text-center text-black-50">
              Already have an account?{" "}
              <Link href="/login" className="text-gradient-primary font-bold">
                Login Now
              </Link>
            </p>
          </div>
        </div>
        <div className="md:flex hidden items-center  justify-center mt-5 ">
          <div className="border border-gradient-primary p-[1px] rounded-full">
            <BackButton href="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
