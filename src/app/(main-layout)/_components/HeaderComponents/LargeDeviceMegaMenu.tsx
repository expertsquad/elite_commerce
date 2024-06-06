import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import {
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const LargeDeviceMegaMenu = () => {
  const iconStroke = 1.5;

  return (
    <nav className="hidden md:flex max-w-7xl mx-auto py-[clamp(8px,2vh,20px)] px-[clamp(10px,5vw,30px)] text-md items-center justify-between">
      {/* Left section of the navigation */}
      <div className="flex gap-5 items-center">
        <span className="text-2xl text-gradient-secondary">Logo</span>
        <ul className="flex items-center gap-3 z-50">
          <li className="h-fit bg-gradient-primary-light rounded-full relative group transition-all duration-300">
            <Link href="#" className="flex items-center py-2 px-3">
              All Categories <IconChevronDown className="text-black-50" />
            </Link>
            {/* ================= categories start ================== */}
            <ul className="absolute bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:h-[clamp(100px,70vh,600px)] backdrop-blur-xl w-48 p-2 shadow-xl">
              <li className="group/category">
                <Link href="#" className="block w-full">
                  Child
                </Link>
                {/* ================= sub categories start ================== */}
                <div className="absolute bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover/category:visible group-hover/category:opacity-100 group-hover/category:h-[clamp(100px,70vh,600px)] backdrop-blur-xl p-2 top-0 left-[196px] shadow-xl flex">
                  <ul className="w-48">
                    <li>
                      <Link href="#" className="block w-full">
                        Grand Child
                      </Link>
                    </li>
                  </ul>
                  <FeaturedCard />
                </div>
                {/* ================= sub categories end ================== */}
              </li>
            </ul>
            {/* ================= categories end ================== */}
          </li>
          <li>
            <Link href="#" className="block w-full">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="block w-full">
              Brands
            </Link>
          </li>
          <li>
            <Link href="#" className="block w-full">
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
        <Link href="#">
          <IconHeart stroke={iconStroke} />
        </Link>
        <Link href="#">
          <IconShoppingCart stroke={iconStroke} />
        </Link>
        <Link href="#" className="mt-2">
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
