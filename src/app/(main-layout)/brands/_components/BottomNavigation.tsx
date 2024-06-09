"use client";

import {
  IconCategory,
  IconHome,
  IconShoppingCart,
  IconSteeringWheel,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BottomNavigation = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  px-2 shadow-2xl flex justify-around py-3.5 md:hidden">
      <MenuItem
        href="/"
        icon={<IconHome stroke={1} height={20} width={20} />}
        label="Home"
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
      />
      <MenuItem
        href="/brands"
        icon={<IconSteeringWheel stroke={1} height={20} width={20} />}
        label="Brands"
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
      />
      <MenuItem
        href="/cart"
        icon={<IconShoppingCart stroke={1} height={20} width={20} />}
        label="My Cart"
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
      />
      <MenuItem
        href="/products"
        icon={<IconCategory stroke={1} height={20} width={20} />}
        label="Products"
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
      />
      <MenuItem
        href="/profile"
        icon={<IconUser stroke={1} height={20} width={20} />}
        label="Profile"
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
};
export default BottomNavigation;

const MenuItem = ({
  href,
  icon,
  label,
  activeMenu,
  handleMenuClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  activeMenu: string;
  handleMenuClick: (menu: string) => void;
}) => {
  const isActive = href === activeMenu;

  return (
    <Link href={href}>
      <span
        className={`flex flex-col items-center justify-center  ${
          isActive
            ? "  border-b border-black-80 font-semibold"
            : "text-black-80"
        }   transition-colors`}
        aria-label={label}
        onClick={() => handleMenuClick(href)}
      >
        {icon}
        <span
          className={`text-xs ${
            isActive && "font-semibold text-gradient-primary"
          }`}
        >
          {label}
        </span>
      </span>
    </Link>
  );
};
