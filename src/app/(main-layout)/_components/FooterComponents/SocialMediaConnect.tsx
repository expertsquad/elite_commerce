import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import { ISocialMedia } from "@/interfaces/footer.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaConnect = async () => {
  const footer = await fetchData({
    route: "/settings/footer",
  });
  const socialMedias = footer?.data?.socialMedias;
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-2.5 ">
      <div className="flex items-center md:justify-normal justify-center gap-3.5">
        {socialMedias?.map((socialMedia: ISocialMedia) => {
          return (
            <Link
              target="_blank"
              href={`${socialMedia?.link}` || ""}
              key={socialMedia?._position}
              className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden border border-black-50"
            >
              <Image
                src={`${server_url}${socialMedia?.icon}`}
                alt={socialMedia?.icon}
                fill
                className="object-contain"
              />
            </Link>
          );
        })}
      </div>
      <span className="text-black text-[10px] md:text-sm">
        {footer?.data?.copyright} © {currentYear}. All Rights Reserved
      </span>
    </div>
  );
};

export default SocialMediaConnect;
