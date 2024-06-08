import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-5">
      <span className="text-gradient-secondary text-5xl">404</span> Page Not
      Found
      <Link
        href="/"
        className="bg-gradient-primary text-white px-10 py-3 rounded-md"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
