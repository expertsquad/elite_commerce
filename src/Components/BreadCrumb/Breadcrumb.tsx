import React from "react";
import NextBreadcrumb from "./NextBreadcrumb";
import Link from "next/link";
import { IconChevronsUp, IconHome } from "@tabler/icons-react";

type TBreadcrumbComponentProps = {
  title: string;
  elements?: any;
};

const Breadcrumb = ({ title, elements }: TBreadcrumbComponentProps) => {
  return (
    <div className="flex main-container">
      {/* <span className="text-2xl md:text-3xl">{title}</span> */}
      <NextBreadcrumb
        homeElement={
          <IconHome
            stroke={1}
            size={20}
            className="text-black-50 hover:text-primary "
          />
        }
        separator={
          <IconChevronsUp
            stroke={1}
            size={20}
            className="rotate-90 text-black-50"
          />
        }
        activeClasses="text-primary"
        containerClasses="flex items-center py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        listClasses="hover:underline mx-2 "
        capitalizeLinks
      />
      {/* == Breadcrumb Elements == */}
      <div className="hidden md:block">
        {elements?.map((element: any, index: number) => (
          <Link key={index} href={"/"}>
            <span>{element?.brandName}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
