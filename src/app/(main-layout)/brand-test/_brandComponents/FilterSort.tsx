"use client";

const FilterSort = () => {
  return (
    <div className="border outline-none rounded-md px-4 md:py-2 py-[5px] cursor-pointer border-black-10">
      <select name="" id="" className="outline-none text-sm cursor-pointer">
        <option value="">Sort By</option>
        <option value="Most Popular">Most Popular</option>
        <option value="Trending">Trending</option>
      </select>
    </div>
  );
};

export default FilterSort;
