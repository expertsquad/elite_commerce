"use client";
import { bottomNavMenus } from "@/constants/mainMenus.constants";
import {
  IconBrandMercedes,
  IconCategory,
  IconGardenCart,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNavSmallDevice = () => {
  const pathname = usePathname();

  const iconSize = 16;
  return (
    <div className="fixed bottom-0 z-20 h-16 md:hidden flex bg-white w-full justify-around items-center text-sm">
      {bottomNavMenus?.map((menu) => (
        <Link
          key={menu.label}
          href={menu.href}
          className={`flex flex-col justify-center items-center h-16 w-16 ${
            pathname === menu.href ? "active-bottom-nav" : ""
          }`}
        >
          <menu.icon size={iconSize} />
          {menu.label}{" "}
        </Link>
      ))}
      <Link
        href="/profile"
        className={`"h-16 w-16 rounded-full flex justify-center items-center ${
          pathname === "/profile" ? "active-bottom-nav" : ""
        }`}
      >
        <span className="block bg-gradient-primary-light h-16 w-16 rounded-full"></span>
      </Link>
    </div>
  );
};

export default BottomNavSmallDevice;
