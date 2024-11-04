"use client";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { IconChevronRight } from "@tabler/icons-react";
import { ICategory } from "@/interfaces/category.interface";
import { IWidgetCard } from "@/interfaces/widget.interface";
import { useRouter } from "next/navigation";
import { IProduct } from "@/interfaces/product.interface";

const MegaMenuItem = ({
  category,
  widget,
  featureProduct,
  currencySymbol,
  key,
}: {
  category?: ICategory;
  widget: IWidgetCard;
  currencySymbol?: string;
  featureProduct?: IProduct[];
  key?: string;
}) => {
  const redirectPath = "/category/single-category";
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`${redirectPath}?category=${categoryName}`);
  };
  return (
    <li key={key} className="group/category cursor-pointer">
      <span
        onClick={() =>
          category?.categoryName && handleCategoryClick(category?.categoryName)
        }
        className="flex w-full px-4  py-2 group-hover/category:bg-image-background justify-between "
      >
        {category?.categoryName}
        <IconChevronRight className="text-black-50 hidden group-hover/category:block transition-all duration-700  " />
      </span>
      {/* ================= sub categories ================== */}
      <div className="fixed top-0 left-[245px] bg-white opacity-0 h-0 invisible transition-all  duration-300 group-hover/category:visible group-hover/category:opacity-100 group-hover/category:h-[clamp(100px,70vh,500px)] backdrop-blur-xl py-2 shadow-2xl rounded-md  flex ">
        <ul className="w-48 mt-5 h-full flex flex-col overflow-auto">
          {category?.subcategories?.map((subcategory) => (
            <li
              onClick={() => handleCategoryClick(subcategory?.subcategoryName)}
              key={subcategory?.subcategoryId}
            >
              <span className="block w-full px-4 py-2 hover:bg-image-background ">
                {subcategory?.subcategoryName}
              </span>
            </li>
          ))}
        </ul>
        <FeaturedCard
          products={featureProduct}
          currencySymbol={currencySymbol}
          widget={widget}
        />
      </div>
    </li>
  );
};

export default MegaMenuItem;
