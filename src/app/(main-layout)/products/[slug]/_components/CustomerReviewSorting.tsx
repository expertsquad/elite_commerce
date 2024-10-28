"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type CustomerReviewSortingProps = {
  slug: string;
};

const CustomerReviewSorting = ({ slug }: CustomerReviewSortingProps) => {
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const router = useRouter();

  const handleSortToggle = (sortValue: string) => {
    const newSort = selectedSort === sortValue ? null : sortValue;
    setSelectedSort(newSort);

    const newUrl = newSort
      ? `/products/${slug}?sortBy=${newSort}`
      : `/products/${slug}`;

    router.push(newUrl);
  };

  return (
    <div className="flex items-center gap-x-3 flex-wrap gap-y-3">
      <button
        onClick={() => handleSortToggle("")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        Newest
      </button>
      <button
        onClick={() => handleSortToggle("5")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "5" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        5 Star
      </button>
      <button
        onClick={() => handleSortToggle("4")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "4" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        4 Star
      </button>
      <button
        onClick={() => handleSortToggle("3")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "3" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        3 Star
      </button>
      <button
        onClick={() => handleSortToggle("2")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "2" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        2 Star
      </button>
      <button
        onClick={() => handleSortToggle("1")}
        className={`text-sm md:text-base border border-black-10 rounded-full px-4 py-1 whitespace-nowrap active:bg-gradient-primary active:text-white ${
          selectedSort === "1" ? "bg-gradient-primary text-white" : ""
        }`}
      >
        1 Star
      </button>
    </div>
  );
};

export default CustomerReviewSorting;
