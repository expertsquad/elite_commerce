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
  const isExternalLink = topOffer?.link?.startsWith("http");
  const handleLink = () => {
    if (topOffer?.link && isExternalLink && topOffer?.backgroundPhoto) {
      window.open(topOffer?.link, "_blank");
    }
    if (topOffer?.link && !isExternalLink) {
      window.location.href = "/products/" + topOffer?.link;
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
            objectFit: "contain",
          }}
          className="inset-0 top-0 left-0 object-contain"
        />
      </div>

      <div
        className={`flex flex-col ${
          topOffer?.backgroundPhoto ? "hidden" : "block"
        }`}
      >
        <h2 className="text-lg md:text-xl line-clamp-2 text-start mb-2.5">
          {topOffer?.title}
        </h2>
        <span className="text-lg md:text-sm line-clamp-2 text-start">
          {topOffer?.offerTag}
        </span>

        <div className="flex items-start justify-start uppercase">
          <Link
            href={topOffer?.link || ""}
            target="_blank"
            className="mt-10 flex items-center justify-center gap-2 bg-gradient-primary hover:bg-gradient-primary-reverse transition-all duration-300 text-white rounded-md py-2 max-w-[110px] whitespace-nowrap w-full text-xs"
          >
            {topOffer?.buttonText} <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSmallBanner;
