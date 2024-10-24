import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import { ICategory } from "@/interfaces/category.interface";
import Logo from "@/utils/Logo";
import { mainMenus } from "@/constants/mainMenus.constants";
import ShoppingCartBtn from "./ShoppingCartBtn";
import WishlistBtn from "./WishlistBtn";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import ProfilePhotoOrIcon from "./ProfilePhotoOrIcon";
import { getWidget } from "@/utils/getWidget";
import MegaMenuItem from "./MegaMenuItem";

const CategoriesAndSubcategories = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 1000,
    revalidate: 600,
  });
  const widget = await getWidget();

  return (
    <div className="absolute  bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover/categorybtn:visible group-hover/categorybtn:opacity-100 group-hover/categorybtn:h-[clamp(100px,70vh,500px)] backdrop-blur-xl shadow-2xl py-2 gap-10 rounded-md">
      <ul className="w-[240px] h-full overflow-auto ">
        {categories?.data?.map((category: ICategory) => (
          <MegaMenuItem
            key={category?._id}
            widget={widget}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
};

const LargeDeviceMegaMenu = async () => {
  const categories = await fetchData({ route: "/category", limit: 5 });
  const products = await fetchData({ route: "/product", limit: 4 });
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });
  const shippingCharge = await fetchData({
    route: "/settings/shipping-charge",
  });

  return (
    <nav className="hidden md:flex main-container py-[clamp(8px,2vh,20px)] text-md items-center justify-between">
      {/* Left section of the navigation */}
      <div className="flex gap-5 items-center">
        <Logo />
        <ul className="flex items-center gap-3 z-20">
          <li className="transition-all duration-300 group/categorybtn">
            <Link
              href="/category"
              className="flex items-center py-2 px-3 rounded-full group-hover/categorybtn:bg-gradient-primary-light"
            >
              All Categories{" "}
              <IconChevronDown className="text-black-50 group-hover/categorybtn:rotate-180 transition-all duration-700" />
            </Link>

            {/* ========================================================== */}
            {/* ================= categories ================== */}
            {/* ========================================================== */}
            <CategoriesAndSubcategories />
          </li>

          {/* ======================== menus ========================== */}

          {mainMenus.map((menu) => (
            <li key={menu.label}>
              <Link
                href={menu.href}
                className="block w-full py-2 px-3 rounded-md hover:bg-gradient-primary-light"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section of the navigation */}
      <div className="flex items-center gap-4">
        <GlobalSearch products={products?.data} categories={categories?.data} />
        {/* wishlist */}
        <WishlistBtn />
        {/* cart */}
        <ShoppingCartBtn
          currencyIcon={currencyIcon?.data?.currencySymbol}
          shippingCharge={shippingCharge?.data}
        />
        {/* profile */}
        <Link href="/profile/dashboard" className="mt-2">
          <ProfilePhotoOrIcon />
        </Link>
      </div>
    </nav>
  );
};

export default LargeDeviceMegaMenu;
