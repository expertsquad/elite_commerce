import React from "react";
import NextBreadcrumb from "./NextBreadcrumb";
import { breadcrumbBG } from "@/assets";
import Link from "next/link";

type TBreadcrumbComponentProps = {
  title: string;
  elements?: any;
};

const Breadcrumb = ({ title, elements }: TBreadcrumbComponentProps) => {
  console.log(elements, "hello");
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${breadcrumbBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100px",
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
      <div>
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
