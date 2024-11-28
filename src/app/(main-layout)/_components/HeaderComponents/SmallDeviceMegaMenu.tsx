import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { fetchData } from "@/actions/fetchData";
import HamburgurNav from "./HamburgurNav";
import Logo from "@/utils/Logo";
import Link from "next/link";

const SmallDeviceMegaMenu = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 1000,
  });

  return (
    <nav className="md:hidden mx-auto py-[clamp(5px,2vh,20px)] px-[clamp(5px,5vw,20px)] text-md items-center justify-between">
      {/* Left section of the navigation */}
      <div className="flex gap-5 items-center justify-between">
        {/* hamburger */}
        <HamburgurNav categories={categories?.data} />

        <Logo />
        <Link
          href="/search"
          className="border rounded-full p-2 border-black-50"
        >
          <IconSearch className="text-black-50" size={14} />
        </Link>
      </div>
    </nav>
  );
};

export default SmallDeviceMegaMenu;
