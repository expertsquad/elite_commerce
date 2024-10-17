import { server_url } from "@/constants";
import { HeroSliderProps } from "@/interfaces/heroSliderProps";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ item }: { item: HeroSliderProps }) => {
  const discountedPrice =
    item?.price - item?.price * (item?.discountPercentage / 100);

  console.log(item, "cehcking");

  return (
    <div
      key={item?._id}
      className={`w-full rounded-lg h-full`}
      style={{
        backgroundColor: `${
          item?.backgroundColor !== "" && `${item?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          item?.backgroundPhoto && `${server_url + item?.backgroundPhoto}`
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id={item._id}
    >
      <div className="flex items-center md:gap-5 gap-3.5 justify-between lg:px-9 md:px-6 px-4 py-4 h-full w-full">
        <div className="flex flex-col gap-y-3 w-6/12">
          <h3 className="font-bold text-gradient-secondary [font-size:_clamp(0.5em,60vw,0.9em)] animate-bounce hidden md:block">
            {item?.sliderTag}
          </h3>
          <h2
            className={`lg:text-4xl md:text-lg text-lg font-bold leading-0 line-clamp-2`}
          >
            {item.title}
          </h2>
          <p
            className={`[font-size:_clamp(0.85em,5vw,1em)] text-gray-500 line-clamp-2 `}
          >
            {item.description}
          </p>

          <div className="hidden md:flex md:items-center items-baseline gap-x-2 md:mt-5 [font-size:_clamp(0.5em,60vw,0.9em)]">
            <span className="text-2xl font-bold">
              ${discountedPrice.toFixed(2)}
            </span>

            <del className="text-lg text-black-50 hidden md:block">
              ${item?.price}.00
            </del>
            <span className="text-xs md:text-base  text-danger">
              {item?.discountPercentage.toFixed(2)}%
            </span>
          </div>
          <div className="md:mt-6 hover:text-positive">
            <Link
              href={item?.link}
              className="min-w-[130px] md:min-w-[165px] max-w-[180px] flex items-center justify-center gap-x-2 bg-gradient-primary text-white rounded-lg py-3 [font-size:_clamp(12px,2.5vw,16px)] uppercase whitespace-nowrap"
            >
              {item?.buttonText} <IconArrowRight />
            </Link>
          </div>
        </div>
        <div className="relative md:w-[250px] md:h-[250px] w-[180px] h-[150px]">
          <Image
            src={`${server_url + item?.productPhoto}`}
            alt="hero item images"
            fill
            priority={true}
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full top-0 left-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
