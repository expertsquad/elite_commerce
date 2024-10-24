"use client";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const ProductFilterByBrandsSection = ({
  brands,
  redirectPath,
}: {
  brands: IBrand[];
  redirectPath: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { filter, setFilter } = useContext(FilterContext);

  const handleCheckboxChange = (brandName: string) => {
    const isExist = filter?.["brand.brandName"]?.find((b) => b === brandName);
    let updateFilterBrands;
    if (isExist) {
      updateFilterBrands = filter["brand.brandName"]?.filter(
        (b) => b !== brandName
      );
    } else {
      updateFilterBrands = [...(filter["brand.brandName"] || []), brandName];
    }

    setFilter({
      ...filter,
      "brand.brandName": updateFilterBrands,
    });
    if (pathname !== redirectPath) {
      router.push(redirectPath);
    }
  };
  return (
    <div>
      <h2 className="mb-5 font-bold text-lg md:text-2xl uppercase whitespace-nowrap">
        BRANDS
      </h2>
      <div className="flex flex-col overflow-y-auto scrollbar-y-remove h-[300px] gap-y-3">
        {brands?.map((brand: IBrand) => (
          <div key={brand?._id} className="flex items-center gap-x-2.5">
            <input
              type="checkbox"
              className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
              checked={
                filter?.["brand.brandName"]?.find((b) => b === brand.brandName)
                  ? true
                  : false
              }
              onChange={() => handleCheckboxChange(brand?.brandName)}
              name={brand.brandName}
              id={brand.brandName}
            />
            <label
              htmlFor={brand?.brandName}
              className="flex items-center gap-x-2 cursor-pointer"
            >
              <span className="relative shrink-0 w-7 h-4">
                <Image
                  src={`${server_url}${brand?.brandPhoto}`}
                  alt="Brand Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full top-0 left-0"
                />
              </span>
              <span className="text-black-80">{brand?.brandName}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterByBrandsSection;
