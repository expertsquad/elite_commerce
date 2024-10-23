"use client";
import React, { useContext } from "react";
import FeaturedCard from "./FeaturedCard";
import { IconChevronRight } from "@tabler/icons-react";
import { ICategory } from "@/interfaces/category.interface";
import { IWidgetCard } from "@/interfaces/widget.interface";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { FilterContext } from "@/Provider/BrandProductFilteringProvider";

const MegaMenuItem = ({
  category,
  widget,
}: {
  category?: ICategory;
  widget: IWidgetCard;
}) => {
  const redirectPath = "/category/filtered-products";
  const router = useRouter();
  const pathname = usePathname();

  const { filter, setFilter } = useContext(FilterContext);
  const handleCategoryClick = (categoryName: string) => {
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
    <li
      key={category?._id}
      onClick={() =>
        category?.categoryName && handleCategoryClick(category.categoryName)
      }
      className="group/category"
    >
      <span className="flex w-full px-4 py-2 group-hover/category:bg-gradient-primary-light justify-between group-hover/category:font-semibold">
        {category?.categoryName}
        <IconChevronRight className="text-black-50 hidden group-hover/category:block" />
      </span>
      {/* ================= sub categories ================== */}
      <div className="fixed top-0 left-[245px] bg-white opacity-0 h-0 invisible transition-all  duration-300 group-hover/category:visible group-hover/category:opacity-100 group-hover/category:h-[clamp(100px,70vh,500px)] backdrop-blur-xl py-2 shadow-2xl rounded-md  flex ">
        <ul className="w-48 mt-5 h-full flex flex-col overflow-auto">
          {category?.subcategories?.map((subcategory) => (
            <li key={subcategory?.subcategoryId}>
              <span className="block w-full px-4 py-2 hover:bg-gradient-primary-light hover:font-semibold">
                {subcategory?.subcategoryName}
              </span>
            </li>
          ))}
        </ul>
        <FeaturedCard widget={widget} />
      </div>
    </li>
  );
};

export default MegaMenuItem;
