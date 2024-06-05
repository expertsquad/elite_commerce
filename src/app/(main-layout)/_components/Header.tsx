import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-[clamp(8px,2vh,20px)] px-[clamp(10px,5vw,30px)] text-md bg-gradient-primary-light flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <span className="text-2xl">Logo</span>
        <ul className="flex gap-3">
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
          <li>
            <Link href="#">data</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <span className="first:after:content-['_|'] after:text-black-50 after:opacity-50">
          Icon
        </span>
        <span>Icon</span>
        <span>Icon</span>
        <span>Icon</span>
      </div>
    </header>
  );
};

export default Header;
