"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageClick = (pageNumber: number) => {
    router.push(createPageURL(pageNumber));
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          key={i}
          className={`cursor-pointer w-10 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all ${
            i === currentPage ? "text-white bg-gradient-primary" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return <div className="flex items-center gap-3">{renderPageNumbers()}</div>;
};

export default Pagination;
