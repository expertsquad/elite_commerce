import { Button } from "@/Components/Buttons";
import { server_url } from "@/constants";
import { heroTopSmallBanner } from "@/interfaces/heroTopCard.interface";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const TopSmallBanner = ({ topOffer }: { topOffer: heroTopSmallBanner }) => {
  return (
    <div
      className={`flex items-center gap-x-5 p-5 md:justify-start justify-center rounded-lg flex-1 w-full h-full`}
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
    >
      <div className="relative w-36 h-full">
        <div className="absolute w-full h-full top-0 left-0 object-cover">
          <Image
            src={`${server_url + topOffer?.productPhoto}`}
            alt="Hero discount item"
            fill
            sizes="200px"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl line-clamp-2">{topOffer?.title}</h2>
        <div className="flex items-baseline gap-1 main-text-color font-bold mt-2.5">
          <span className="text-lg">${topOffer?.price}</span>
        </div>

        <Link href={topOffer?.link} target="_blank" className="mt-10">
          <Button className="flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-xl py-2 px-4 md:px-6 [font-size:_clamp(0.5em,60vw,0.9em)]">
            {topOffer?.buttonText} <IconArrowRight size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopSmallBanner;
