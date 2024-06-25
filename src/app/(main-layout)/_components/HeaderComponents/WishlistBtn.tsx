"use client";

import { WishlistContext } from "@/Provider/WishlistProvider";
import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

const WishlistBtn = () => {
  const { wishlistProducts } = useContext(WishlistContext);
  return (
    <Link href="/wishlist" className="relative">
      <span className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
        {wishlistProducts?.length || 0}
      </span>
      <IconHeart stroke={1} />
    </Link>
  );
};

export default WishlistBtn;
