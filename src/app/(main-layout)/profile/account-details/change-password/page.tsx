"use client";
import Link from "next/link";
import React, { useState } from "react";
import PasswordInput from "../../_components/PasswordInput";
import { updateDataMutation } from "@/actions/updateDataMutation";
import SubmitButton from "@/Components/SubmitButton";
import toast from "react-hot-toast";
import CustomLoader from "@/Components/CustomLoader";

const Page = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");
    const oldPassword = formData.get("oldPassword");

    if (newPassword !== confirmPassword) {
      return setErr("Password Not Matched"), setLoading(false);
    } else if (
      newPassword == "" ||
      confirmPassword == "" ||
      oldPassword == ""
    ) {
      return setErr("Field Required"), setLoading(false);
    }

    const result = await updateDataMutation({
      route: "/user/change-password",
      data: formData,
      method: "PUT",
    });
    if (result?.success) {
      toast.success(result?.message);
      e.target.reset();
    } else {
      setErr(result.message);
    }
    setLoading(false);
  };
  return (
    <div className={"relative"}>
      {loading && <CustomLoader />}
      {/* tab to toggle section */}
      <div className="flex gap-6 items-center border-b border-black-10 justify-start">
        <div className="text-base pb-2">
          <Link className=" " href="/profile/account-details">
            Personal Information
          </Link>
        </div>

        <Link
          className=" text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2"
          href="/profile/account-details/change-password"
        >
          Change Password
        </Link>
      </div>

      {/* main contain */}

      <h3 className="[font-size:_clamp(1em,5vw,1.5em)] font-semibold text-gradient-primary my-7 ">
        Change Password
      </h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-black-50">Current Password</label>
          <PasswordInput
            name="oldPassword"
            error={err == "Password Not Matched" ? "" : err}
            required
          />
        </div>

        <div className="my-5">
          <label className="text-black-50">New Password</label>
          <PasswordInput
            name="newPassword"
            error={err == "Old password is wrong!" ? "" : err}
            required
          />
        </div>

        <div>
          <label className="text-black-50">Confirm Password</label>
          <PasswordInput
            name="confirmPassword"
            error={err == "Old password is wrong!" ? "" : err}
            required
          />
        </div>

        <div className="flex justify-end items-center mt-10">
          <SubmitButton className="bg-gradient-primary text-white py-2.5 px-5 my-3 rounded-full w-full lg:max-w-fit ">
            Update Account Details
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Page;
