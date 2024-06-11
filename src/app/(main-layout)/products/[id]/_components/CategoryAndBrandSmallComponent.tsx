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
      <div className="h-5 w-10 relative shrink-0">
        <Image
          src={`${server_url + brandPhoto}`}
          alt="Prand Photo"
          fill
          style={{
            objectFit: "cover",
          }}
          className="w-full h-full top-0 left-0 object-cover"
        />
      </div>
      <span className="text-black-10">|</span>
      <span>Category: {categoryName}</span>
    </div>
  );
};

export default CategoryAndBrandSmallComponent;
