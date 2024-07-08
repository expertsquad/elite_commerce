"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ReviewCustomLink = ({ path, children }: any) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      className={isActive ? "rounded-full bg-gradient-primary text-white" : ""}
      href={path}
    >
      {children}
    </Link>
  );
};

export default ReviewCustomLink;
