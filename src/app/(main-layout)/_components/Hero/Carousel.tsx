import { Button } from "@/Components/Buttons";
import { server_url } from "@/constants";
import { HeroSliderProps } from "@/interfaces/heroSliderProps";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ item }: { item: HeroSliderProps }) => {
  const discountedPrice =
    item?.price - item?.price * (item?.discountPercentage / 100);

  return (
    <div
      key={item?._id}
      className={` w-full rounded-lg h-full `}
      style={{
        backgroundColor: `${
          item?.backgroundColor !== "" && `${item?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          item?.backgroundColor === "" &&
          `${server_url + item?.backgroundPhoto}`
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id={item._id}
    >
      <div className="flex items-center md:gap-5 gap-3.5 justify-between lg:px-9 md:px-6 px-4 py-4 h-full w-full">
        <div className="flex flex-col w-6/12">
          <h3 className="font-bold text-gradient-secondary [font-size:_clamp(0.5em,60vw,0.9em)] animate-bounce">
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

          <div className="flex items-center font-bold  [font-size:_clamp(0.5em,60vw,0.9em)]">
            <span className="text-lg">
              {item?.price.toFixed(2)}
              <small className="ml-0.5">USD</small>
            </span>
            <del>
              {discountedPrice}
              <small className="ml-0.5">USD</small>
            </del>
            <span>{item?.discountPercentage.toFixed(2)}%</span>
          </div>
          <div className="mt-4 ">
            <Link href={item?.link}>
              <Button className="flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-full py-2 px-4 md:px-7  [font-size:_clamp(0.5em,60vw,0.9em)] ">
                Shop Now <IconArrowRight />{" "}
              </Button>
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
