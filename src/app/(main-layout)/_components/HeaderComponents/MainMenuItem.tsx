"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainMenuItem = ({
  menu,
  className,
  parentClassName,
  onClick,
}: {
  menu: { label: string; href: string };
  className?: string;
  parentClassName?: string;
  onClick?: () => void;
}) => {
  const pathName = usePathname();
  const isActive =
    menu.href === "/" ? pathName === menu.href : pathName.startsWith(menu.href);

  return (
    <li
      className={`${parentClassName}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      <Link
        href={menu.href}
        className={`${className} block w-full py-2 px-3 hover:text-gradient-primary font-normal text-base ${
          isActive ? "text-gradient-primary font-semibold" : ""
        }`}
      >
        {menu.label}
      </Link>
    </li>
  );
};

export default MainMenuItem;
