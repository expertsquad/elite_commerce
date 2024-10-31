"use client";
import { server_url } from "@/constants";
import { heroTopSmallBanner } from "@/interfaces/heroTopCard.interface";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const TopSmallBanner = ({
  topOffer,
  currencyIcon,
}: {
  topOffer: heroTopSmallBanner;
  currencyIcon: string;
}) => {
  const handleLink = () => {
    if (topOffer?.link && topOffer?.backgroundPhoto) {
      window.open(topOffer?.link, "_blank");
    }
  };
  return (
    <div
      className={`flex items-center gap-x-5 p-5 md:justify-start justify-center rounded-lg flex-1 w-full h-full ${
        topOffer?.backgroundPhoto && "cursor-pointer"
      }`}
      style={{
        backgroundColor: `${
          topOffer?.backgroundColor && `${topOffer?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          !topOffer?.backgroundColor &&
          `${server_url + topOffer?.backgroundPhoto}`
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={handleLink}
    >
      <div
        className={`relative w-36 h-36 shrink-0 ${
          topOffer?.backgroundPhoto ? "hidden" : "block"
        }`}
      >
        <Image
          src={`${server_url + topOffer?.productPhoto}`}
          alt="Hero discount item"
          fill
          style={{
            objectFit: "cover",
          }}
          className="inset-0 top-0 left-0 object-cover"
        />
      </div>

      <div
        className={`flex flex-col ${
          topOffer?.backgroundPhoto ? "hidden" : "block"
        }`}
      >
        <h2 className="text-2xl line-clamp-2 text-start">{topOffer?.title}</h2>
        <div className="flex items-baseline gap-1 main-text-color font-bold mt-2.5">
          <span className="text-lg flex items-start justify-start w-full">
            {currencyIcon}
            {topOffer?.price || 200}
          </span>
        </div>

        <div className="flex items-start justify-start ">
          <Link
            href={topOffer?.link || ""}
            target="_blank"
            className="mt-10 flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-md py-2 max-w-[110px] whitespace-nowrap w-full text-xs"
          >
            {topOffer?.buttonText} <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSmallBanner;
