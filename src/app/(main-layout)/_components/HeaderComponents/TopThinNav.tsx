import { storeSocialMedia, topMenus } from "@/constants/mainMenus.constants";
import Link from "next/link";
import React from "react";

const TopThinNav = () => {
  return (
    <div id="header">
      <div className="hidden md:flex justify-between items-center bg-gradient-primary text-white text-xs px-3 py-1">
        <div className="flex items-center gap-6">
          {topMenus.map((menu) => (
            <Link
              href={`${menu?.href}`}
              className="hover:underline"
              key={menu.label}
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <ul className="flex items-center gap-6">
          Share
          {storeSocialMedia.map((socialMedia) => (
            <li key={socialMedia.label}>
              <Link
                href={socialMedia.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialMedia.icon size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopThinNav;
