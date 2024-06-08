import { ICategory } from "@/interfaces/category.interface";
import React from "react";

const Category = ({ categoryData }: { categoryData: ICategory }) => {
  return (
    <label className="text-base text-black-80 flex items-center gap-3.5">
      <input
        type="radio"
        className="form-radio w-5 h-5 cursor-pointer "
        name="category"
        id="category"
      />

      {categoryData?.categoryName || "Category"}
    </label>
  );
};

export default Category;
