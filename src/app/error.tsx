"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import errorImg from "@/assets/Images/errorImg.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // Start countdown at 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Redirect to home page when countdown reaches 0
    if (countdown === 0) {
      if (error.message === "Access token not found, please login again!") {
        router.push("/login");
      } else {
        router.push("/");
      }
    }

    // Clear interval when component unmounts or countdown completes
    return () => clearInterval(timer);
  }, [countdown, error, router]);

  return (
    <div className="min-h-full w-full flex items-center justify-center flex-col gap-5">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-danger text-9xl font-bold">ERROR!</h2>
        <div className="text-danger">
          {error.message === "Access token not found, please login again!"
            ? "Please Login"
            : error.message}
          !
        </div>
      </div>
      <button onClick={() => reset()} className="text-gradient-primary">
        Try again
      </button>
      <p className="text-sm text-black-50">
        Redirecting to the{" "}
        {error.message === "Access token not found, please login again!"
          ? "login"
          : "home"}{" "}
        page in {countdown}
      </p>
    </div>
  );
}
