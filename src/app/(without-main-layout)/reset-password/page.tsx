import React from "react";
import BackButton from "../sign-up/_components/BackButton";
import Logo from "@/utils/Logo";
import ResetPasswordForm from "./_components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen relative login-signup-container-background  ">
      <div className="z-20 ">
        <div className="bg-white md:px-6 px-3  py-20 rounded-[10px] shadow-2xl relative ">
          <div className="w-[clamp(350px,90vw,450px)]   aspect-square flex flex-col items-center justify-center gap-3">
            <div className="md:hidden block left-0 top-0 absolute">
              <BackButton href="/" className="!border-0 " />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center ">
              <Logo />
              <span className="text-sm text-black-50">
                Best online ecommerce website for you
              </span>
            </div>
            <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
              <legend className="mx-auto text-black-80 font-semibold">
                Reset Password
              </legend>
            </fieldset>
          </div>
          <div>
            <ResetPasswordForm />
          </div>
        </div>
        <div className="md:flex hidden items-center  justify-center mt-5 ">
          <BackButton href="/" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
