import { server_url } from "@/constants";
import { ISocialMedias } from "@/interfaces/socialMedias.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaLink = ({ socialMedia }: { socialMedia: ISocialMedias[] }) => {
  return (
    <div className="flex items-center justify-center gap-3.5 absolute bottom-5 left-0 right-0">
      {socialMedia?.map((socialMedia: ISocialMedias) => {
        return (
          <Link
            target="_blank"
            href={`${socialMedia?.link}` || ""}
            key={socialMedia?._id}
            className="relative  h-10 w-10 p-2 rounded-full overflow-hidden border border-black-10 transition-all duration-700 hover:rotate-[360deg]"
          >
            <Image
              src={`${server_url}${socialMedia?.icon}`}
              alt={socialMedia?.icon}
              fill
              className="object-contain p-2"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMediaLink;
