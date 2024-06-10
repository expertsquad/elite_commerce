import {
  facebookIcon,
  pinterestIcon,
  redditIcon,
  whatsappIcon,
  youtubeIcon,
} from "@/assets";
import Image from "next/image";
import React from "react";

const SocialMediaConnect = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-2.5 ">
      <div className="flex items-center gap-3.5">
        <div className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden">
          <Image
            src={facebookIcon}
            alt="social-icons"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden">
          <Image
            src={redditIcon}
            alt="social-icons"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden">
          <Image
            src={youtubeIcon}
            alt="social-icons"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden">
          <Image
            src={whatsappIcon}
            alt="social-icons"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative md:w-[26px] md:h-[26px] w-[24px] h-[24px] rounded-full overflow-hidden">
          <Image
            src={pinterestIcon}
            alt="social-icons"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <span className="text-black text-[10px] md:text-sm">
        expertSquad © {currentYear}. All Rights Reserved
      </span>
    </div>
  );
};

export default SocialMediaConnect;
