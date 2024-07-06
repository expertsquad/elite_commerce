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
        <span className="text-black-80 hidden md:block [font-size:_clamp(14px,10vw,16px)] mr-2.5">
          Message Now:{" "}
        </span>
        <div className="flex items-center gap-x-2 md:gap-x-2.5">
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
      <div className="flex items-center">
        <span className="text-black-80 hidden md:block mr-2.5">
          Share Items:{" "}
        </span>
        <div className="flex items-center gap-x-2 md:gap-x-2.5">
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
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndOthers;
