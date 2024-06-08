import { ICategory } from "@/interfaces/category.interface";
import React from "react";

type CategoryCardProps = {
  title?: string;
  categoryData: any;
};

const CategoryCard = ({ categoryData, title }: CategoryCardProps) => {
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl">
        {title}
      </h2>
      <div className="flex flex-col gap-y-3">
        {categoryData?.map((category: ICategory) => (
          <div
            key={category?._id}
            className="flex items-center gap-x-3.5 text-base"
          >
            <input type="checkbox" />
            <span className="text-black-80">{category?.categoryName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
