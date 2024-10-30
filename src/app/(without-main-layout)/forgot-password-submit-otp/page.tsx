import Logo from "@/utils/Logo";
import BackButton from "../sign-up/_components/BackButton";

import ForgotPasswordOTPForm from "./_components/ForgotPasswordOTPForm";

const ForgotPasswordOTPSubmit = async ({
  searchParams,
}: {
  searchParams: { email: string };
}) => {
  return (
    <div className="flex items-center justify-center h-screen relative login-signup-container-background ">
      <div className="z-20 ">
        <div className="bg-white md:px-6 px-3  py-5 rounded-[10px] shadow-2xl relative">
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
            <div className="flex items-center flex-col gap-5">
              <h3 className=" text-black-80 font-semibold text-xl md:text-2xl">
                OTP Code Sent
              </h3>
              <span className="text-gradient-primary">
                {searchParams?.email}
              </span>
              <p className="text-base text-black-80 text-center">
                Enter the 4 digits code that you Received on your E-mail
              </p>
            </div>
          </div>
          <div className="my-5">
            <ForgotPasswordOTPForm searchParams={searchParams} />
          </div>
        </div>
        <div className="md:flex hidden items-center  justify-center mt-5 ">
          <BackButton href="/" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOTPSubmit;
