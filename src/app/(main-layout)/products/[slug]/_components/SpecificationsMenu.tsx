"use client";
import TabsWithUnderline from "@/Components/TabsWithUnderline";
import { specificationsMenu } from "@/constants/specifications.menu.contstant";
import Link from "next/link";
import React from "react";

const SpecificationsMenu = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="overflow-x-auto scrollbar-x-remove border-b-2 border-black-10 my-6 pb-2 flex items-center gap-x-10">
      {specificationsMenu.map((item, index) => (
        <Link
          onClick={() => setActiveTab(item.index)}
          className={`text-base md:text-lg shrink-0 text-nowrap text-gradient-primary ${
            activeTab === item.index ? "text-gradient-primary" : "text-black"
          }`}
          key={item._id}
          href={item.hashtag}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SpecificationsMenu;
