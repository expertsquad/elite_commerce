"use client";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const HeroItemSlide = ({ sliderArray }: any) => {
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
    <div className="overflow-hidden relative group w-full">
      <div
        className="h-[280px] md:h-[450px] w-full flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {sliderArray?.map((item: any, index: any) => (
          <div key={index} className="w-full flex-shrink-0">
            <Carousel item={item} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 top-0 bottom-0 flex items-center justify-between p-4 invisible group-hover:visible group-hover:duration-200">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 hover:text-white duration-150 -ml-11 group-hover:-ml-3 delay-100 flex items-center justify-center"
        >
          <IconChevronLeft stroke={2} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 hover:text-white duration-150 -mr-11 group-hover:-mr-3 delay-100 flex items-center justify-center"
        >
          <IconChevronRight stroke={2} />
        </button>
      </div>

      <div className="absolute bottom-2 md:bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sliderArray?.map((s: any, i: number) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-gradient-primary rounded-full ${
                curr === i ? "pr-4 delay-100" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItemSlide;
