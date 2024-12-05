import Link from "next/link";
import React from "react";

const FooterMenu = ({ data }: any) => {
  return (
    <div className="flex flex-col md:items-start items-center md:gap-5 gap-3.5">
      <h6 className="text-black md:font-medium md:text-base text-lg ">
        {data?.menuName}
      </h6>
      <ul className="flex flex-col md:items-start items-center  md:gap-1 gap-3.5 ">
        {data?.children?.map(
          (item: { title: string; link: string }, index: number) => (
            <Link
              href={
                data?.menuName === "Category"
                  ? `/category/single-category?category=${(item?.link).replace(
                      "/",
                      ""
                    )}`
                  : `${item?.link}`
              }
              className="md:text-black-80 text-black-50 hover:text-primary-color-light-color hover:underline transition-all duration-300"
              key={index}
            >
              {item.title}
            </Link>
          )
        )}
      </ul>
      <div className="md:hidden bg-black-10 h-[1px] w-full"></div>
    </div>
  );
};

export default FooterMenu;
