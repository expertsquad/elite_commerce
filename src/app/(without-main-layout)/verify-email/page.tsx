import Logo from "@/utils/Logo";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import BackButton from "../sign-up/_components/BackButton";
import OTPInput from "../_components/OTPInput";
import { revalidateTagAction } from "@/actions/revalidateTag";

const VerifyEmail = async ({
  searchParams,
}: {
  searchParams: { email: string };
}) => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const dataObj: Record<string, any> = {};

    for (const [key, value] of Array.from(formData.entries())) {
      if (key === "otp") {
        dataObj[key] = dataObj[key] ? dataObj[key] + value : value;
      }
    }

    const res = await updateDataMutation({
      route: "/user/verify-email",
      data: JSON.stringify({ otp: Number(dataObj["otp"]) }),
      method: "PUT",
      formatted: true,
    });
    if (res?.data?.accessToken) {
      cookies().set("accessToken", res?.data?.accessToken);
      revalidateTagAction("/user");
      permanentRedirect("/login");
    } else {
      console.error(res?.error);
    }
  };

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
            <Form handleSubmit={handleSubmit}>
              <OTPInput length={4} />

              <SubmitButton
                className={
                  "bg-gradient-primary w-full py-2.5 px-10 text-white rounded-md mt-5"
                }
              >
                Verify
              </SubmitButton>
            </Form>
          </div>
          {/* <form action={resendOTP}>
            <ResendOtpAndCountdown />
          </form> */}
        </div>
        <div className="md:flex hidden items-center  justify-center mt-5 ">
          <BackButton href="/" />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
