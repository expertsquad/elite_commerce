"use client";
import PasswordInput from "@/app/(main-layout)/profile/_components/PasswordInput";
import SubmitButton from "@/Components/SubmitButton";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { resetPasswordServerAction } from "./ResetPasswordServerAction";
import CustomLoader from "@/Components/CustomLoader";

const ResetPasswordForm = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const data = {
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    const res = await resetPasswordServerAction({
      data,
    });
    console.log(res);
    if (res?.success) {
      router.replace("/login");
      toast.success(res?.message);
    } else {
      setError(res?.message);
      toast.error(res?.message);
    }
    setLoading(false);
  };
  return (
    <form
      onSubmit={handleResetPassword}
      className={` relative flex flex-col gap-5 w-full ${
        loading ? "opacity-20" : ""
      }`}
    >
      {loading && <CustomLoader />}
      <p className="text-center text-danger">{error}</p>
      <PasswordInput name="newPassword" placeholder="New Password" />
      <PasswordInput name="confirmPassword" placeholder="Confirm Password" />
      <SubmitButton
        className={`bg-gradient-primary w-full py-2.5 px-10 text-white rounded-md hover:scale-105 transition-all duration-300 ease-in-out ${
          loading ? " pointer-events-none" : ""
        }`}
      >
        Submit
      </SubmitButton>
    </form>
  );
};

export default ResetPasswordForm;
