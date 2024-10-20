import { server_url } from "@/constants";
import Image from "next/image";
import style from "./DealsOfTheDaySection.module.css";
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
    <div
      className={`w-[clamp(300px,25vw,350px)]  rounded-[10px] ${
        index % 2 === 0
          ? deal?.discount
            ? style?.cornerGold
            : ""
          : deal?.discount
          ? style?.cornerBlue
          : ""
      }  relative overflow-hidden`}
    >
      {deal?.discount && (
        <span className="text-white uppercase text-lg font-semibold absolute right-5 top-2.5">
          {" "}
          {deal?.discount}% <br /> Off
        </span>
      )}
      <div
        className={`${
          index % 2 === 0
            ? "bg-gradient-primary-light"
            : "bg-gradient-secondary-light"
        } md:h-[500px] h-[450px] pt-[clamp(10px,2.5vw,20px)]`}
      >
        <div className="flex items-center justify-center">
          <div className="relative  md:w-[200px] w-[180px] md:h-[200px] h-[200px] mx-auto -z-1">
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
            className={`text-2xl md:text-3xl font-semibold capitalize line-clamp-2 ${
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
        <div className="flex items-center justify-center  mt-3 md:mt-5">
          <Link
            href={`${deal?.link}`}
            className={`${
              index % 2 === 0 ? "bg-gradient-primary" : "bg-gradient-secondary"
            } rounded-full flex items-center justify-center text-white py-3 px-5 uppercase transition-all duration-300 hover:scale-105`}
          >
            {deal?.buttonText} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDayCard;
