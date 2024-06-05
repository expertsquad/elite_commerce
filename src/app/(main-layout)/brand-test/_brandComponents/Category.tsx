import React from "react";

const Category = ({}) => {
  return (
    <div className="flex items-center gap-3.5">
      <input
        type="radio"
        className="form-radio w-5 h-5"
        name="category"
        id="category"
      />
      <span className="text-base text-black-80">Watch</span>
    </div>
  );
};

export default Category;
