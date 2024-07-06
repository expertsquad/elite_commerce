import { server_url } from "@/constants";
import Image from "next/image";
import React from "react";

type CategoryAndBrandSmallComponentProps = {
  brandPhoto: string;
  categoryName: string;
};

const CategoryAndBrandSmallComponent = ({
  brandPhoto,
  categoryName,
}: CategoryAndBrandSmallComponentProps) => {
  return (
    <div className="flex items-center gap-x-1.5">
      <div className="h-4 w-10 relative shrink-0">
        <Image
          src={`${server_url + brandPhoto}`}
          alt="Prand Photo"
          fill
          sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
          className="inset-0 object-contain"
        />
      </div>
      <span className="text-black-10">|</span>
      <span className="text-black-80">Category: {categoryName}</span>
    </div>
  );
};

export default CategoryAndBrandSmallComponent;
