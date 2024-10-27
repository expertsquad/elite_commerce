"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconCopy,
} from "@tabler/icons-react";
import { whatsapp } from "@/assets";
import { messenger } from "@/assets";
import Image from "next/image";
import React from "react";

const SocialMediaAndOthers = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [copyText, setCopyText] = React.useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyText(window.location.href);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center whitespace-nowrap">
        <span className="text-black-80 hidden md:hidden xl:block [font-size:_clamp(14px,2.5vw,16px)] mr-2.5">
          Message Now:
        </span>
        <div className="flex items-center gap-x-2 md:gap-x-2.5 cursor-pointer">
          <div className="flex items-center gap-x-1.5 border border-black-10 rounded-full py-1 px-2">
            <Image src={whatsapp} alt="whatsapp" className="w-4 h-4" />
            <span className="text-xs">WhatsApp</span>
          </div>
          <div className="flex items-center gap-x-1.5 border border-black-10 rounded-full py-1 px-2">
            <Image src={messenger} alt="messenger" className="w-4 h-4" />
            <span className="text-xs">Messenger</span>
          </div>
        </div>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <span className="text-black-80 hidden md:block mr-2.5">
          Share Items:
        </span>
        <div className="flex items-center gap-x-2 md:gap-x-2.5 cursor-pointer">
          <GenerateGradientIcon
            IconComponent={IconBrandFacebook}
            stroke={1}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandTwitter}
            stroke={1}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandPinterest}
            stroke={1}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandInstagram}
            stroke={1}
            size={20}
          />
          <div className="relative flex items-center justify-center">
            <button onClick={handleCopy}>
              <IconCopy
                stroke={1}
                size={20}
                style={{ stroke: "url(#gradient1)" }}
              />
            </button>
            {isCopied && (
              <span className="bg-white text-xs p-2 px-1 border border-black-10 rounded-md absolute top-5 right-0 drop-shadow-lg">
                Copied Successfully
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndOthers;
