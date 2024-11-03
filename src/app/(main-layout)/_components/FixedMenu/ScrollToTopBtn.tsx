"use client";
import { IconArrowUp } from "@tabler/icons-react";
import React from "react";

const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="border border-black-10 outline-none rounded-full bg-white p-[clamp(10px,2.5vw,14px)] text-black-50 cursor-pointer shadow-circle-shadow hover:text-primary-color"
      >
        <IconArrowUp
          size={22}
          className=" hover:scale-75 duration-100 transition-all"
        />
      </button>
    </>
  );
};

export default ScrollToTopBtn;
