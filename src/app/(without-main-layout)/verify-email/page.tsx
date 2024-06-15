import Link from "next/link";
import Logo from "@/utils/Logo";
import OTPInput from "./_components/OTPsection";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";

const VerifyEmail = () => {
  const handleSubmit = async () => {
    "use server";
  };

  return (
    <div className="flex items-center justify-center h-full w-full relative px-5">
      <Link className="absolute top-20 left-[40%]" href={"/signUp"}>
        &larr; Back
      </Link>
      <div className="w-[clamp(350px,90vw,450px)] bg-white  aspect-square flex flex-col items-center justify-center gap-3">
        <Logo />
        <p>Best Online ecommerce website for you</p>
        <div className="flex items-center flex-col gap-5">
          <h3 className=" text-black-80 font-semibold text-xl md:text-2xl">
            OTP Code Sent
          </h3>
          <p>Enter the 6 digits code that you Received on your E-mail</p>
          <span className="text-gradient-primary">+8801879069525</span>
        </div>
        <Form handleSubmit={handleSubmit}>
          <OTPInput length={4} />

          <SubmitButton
            className={
              "bg-gradient-primary w-full py-2.5 px-10 text-white rounded-md"
            }
          >
            Verify
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
};

export default VerifyEmail;
