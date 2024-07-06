import { Button } from "@/Components/Buttons";
import { server_url } from "@/constants";
import { heroBottomSmallBanner } from "@/interfaces/heroBottom.interface";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const BottomSmallBanner = ({
  bottomOffer,
}: {
  bottomOffer: heroBottomSmallBanner;
}) => {
  return (
    <div
      className={`flex justify-center md:justify-between items-center p-5 rounded-lg flex-1 w-full h-full text-white`}
      style={{
        backgroundColor: `${
          bottomOffer?.backgroundColor && `${bottomOffer?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          !bottomOffer?.backgroundColor &&
          `${server_url + bottomOffer?.backgroundPhoto}`
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col">
        <h2 className="[font-size:_clamp(1.2em,2.60vw,1.6em)] line-clamp-2 mb-2.5">
          {bottomOffer?.offerTag}
        </h2>
        <h2 className="line-clamp-1 [font-size:_clamp(0.8em,60vw,1em)]">
          {bottomOffer?.title}
        </h2>

        <Link href={bottomOffer?.link} target="_blank">
          <Button className="flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-xl py-2 px-4 md:px-6[font-size:_clamp(0.5em,60vw,0.9em)] mt-9">
            {bottomOffer?.buttonText} <IconArrowRight size={20} />
          </Button>
        </Link>
      </div>

      <div className=" relative w-36 h-full">
        <div className="absolute w-full h-full top-0 left-0 object-cover">
          <Image
            src={`${server_url + bottomOffer?.productPhoto}`}
            alt="Hero discount item"
            fill
            sizes="200px"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSmallBanner;
