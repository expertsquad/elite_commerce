"use client";
import { IconArrowUp } from "@tabler/icons-react";
import React from "react";

const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="border border-black-10 rounded-full p-[clamp(10px,2.5vw,14px)] text-black-50 cursor-pointer shadow-circle-shadow"
    >
      <IconArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;
