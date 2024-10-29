"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { IconBolt } from "@tabler/icons-react";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import { WishlistContext } from "@/Provider/WishlistProvider";
import AddToWishlistBtn from "@/app/(main-layout)/products/[slug]/_components/AddToWishlistBtn";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import { getPricingDetails } from "./getPricingDetails";

type ProductImageSliderProps = {
  product: IProduct;
  defaultVariant?: any;
  loading?: any;
  currencyIcon?: string;
  shippingAmount?: number;
  isQuickOrderActive?: boolean;
};

const ProductImageSlider = ({
  product,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
}: ProductImageSliderProps) => {
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
  }, [isHovered, product?.productPhotos?.length]);

  const showSlide = (index: number) => {
    return { display: index === currentSlide ? "block" : "none" };
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const productDetails = getPricingDetails(product);
  const { discountPercentage } = productDetails;

  return (
    <section>
      <div className="w-full flex justify-between gap-x-0.5 relative">
        {discountPercentage && (
          <div className="absolute top-2.5 left-2.5 z-10 ">
            <span className="bg-gradient-secondary py-1 px-2 rounded-md text-white md:text-xs text-[10px] cursor-default">
              -{discountPercentage && discountPercentage.toFixed(0)}%
            </span>
          </div>
        )}

        {product?.productPhotos?.map((productImg: string, index: number) => (
          <div
            key={index}
            style={showSlide(index)}
            onMouseEnter={() => setIsHovered(true)}
            onTouchStart={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center justify-center flex-col w-full relative"
          >
            <div className="relative shrink-0 h-[250px] md:max-h-[250px] w-full mx-auto">
              <Image
                alt="Product Image"
                fill
                src={`${server_url}${productImg}`}
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full top-0 left-0 object-contain p-2"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="absolute bottom-5 z-10">
                <div className="indicators gap-2 flex justify-center items-center ">
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
          </div>
        ))}

        <div className="absolute top-2.5 right-2.5 z-10">
          <div className="flex flex-col gap-y-1.5">
            <AddToWishlistBtn
              product={product}
              variant={product?.variants[0]}
            />

            {isQuickOrderActive && (
              <QuickOrderButton
                product={{
                  ...product,
                  orderQuantity: 1,
                  variant: product?.variants[0],
                }}
                buttonIcon={<IconBolt size={18} stroke={1} />}
                buttonStyle="cursor-pointer rounded-full flex justify-center items-center bg-white h-[30px] w-[30px] border border-black-10 md:hidden"
                currencyIcon={currencyIcon}
                shippingAmount={shippingAmount ? shippingAmount : 0}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImageSlider;
