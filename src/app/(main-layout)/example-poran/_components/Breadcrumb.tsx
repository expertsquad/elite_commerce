import React from "react";
import NextBreadcrumb from "./NextBreadcrumb";
import Link from "next/link";
import breadcrumbBG from "../../../../assets/breadcrumb-bg.svg";

type TBreadcrumbComponentProps = {
  title: string;
  elements?: any;
};

const Breadcrumb = ({ title, elements }: TBreadcrumbComponentProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-primary p-5 md:p-[30px]"
      style={{
        // backgroundImage: `url('breadcrumb-bg.svg')`,
        // backgroundImage: `url(${breadcrumbBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <span className="text-2xl md:text-3xl">{title}</span>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span> | </span>}
        activeClasses="text-amber-500"
        containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        listClasses="hover:underline mx-2 font-bold"
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
