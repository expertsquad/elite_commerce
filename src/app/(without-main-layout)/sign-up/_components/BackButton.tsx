import Link from "next/link";
import React from "react";
type BackButtonProps = {
  className?: string;
  href: string;
};

const BackButton = ({ href, className }: BackButtonProps) => {
  return (
    <Link
      href={`${href}`}
      className={`rounded-full px-3.5 py-2.5 text-center flex items-center gap-1 ${className}`}
    >
      &larr; <span className="md:block hidden">Back to</span> Home
    </Link>
  );
};

export default BackButton;
