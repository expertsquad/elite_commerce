"use client";
import CustomLoading from "@/Components/CustomLoader";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  router.push("/profile/dashboard");
  return (
    <div className="relative h-dvh">
      <CustomLoading />
    </div>
  );
};

export default Page;
