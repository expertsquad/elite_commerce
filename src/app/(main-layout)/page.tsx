import React from "react";
import Hero from "./_components/Hero/Hero";
import InfiniteSlider from "./_components/InfiniteSlider/InfiniteSlider";
import Image from "next/image";
import { wave } from "@/assets";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import { fetchData } from "@/actions/fetchData";
import BestDealsSection from "./_components/BestDealsSection/BestDealsSection";
import { extraServices } from "@/constants/extraServices.constants";
import WidgetCard from "@/Components/WidgetCard";

const page = async () => {
  const newestProducts = await fetchData({ route: "/product" });
  const topSellProducts = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
  });
  const popularProducts = await fetchData({
    route: "/product",
    query: "sortBy=averageRating",
  });
  return (
    <>
      <div className="max-w-7xl mx-auto p-3">
        {/* Hero section added */}
        <Hero />

        {/* hottest categories */}
        <p className="text-sm text-gradient-secondary mt-10">
          Shop by Category
        </p>
        <p className="text-xl text-gradient-primary font-semibold mt-3 mb-10">
          Browse Our Hottest Categories
        </p>
        <InfiniteSlider />

        {/* feature section  */}
        <div className="flex justify-center items-center uppercase flex-col mt-10">
          <p className="text-[clamp(20px,5vw,25px)] text-gradient-primary">
            Featured Products
          </p>
          <Image
            src={wave}
            alt="gradient line"
            className="w-[clamp(200px,70vw,300px)]"
          />
        </div>
        <FeaturedProducts
          newestProducts={newestProducts?.data}
          topSellProducts={topSellProducts?.data}
          popularProducts={popularProducts?.data}
        />
      </div>
      {/* best deals */}
      <BestDealsSection />
      {/* extra services section */}
      <div className="max-w-7xl mx-auto p-3">
        <div className="flex flex-col md:flex-row items-center justify-between py-10 lg:py-16 text-center md:text-left gap-10">
          {extraServices.map((service) => (
            <div
              className="flex flex-col md:flex-row md:gap-2 items-center"
              key={service.title}
            >
              <Image
                src={service.icon}
                alt="delivery truck icon"
                className="w-12 h-12 md:w-8 md:h-8 lg:w-12 lg:h-12"
              />
              <div>
                <h5 className="font-bold text-sm lg:text-sm">
                  {service.title}
                </h5>
                <p className="text-black-50 text-xs lg:text-sm">
                  {service.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* favourite brand section */}
        <div className="flex items-start gap-5">
          {/* wiget card */}
          <div className="w-[400px]">
            <WidgetCard />
          </div>
          <div className="w-full relative after:content-[''] after:absolute inset-0 ">
            <h1 className="text-2xl font-bold text-gradient-primary">
              Explore your Favorite Brand
            </h1>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default page;
