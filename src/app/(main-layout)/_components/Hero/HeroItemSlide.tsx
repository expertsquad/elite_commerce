"use client";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const HeroItemSlide = ({
  sliderArray,
  currencyIcon,
}: {
  sliderArray: any;
  currencyIcon: string;
}) => {
  const [curr, setCurr] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] =
    useState<NodeJS.Timeout | null>(null);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? sliderArray.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === sliderArray.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    const interval = setInterval(next, 5000);
    setAutoSlideInterval(interval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curr]);

  return (
    <div className="overflow-hidden w-full relative group/slider">
      <div
        className="h-[280px] md:h-[450px] w-full flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {sliderArray?.map((item: any, index: number) => (
          <div key={index} className="w-full flex-shrink-0">
            <Carousel item={item} currencyIcon={currencyIcon} />
          </div>
        ))}
      </div>

      <button
        aria-label="prev"
        onClick={prev}
        className="p-1.5 rounded-full shadow bg-white/80 hover:text-white duration-150 group-hover:-ml-3 delay-100 absolute top-1/2 opacity-0 -left-4 hover:bg-gradient-primary-light group-hover/slider:opacity-100 group-hover/slider:left-1"
      >
        <IconChevronLeft size={18} stroke={2} />
      </button>
      <button
        aria-label="next"
        onClick={next}
        className="p-1.5 rounded-full shadow bg-white/80 hover:text-white duration-150 group-hover:-ml-3 delay-100 absolute top-1/2 opacity-0 -right-4 hover:bg-gradient-primary-light group-hover/slider:opacity-100 group-hover/slider:right-1"
      >
        <IconChevronRight size={18} stroke={2} />
      </button>

      <div className="absolute bottom-2 md:bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sliderArray?.map((s: any, index: number) => (
            <div
              key={index}
              className={`transition-all w-2 h-2 bg-image-background rounded-full ${
                curr === index ? "pr-4 delay-100" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItemSlide;
