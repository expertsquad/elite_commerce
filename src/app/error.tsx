"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log("error::::", error);
  }, [error]);

  return (
    <div className="min-h-full w-full flex items-center justify-center flex-col gap-5">
      <h2 className="text-gradient-secondary">{error.message}!</h2>
      <button onClick={() => reset()} className="text-gradient-primary">
        Try again
      </button>
      <Link href="/login" className="bg-positive text-white px-5 rounded-md">
        Login Again
      </Link>
    </div>
  );
}
