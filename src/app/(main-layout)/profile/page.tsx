"use client";
import CustomLoading from "@/Components/CustomLoader";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  // <== @ useEffect used for redirecting to dashboard page with fast loading
  useEffect(() => {
    router.push("/profile/dashboard");
  }, [router]);

  return (
    <div className="relative h-dvh">
      <CustomLoading />
    </div>
  );
};

export default Page;
