"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OrderHistoryMenu = ({
  href,
  label,
  key,
}: {
  href: string;
  label?: string;
  key?: string | number;
}) => {
  const pathName = usePathname();
  console.log(pathName, "pathname");
  console.log(href, "href");
  const isActive = href === "/" ? pathName === href : pathName.startsWith(href);
  return (
    <Link
      key={key}
      href={href}
      className={`outline-none border border-black-10 [font-size:_clamp(10px,50vw,16px)] hover:bg-gradient-primary transition-all rounded-full hover:text-white text-black-80 px-5 py-2 whitespace-nowrap  ${
        isActive ? "bg-gradient-primary text-white" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default OrderHistoryMenu;
