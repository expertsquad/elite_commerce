"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    console.log("error::::", error);

    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Redirect to home page when countdown reaches 0
    if (countdown === 0) {
      router.push("/");
    }

    // Clear interval when component unmounts or countdown completes
    return () => clearInterval(timer);
  }, [countdown, error, router]);

  return (
    <div className="min-h-full w-full flex items-center justify-center flex-col gap-5">
      <h2 className="text-gradient-secondary">{error.message}!</h2>
      <button onClick={() => reset()} className="text-gradient-primary">
        Try again
      </button>
      <Link href="/login" className="bg-positive text-white px-5 rounded-md">
        Login Again
      </Link>
      <p className="text-sm text-black-50">
        Redirecting to the home page in {countdown}
      </p>
    </div>
  );
}
