"use client";
import { IconArrowUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const ClickToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true); // Show the button after scrolling down 200px
    } else {
      setIsVisible(false); // Hide the button if scrolled up
    }
  };

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`border border-black-10 rounded-full p-[clamp(10px,2.5vw,14px)] text-black-50 cursor-pointer shadow-circle-shadow ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <IconArrowUp />
    </button>
  );
};

export default ClickToTopBtn;
