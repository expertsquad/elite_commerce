import { server_url } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryAndBrandSmallComponentProps = {
  brandPhoto: string;
  categoryName: string;
  brandName?: string;
  className?: string;
};

const CategoryAndBrandSmallComponent = ({
  brandPhoto,
  categoryName,
  brandName,
  className,
}: CategoryAndBrandSmallComponentProps) => {
  return (
    <div className="flex items-center gap-x-1.5">
      <Link
        href={`/brands/${brandName}`}
        className="h-10 w-10 relative shrink-0"
      >
        <Image
          src={`${server_url + brandPhoto}`}
          alt="Prand Photo"
          fill
          style={{ objectFit: "contain" }}
          className="inset-0 object-contain"
        />
      </Link>
      <span className="text-black-10">|</span>
      <Link
        href={`/category/single-category?category=${categoryName}`}
        className={`text-black-80 [font-size:_clamp(13px,2.5vw,16px)] ${className}`}
      >
        {categoryName}
      </Link>
    </div>
  );
};

export default CategoryAndBrandSmallComponent;
