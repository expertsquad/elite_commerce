import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconHeart,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { fetchData } from "@/actions/fetchData";
import { ICategory } from "@/interfaces/category.interface";
import Logo from "@/utils/Logo";

const CategoriesAndSubcategories = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 1000,
    revalidate: 600,
  });

  return (
    <div className="absolute bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover/categorybtn:visible group-hover/categorybtn:opacity-100 group-hover/categorybtn:h-[clamp(100px,70vh,600px)] backdrop-blur-xl shadow-xl py-2">
      <ul className="w-44 h-full overflow-auto">
        {categories?.data?.map((category: ICategory) => (
          <li key={category?._id} className="group/category">
            <Link
              href={`/category/${category?._id}`}
              className="flex w-full p-2 group-hover/category:bg-gradient-primary-light justify-between"
            >
              {category?.categoryName}
              <IconChevronRight className="text-black-50 hidden group-hover/category:block" />
            </Link>
            {/* ================= sub categories ================== */}
            <div className="fixed top-0 left-[180px] bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover/category:visible group-hover/category:opacity-100 group-hover/category:h-[clamp(100px,70vh,600px)] backdrop-blur-xl py-2 shadow-xl flex">
              <ul className="w-48 h-full flex flex-col overflow-auto">
                {category?.subcategories?.map((subcategory) => (
                  <li key={subcategory?.subcategoryId}>
                    <Link
                      href={`/category/subcategory/${subcategory?.subcategoryId}`}
                      className="block w-full p-2 hover:bg-gradient-primary-light"
                    >
                      {subcategory?.subcategoryName}
                    </Link>
                  </li>
                ))}
              </ul>
              <FeaturedCard />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LargeDeviceMegaMenu = () => {
  const iconStroke = 1.5;
  return (
    <nav className="hidden md:flex max-w-7xl mx-auto py-[clamp(8px,2vh,20px)] px-[clamp(10px,5vw,30px)] text-md items-center justify-between">
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
              <IconChevronDown className="text-black-50 group-hover/categorybtn:hidden" />
              <IconChevronUp className="text-black-50 hidden group-hover/categorybtn:block" />
            </Link>

            {/* ========================================================== */}
            {/* ================= categories ================== */}
            {/* ========================================================== */}
            <CategoriesAndSubcategories />
          </li>

          {/* ======================== menus ========================== */}
          <li>
            <Link
              href="/"
              className="block w-full py-2 px-3 rounded-md hover:bg-gradient-primary-light"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/brands"
              className="block w-full py-2 px-3 rounded-md hover:bg-gradient-primary-light"
            >
              Brands
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="block w-full py-2 px-3 rounded-md hover:bg-gradient-primary-light"
            >
              Shop
            </Link>
          </li>
        </ul>
      </div>

      {/* Right section of the navigation */}
      <div className="flex items-center gap-4">
        <button className="first:after:content-['|'] after:text-black-50 after:opacity-50 flex items-center gap-2">
          <IconSearch stroke={iconStroke} />
        </button>
        <Link href="/favourites">
          <IconHeart stroke={iconStroke} />
        </Link>
        <Link href="/cart">
          <IconShoppingCart stroke={iconStroke} />
        </Link>
        <Link href="/profile" className="mt-2">
          <GenerateGradientIcon
            IconComponent={IconUserCircle}
            stroke={iconStroke}
            size={34}
          />
        </Link>
      </div>
    </nav>
  );
};

export default LargeDeviceMegaMenu;
