"use client";
import { ICategory } from "@/interfaces/category.interface";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

type ICategoryCardProps = {
  title?: string;
  categories: ICategory[];
};

const CategoryCard = ({ title, categories }: ICategoryCardProps) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleRadioChange = (categoryName: string) => {
    setSelectedCategory(categoryName);

    // Update the query parameter with the selected category
    const query = categoryName ? `?categoryName=${categoryName}` : "";
    router.push(`/category/filtered-products${query}`);
  };
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl">
        {title}
      </h2>
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
              checked={selectedCategory === category.categoryName}
              onChange={() => handleRadioChange(category.categoryName)}
            />
            <label htmlFor={category?.categoryName} className="text-black-80">
              {category?.categoryName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
