import Logo from "@/utils/Logo";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";
import BackButton from "../sign-up/_components/BackButton";

const ForgotPassword = async () => {
  return (
    <div className="flex items-center flex-col gap-[clamp(20px,2.5vh,50px)] justify-center h-screen login-signup-container-background px-5">
      <div className="w-[clamp(350px,90vw,450px)] h-[450px] bg-white border border-black-10 aspect-square flex flex-col items-center justify-center gap-y-[clamp(20px,2.5vw,50px)] z-20 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-3">
          <Logo />
          <p>Best Online ecommerce website for you</p>
          <fieldset className="w-3/4 flex flex-col gap-3 border-t border-black-10">
            <legend className="mx-auto text-black-80 font-semibold">
              Find your account
            </legend>
          </fieldset>
          <span className="text-black-80 [font-size:_clamp(14px,2.5vw,16px)]">
            Enter Your Email Address to reset your password
          </span>
        </div>
        <ForgotPasswordForm />
      </div>
      <div className="md:flex hidden items-center  justify-center mt-5 ">
        <BackButton href="/" />
      </div>
    </div>
  );
};

export default ForgotPassword;
