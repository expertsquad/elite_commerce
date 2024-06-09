import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { whatsapp } from "@/assets";
import { messenger } from "@/assets";
import Image from "next/image";

const SocialMediaAndOthers = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-black-80 hidden md:block">Message Now: </span>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1 border border-black-10 rounded-full py-1 px-1.5">
            <Image src={whatsapp} alt="whatsapp" />
            <span className="text-xs">WhatsApp</span>
          </div>
          <div className="flex items-center gap-x-1 border border-black-10 rounded-full py-1 px-1.5">
            <Image src={messenger} alt="messenger" />
            <span className="text-xs">Messenger</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-black-80 hidden md:block">Share Items: </span>
        <div className="flex items-center gap-x-4">
          <GenerateGradientIcon
            IconComponent={IconBrandFacebook}
            stroke={2}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandTwitter}
            stroke={2}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandPinterest}
            stroke={2}
            size={20}
          />
          <GenerateGradientIcon
            IconComponent={IconBrandInstagram}
            stroke={2}
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndOthers;
