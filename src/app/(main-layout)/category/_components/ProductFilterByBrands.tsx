"use client";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductFilterByBrandsSection = ({ brands }: { brands: IBrand[] }) => {
  const router = useRouter();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCheckboxChange = (brandName: string) => {
    const updatedSelectedBrands = selectedBrands.includes(brandName)
      ? selectedBrands.filter((name) => name !== brandName)
      : [...selectedBrands, brandName];
    setSelectedBrands(updatedSelectedBrands);

    const query = brandName ? `?brand=${brandName}` : "";

    router.push(`/category/filtered-products/${query}`);
  };
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl uppercase whitespace-nowrap">
        BRANDS
      </h2>
      <div className="flex flex-col gap-y-3">
        {brands?.map((brand: IBrand) => (
          <div key={brand?._id} className="flex items-center gap-x-2.5">
            <input
              type="checkbox"
              className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
              checked={selectedBrands.includes(brand.brandName)}
              onChange={() => handleCheckboxChange(brand.brandName)}
              name={brand.brandName}
              id={brand.brandName}
            />
            <div className="relative shrink-0 w-7 h-4">
              <Image
                src={`${server_url}${brand?.brandPhoto}`}
                alt="Brand Image"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full top-0 left-0"
              />
            </div>
            <span className="text-black-80">{brand?.brandName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterByBrandsSection;
