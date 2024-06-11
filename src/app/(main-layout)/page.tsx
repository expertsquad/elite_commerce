import React from "react";
import Hero from "./_components/Hero/Hero";
import InfiniteSlider from "./_components/InfiniteSlider/InfiniteSlider";
import Image from "next/image";
import { wave } from "@/assets";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import { fetchData } from "@/actions/fetchData";
import BestDealsSection from "./_components/BestDealsSection/BestDealsSection";

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
        <p className="text-xl text-gradient-primary font-semibold mt-3 mb-5">
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
      <BestDealsSection />
      <div className="max-w-7xl mx-auto p-3">next</div>{" "}
    </>
  );
};

export default page;
