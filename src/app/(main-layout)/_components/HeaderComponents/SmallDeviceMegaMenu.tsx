import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { fetchData } from "@/actions/fetchData";
import HamburgurNav from "./HamburgurNav";

const SmallDeviceMegaMenu = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 1000,
    revalidate: 600,
  });
  return (
    <nav className="md:hidden mx-auto py-[clamp(8px,2vh,20px)] px-[clamp(5px,5vw,20px)] text-md items-center justify-between">
      {/* Left section of the navigation */}
      <div className="flex gap-5 items-center justify-between">
        {/* hamburger */}
        <HamburgurNav categories={categories?.data} />
        <Link href="/" className="text-2xl text-gradient-primary">
          Logo
        </Link>
        <button className="border rounded-full p-2 border-black-50">
          <IconSearch className="text-black-50 stroke-1" />
        </button>
      </div>
    </nav>
  );
};

export default SmallDeviceMegaMenu;
