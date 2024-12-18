import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { fetchData } from "@/actions/fetchData";
import Logo from "@/utils/Logo";
import { mainMenus } from "@/constants/mainMenus.constants";
import ShoppingCartBtn from "./ShoppingCartBtn";
import WishlistBtn from "./WishlistBtn";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import ProfilePhotoOrIcon from "./ProfilePhotoOrIcon";
import CategoriesAndSubcategories from "./CategoriesAndSubcategories";
import MainMenuItem from "./MainMenuItem";
import { cookies, headers } from "next/headers";

const LargeDeviceMegaMenu = async () => {
  const categories = await fetchData({ route: "/category", limit: 5 });
  const products = await fetchData({ route: "/product", limit: 4 });
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });
  const shippingCharge = await fetchData({
    route: "/settings/shipping-charge",
    pathToRevalidate: "/settings/shipping-charge",
  });
  // <== Quick Order Services ==>
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  // ===== get cookie to check user login or not
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  return (
    <nav className="hidden md:flex main-container py-[clamp(8px,2vh,20px)] text-md items-center justify-between">
      {/* Left section of the navigation */}
      <div className="flex gap-5 items-center">
        <Logo alignLeft />
        <div className="flex items-center gap-3 z-20">
          <div className="transition-all duration-300 group/categorybtn list-none">
            <Link
              href="/category"
              className="flex items-center py-2 px-3 rounded-full group-hover/categorybtn:bg-[#E6E6E6]"
            >
              <span className="group-hover/categorybtn:text-gradient-primary">
                {" "}
                All Categories{" "}
              </span>
              <IconChevronDown className=" text-black-50 group-hover/categorybtn:text-primary-color-light-color group-hover/categorybtn:rotate-180  transition-all duration-700" />
            </Link>

            {/* ========================================================== */}
            {/* ================= categories ================== */}
            {/* ========================================================== */}
            <CategoriesAndSubcategories />
          </div>

          {/* ======================== menus ========================== */}

          {mainMenus.map((menu, index) => (
            <MainMenuItem parentClassName="list-none" menu={menu} key={index} />
          ))}
        </div>
      </div>

      {/* Right section of the navigation */}
      <div className="flex  items-center gap-4">
        <GlobalSearch
          products={products?.data}
          categories={categories?.data}
          currencyIcon={currencyIcon?.data?.currencySymbol}
          isQuickOrderActive={
            quickOrderServices?.data?.isQuickOrderServiceActive
          }
        />
        {/* wishlist */}
        <WishlistBtn currencyIcon={currencyIcon?.data?.currencySymbol} />
        {/* cart */}
        <ShoppingCartBtn
          currencyIcon={currencyIcon?.data?.currencySymbol}
          shippingCharge={shippingCharge?.data}
          shippingAmount={quickOrderServices?.data?.deliveryCharge}
          isQuickOrderActive={
            quickOrderServices?.data?.isQuickOrderServiceActive
          }
        />
        {/* profile */}
        <div className="flex items-center justify-center">
          <ProfilePhotoOrIcon accessToken={accessToken} />
        </div>
      </div>
    </nav>
  );
};

export default LargeDeviceMegaMenu;
