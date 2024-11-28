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
import { ISocialMedia } from "@/interfaces/footer.interface";

const SocialMediaAndOthers = ({ socialMedia }: { socialMedia: any }) => {
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

  const handleShare = (url: string) => {
    handleCopy();
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center whitespace-nowrap">
        <span className="text-black-80 hidden md:hidden xl:block [font-size:_clamp(12px,2vw,14px)] mr-2.5">
          Message Now:
        </span>

        <div className="flex items-center gap-x-2">
          {socialMedia?.socialMedias?.map(
            (media: ISocialMedia, index: number) => {
              const href =
                media?.mediaName?.toLowerCase() === "whatsapp"
                  ? `https://wa.me/${media?.phoneNumber}`
                  : media?.mediaName?.toLowerCase() === "messenger"
                  ? `https://m.me/${media?.userName}`
                  : "#";

              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    media?.mediaName?.toLowerCase() === "whatsapp" ||
                    media?.mediaName?.toLowerCase() === "messenger"
                      ? "flex items-center gap-x-1.5 border border-primary-light hover:border-primary-light rounded-full py-1 px-2 cursor-pointer"
                      : ""
                  }`}
                >
                  {media?.mediaName === "Whatsapp" && (
                    <>
                      <Image
                        src={whatsapp}
                        alt="whatsapp"
                        className="w-4 h-4"
                      />
                      <span className="text-xs">WhatsApp</span>
                    </>
                  )}
                  {media?.mediaName === "Messenger" && (
                    <>
                      <Image
                        src={messenger}
                        alt="messenger"
                        className="w-4 h-4"
                      />
                      <span className="text-xs">Messenger</span>
                    </>
                  )}
                </a>
              );
            }
          )}
        </div>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <span className="text-black-80 hidden md:block mr-2.5 text-sm">
          Share Items:
        </span>
        <div className="flex items-center gap-x-2 md:gap-x-2.5 cursor-pointer">
          <button
            onClick={() =>
              handleShare(
                `https://www.facebook.com/sharer/sharer.php?u=${copyText}`
              )
            }
            className={`flex items-center justify-center`}
          >
            <IconBrandFacebook
              stroke={1}
              size={18}
              className="text-primary hover:fill-primary"
            />
          </button>
          <button
            onClick={() =>
              handleShare(`https://twitter.com/share?url=${copyText}`)
            }
            className={`flex items-center justify-center`}
          >
            <IconBrandTwitter
              stroke={1}
              size={18}
              className="text-primary hover:fill-primary"
            />
          </button>
          <button
            onClick={() =>
              handleShare(
                `https://pinterest.com/pin/create/button/?url=${copyText}`
              )
            }
            className={`flex items-center justify-center`}
          >
            <IconBrandPinterest
              stroke={1}
              size={18}
              className="text-primary hover:fill-primary"
            />
          </button>
          <button
            onClick={() => handleShare(`https://instagram.com/`)}
            className={`flex items-center justify-center`}
          >
            <IconBrandInstagram
              stroke={1}
              size={18}
              className="text-primary hover:fill-primary"
            />
          </button>
          <button className="relative flex items-center justify-center">
            <span onClick={handleCopy}>
              <IconCopy
                stroke={1}
                size={18}
                className="text-primary hover:fill-primary"
              />
            </span>
            {isCopied && (
              <span className="bg-white text-xs p-2 px-1 border border-black-10 rounded-md absolute top-5 right-0 drop-shadow-lg">
                Copied Successfully
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndOthers;
