import { server_url } from "@/constants";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type IDealsOfThedayCardProps = {
  deal: {
    title?: string;
    discount?: string;
    productPhoto?: File | null | undefined;
    description?: string;
    link?: string;
    buttonText?: string;
  };
  index: number;
};

const DealsOfTheDayCard = ({ deal, index }: IDealsOfThedayCardProps) => {
  return (
    <div className={` relative overflow-hidden`}>
      {deal?.discount && (
        <div
          className={`${
            index % 2 === 0 ? "bg-gradient-primary" : "bg-gradient-secondary"
          } rounded-full w-[90px] h-[90px] absolute -right-3 -top-2.5 flex items-center justify-center`}
        >
          <span className="text-white uppercase text-base font-semibold ">
            {deal?.discount}% <br />
            Off
          </span>
        </div>
      )}

      <div
        className={`${
          index % 2 === 0
            ? "bg-image-background"
            : "bg-gradient-secondary-light"
        } md:h-[500px] h-[450px] pt-[clamp(10px,2.5vw,20px)]`}
      >
        <div className="flex items-center justify-center">
          <div className="relative  md:w-[200px] w-[180px] md:h-[200px] h-[200px] mx-auto ">
            <Image
              src={`${server_url}${deal?.productPhoto}`}
              alt="deals photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center text-center px-5 mt-5">
          <h3
            className={`text-2xl font-semibold capitalize line-clamp-2 ${
              index % 2 === 0
                ? "text-gradient-primary"
                : "text-gradient-secondary"
            }`}
          >
            {deal?.title}
          </h3>
          <p className="text-base text-black-80 line-clamp-2">
            {deal?.description}
          </p>
        </div>
        <div className="flex items-center justify-center mt-3 md:mt-5">
          <Link
            href={`${deal?.link}`}
            className={`${
              index % 2 === 0 ? "bg-gradient-primary" : "bg-gradient-secondary"
            } rounded-full flex items-center justify-center text-white text-sm py-2.5 px-4 uppercase transition-all duration-300 hover:scale-105`}
          >
            {deal?.buttonText}
            <IconArrowRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDayCard;
