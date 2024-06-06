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

const Header = () => {
  const iconStroke = 1.5;
  return (
    <header>
      <nav className="py-[clamp(8px,2vh,20px)] px-[clamp(10px,5vw,30px)] text-md flex items-center justify-between border-b border-black-10">
        {/* Left section of the navigation */}
        <div className="flex gap-5 items-center">
          <span className="text-2xl">Logo</span>
          <ul className="flex items-center gap-3">
            <li className="h-fit bg-gradient-primary-light rounded-full relative group transition-all duration-300">
              <Link href="#" className="flex items-center py-2 px-3">
                All Categories <IconChevronDown className="text-black-50" />
              </Link>
              {/* =================
      categories start
      ================== */}
              <ul className="absolute bg-white opacity-0 h-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:h-80 backdrop-blur-xl w-44 p-2">
                <li>
                  <Link href="#">Child</Link>
                </li>
              </ul>
              {/* =================
      categories end
      ================== */}
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Brands</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
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
    </header>
  );
};

export default Header;
