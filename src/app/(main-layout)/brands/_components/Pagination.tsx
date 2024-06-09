"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  redirectTo,
}: {
  totalPages: number;
  currentPage: number;
  redirectTo: string;
}) => {
  const router = useRouter();

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      router.push(`${redirectTo}/${pageNumber}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i <= maxVisiblePages ||
        i > totalPages - maxVisiblePages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`cursor-pointer w-10 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all ${
              i === currentPage ? "text-white bg-gradient-primary" : ""
            }`}
            onClick={() => handlePageClick(i)}
            disabled={i === currentPage}
            aria-current={i === currentPage ? "page" : undefined}
            aria-label={`Page ${i}`}
          >
            {i}
          </button>
        );
      } else if (
        i === maxVisiblePages + 1 ||
        i === totalPages - maxVisiblePages
      ) {
        pages.push(
          <div
            key={i}
            className="cursor-default w-10 h-10 rounded-full flex items-center justify-center"
          >
            ...
          </div>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {renderPageNumbers()}
      <button
        className="cursor-pointer px-5 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all"
        onClick={handleNextClick}
        disabled={currentPage >= totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
