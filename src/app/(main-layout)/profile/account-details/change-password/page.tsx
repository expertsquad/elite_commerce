"use client";
import Link from "next/link";
import React, { useState } from "react";
import PasswordInput from "../../_components/PasswordInput";
import { updateDataMutation } from "@/actions/updateDataMutation";
import SubmitButton from "@/Components/SubmitButton";

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
      e.target.reset();
    } else {
      setErr(result.message);
    }
    setLoading(false);
  };
  return (
    <div className={`${loading ? "pointer-events-none opacity-50" : ""}`}>
      {/* tab to toggle section */}
      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="text-lg">
          <Link className=" " href="/profile/account-details">
            Personal Information
          </Link>
        </div>
        <div className="pb-[1px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/account-details/change-password"
          >
            Change Password
          </Link>
        </div>
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
          />
        </div>

        <div className="my-5">
          <label className="text-black-50">New Password</label>
          <PasswordInput
            name="newPassword"
            error={err == "Old password is wrong!" ? "" : err}
          />
        </div>

        <div>
          <label className="text-black-50">Confirm Password</label>
          <PasswordInput
            name="confirmPassword"
            error={err == "Old password is wrong!" ? "" : err}
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
