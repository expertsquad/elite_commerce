"use client";
import { server_url } from "@/constants";
import { heroBottomSmallBanner } from "@/interfaces/heroBottom.interface";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const BottomSmallBanner = ({
  bottomOffer,
  currencyIcon,
}: {
  bottomOffer: heroBottomSmallBanner;
  currencyIcon: string;
}) => {
  const handleLink = () => {
    if (bottomOffer?.link && bottomOffer?.backgroundPhoto) {
      window.open(bottomOffer?.link, "_blank");
    }
  };

  return (
    <div
      className={`flex justify-center md:justify-between items-center p-5 rounded-lg flex-1 w-full h-full text-white ${
        bottomOffer?.backgroundPhoto && "cursor-pointer"
      }`}
      style={{
        backgroundColor: `${
          bottomOffer?.backgroundColor && `${bottomOffer?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          !bottomOffer?.backgroundColor &&
          `${server_url + bottomOffer?.backgroundPhoto}`
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={handleLink}
    >
      <div className={`flex flex-col `}>
        <h2 className="text-lg md:text-xl line-clamp-2 mb-2.5">
          {bottomOffer?.offerTag}
        </h2>
        <span className="line-clamp-2 text-lg md:text-sm">
          {bottomOffer?.title}
        </span>

        <Link
          href={bottomOffer?.link}
          target="_blank"
          className="flex items-center justify-center gap-2 bg-gradient-primary hover:bg-gradient-primary-reverse transition-all duration-300 text-white rounded-md py-2 mt-9 max-w-[110px] whitespace-nowrap text-xs uppercase"
        >
          {bottomOffer?.buttonText} <IconArrowRight size={16} />
        </Link>
      </div>

      <div className={`relative w-36 h-36`}>
        <Image
          src={`${server_url + bottomOffer?.productPhoto}`}
          alt="Hero discount item"
          fill
          style={{
            objectFit: "cover",
          }}
          className="inset-0 top-0 left-0 object-cover"
        />
      </div>
    </div>
  );
};

export default BottomSmallBanner;
