"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconBolt, IconHeart } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";

type ProductImageSliderProps = {
  product: IProduct;
  defaultVariant?: any;
  loading?: any;
};

const ProductImageSlider = ({
  product,
  defaultVariant,
  loading,
}: ProductImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startSlideshow = () => {
      intervalId = setInterval(() => {
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % product.productPhotos.length
        );
      }, 1000);
    };

    const stopSlideshow = () => {
      clearInterval(intervalId);
    };

    if (isHovered) {
      startSlideshow();
    } else {
      stopSlideshow();
    }

    return () => {
      stopSlideshow();
    };
  }, [isHovered, product.productPhotos.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // <== Handle Quick Product View ==>
  const handleQuickProductView = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowModal(true);
  };

  return (
    <section>
      <div className="w-full flex justify-between gap-x-0.5 relative">
        <div className="w-1/7">
          {defaultVariant?.discountPercentage ? (
            <span className="bg-gradient-secondary py-1 px-2 rounded-lg text-white text-xs cursor-default">
              {defaultVariant?.discountPercentage}%
            </span>
          ) : (
            <span className="bg-gradient-secondary py-1 md:px-2 px-0.5 md:rounded-lg rounded-full text-white md:text-xs text-[10px] cursor-default">
              {20}%
            </span>
          )}
        </div>

        {product?.productPhotos?.map((productImg: string, index: number) => (
          <div
            key={index}
            style={showSlide(index)}
            onMouseEnter={() => setIsHovered(true)}
            onTouchStart={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-center flex-col w-5/7 w-full"
          >
            <div className="relative shrink-0 h-[200px] md:max-h-[200px] md:max-w-[200px] w-full mx-auto">
              <Image
                alt="Product Image"
                fill
                style={{
                  objectFit: "cover",
                }}
                src={`${server_url}${productImg}`}
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
            <div className="">
              <div className="indicators gap-2 flex mt-8 justify-center items-center ">
                {product?.productPhotos?.map((_: any, dotIndex: number) => (
                  <div
                    key={dotIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDotClick(dotIndex);
                    }}
                    className={`indicator w-[6px] h-[6px] rounded-full cursor-pointer ${
                      dotIndex === currentSlide
                        ? "bg-gradient-primary"
                        : "bg-black-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="w-1/7 flex items-start justify-end">
          <div className="flex flex-col gap-y-1.5">
            <button className="cursor-pointer md:text-[12px] border border-black-10 bg-white md:h-8 md:w-8 h-6 w-6 rounded-full flex justify-center items-center">
              <IconHeart stroke={2} height={16} width={16} />
            </button>
            <button className="cursor-pointer md:text-[12px] border border-black-10 bg-white md:h-8 md:w-8 h-6 w-6 rounded-full flex justify-center items-center md:hidden">
              <IconBolt stroke={2} height={16} width={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImageSlider;
