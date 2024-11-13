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

  return (
    <div className="flex flex-col gap-2.5 ">
      <div className="flex items-center md:justify-normal justify-center gap-3.5">
        {socialMedias?.map((socialMedia: ISocialMedia, index: number) => {
          return (
            <Link
              target="_blank"
              href={`${socialMedia?.link}` || ""}
              key={index}
              className="relative md:w-[30px] md:h-[30px] w-[26px] h-[26px] rounded-full overflow-hidden border border-black-10 transition-all duration-700 hover:rotate-[360deg]"
            >
              <Image
                src={`${server_url}${socialMedia?.icon}`}
                alt={socialMedia?.icon}
                fill
                className="object-contain p-1"
              />
            </Link>
          );
        })}
      </div>
      <span className="text-black text-[10px] md:text-sm">
        {footer?.data?.copyright}
      </span>
    </div>
  );
};

export default SocialMediaConnect;
