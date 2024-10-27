import { IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ScrollToTopBtn = () => {
  return (
    <Link
      href={`#header`}
      className=" border border-black-10 rounded-full p-[clamp(10px,2.5vw,14px)] text-black-50 cursor-pointer shadow-circle-shadow"
    >
      <IconArrowUp />
    </Link>
  );
};

export default ScrollToTopBtn;
