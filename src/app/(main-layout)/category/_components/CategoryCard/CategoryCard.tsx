"use client";

import { ICategory } from "@/interfaces/category.interface";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { usePathname, useRouter } from "next/navigation";

import React, { useContext, useState } from "react";

type ICategoryCardProps = {
  title?: string;
  categories: ICategory[];
  redirectPath: string;
};

const CategoryCard = ({
  title,
  categories,
  redirectPath,
}: ICategoryCardProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { filter, setFilter } = useContext(FilterContext);
  const handleRadioChange = (categoryName: string) => {
    const isExist = filter?.["category.categoryName"]?.find(
      (c) => c === categoryName
    );
    let updateFilterCategories;
    if (isExist) {
      updateFilterCategories = filter["category.categoryName"]?.filter(
        (c) => c !== categoryName
      );
    } else {
      updateFilterCategories = [
        ...(filter["category.categoryName"] || []),
        categoryName,
      ];
    }

    setFilter({
      ...filter,
      "category.categoryName": updateFilterCategories,
    });
    if (pathname !== redirectPath) {
      router.push(redirectPath);
    }
  };
  return (
    <div
      className={`${
        pathname === "/category/single-category" ? "hidden" : "block"
      }`}
    >
      <h2 className="mb-5 md:mb-[30px] font-semibold text-lg ">{title}</h2>
      <div className="flex flex-col gap-y-3">
        {categories?.map((category: ICategory) => (
          <div
            key={category?._id}
            className="flex items-center gap-x-3.5 text-base"
          >
            <input
              className=" rounded-[50%] bg-gradient-primary text-white hover:bg-gradient-primary cursor-pointer accent-current"
              type="checkbox"
              id={category?.categoryName}
              checked={
                filter?.["category.categoryName"]?.find(
                  (c) => c === category.categoryName
                )
                  ? true
                  : false
              }
              onChange={() => handleRadioChange(category.categoryName)}
            />
            <label
              htmlFor={category?.categoryName}
              className="text-black-80 cursor-pointer"
            >
              {category?.categoryName}
            </label>
          </div>
        ))}
      </div>
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
    </div>
  );
};

export default CategoryCard;
