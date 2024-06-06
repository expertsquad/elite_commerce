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
      className={`flex justify-center md:justify-between items-center gap-4 p-5 rounded-lg flex-1 w-full h-full text-white`}
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
      <div className="flex flex-col gap-5">
        <h2 className="[font-size:_clamp(1.2em,2.5vw,0.1.6em)] line-clamp-1">
          {bottomOffer?.offerTag}
        </h2>
        <h2 className="  line-clamp-1 [font-size:_clamp(0.8em,2.5vw,1em)]">
          {bottomOffer?.title}
        </h2>

        <Link href={bottomOffer?.link}>
          <Button className="flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-full py-2 px-4 md:px-6[font-size:_clamp(0.5em,60vw,0.9em)] ">
            {bottomOffer?.buttonText} <IconArrowRight />{" "}
          </Button>
        </Link>
      </div>

      <div className=" relative w-36 h-36">
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
