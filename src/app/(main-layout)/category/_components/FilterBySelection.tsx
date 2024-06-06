"use client";
import React, { useState } from "react";

const FilterBySelection = () => {
  const [selected, setSelected] = useState("MostPopular");
  return (
    <div className="border border-black-10 px-3 rounded-md">
      <select
        name=""
        id=""
        className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent text-gray-700 active:text-fuchsia-700"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="MostPopular">Most Popular</option>
        <option value="Recent">New Product</option>
        <option value="HighPrice">High Price</option>
        <option value="LowPrice">Low Price</option>
      </select>
    </div>
  );
};

export default FilterBySelection;
