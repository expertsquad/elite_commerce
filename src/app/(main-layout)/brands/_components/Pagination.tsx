"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      router.push(createPageURL(pageNumber));
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
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
    }
    return pages;
  };

  return <div className="flex items-center gap-3">{renderPageNumbers()}</div>;
};

export default Pagination;
