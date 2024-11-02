import {
  IconBrandMercedes,
  IconCategory,
  IconGardenCart,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SmallMenuItem = ({ menu }: { menu: { label: string; href: string } }) => {
  const iconSize = 16;
  const pathName = usePathname();

  return (
    <Link
      key={menu?.label}
      href={menu?.href}
      className={`flex flex-col justify-center items-center h-16 w-16 ${
        pathName === menu?.href ? "text-primary-light" : ""
      }  ${menu?.href === "/cart" ? "active-bottom-nav" : ""}`}
    >
      {menu?.label === "Home" ? (
        <IconHome size={iconSize} />
      ) : menu?.label === "Brands" ? (
        <IconBrandMercedes size={iconSize} />
      ) : menu?.label === "Cart" ? (
        <IconGardenCart size={iconSize} />
      ) : menu?.label === "Products" ? (
        <IconCategory size={iconSize} />
      ) : (
        ""
      )}
      {menu?.label}{" "}
    </Link>
  );
};

export default SmallMenuItem;
