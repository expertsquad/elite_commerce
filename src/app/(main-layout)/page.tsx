import React, { Suspense } from "react";
import Hero from "./_components/Hero/Hero";
import InfiniteSlider from "./_components/InfiniteSlider/InfiniteSlider";
import Image from "next/image";
import { wave } from "@/assets";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import { fetchData } from "@/actions/fetchData";
import BestDealsSection from "./_components/BestDealsSection/BestDealsSection";
import { extraServices } from "@/constants/extraServices.constants";
import FavouriteBrandSection from "./_components/FavouriteBrandSection/FavouriteBrandSection";
import { IProduct } from "@/interfaces/product.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Loading from "../loading";
import Pagination from "@/Components/Pagination";
import DealsOfTheDaySection from "./_components/DealsOfTheDaySection/DealsOfTheDaySection";

const page = async () => {
  const newestProducts = await fetchData({ route: "/product", limit: 8 });
  const allProducts = await fetchData({ route: "/product", limit: 12 });

  // for counting total product page
  const totalPages = Math.ceil(
    allProducts?.meta?.total / allProducts?.meta?.limit
  );

  const topSellProducts = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
    limit: 8,
  });
  const popularProducts = await fetchData({
    route: "/product",
    query: "sortBy=averageRating",
    limit: 8,
  });
  const favouriteBrands = await fetchData({
    route: "/brand",
    limit: 20,
    // query: "sortBy=",
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
        <FavouriteBrandSection favouriteBrands={favouriteBrands?.data} />

        {/* Deals of the day */}
        <div className="flex justify-center items-center uppercase flex-col mt-16">
          <p className="text-[clamp(20px,5vw,25px)] text-gradient-primary">
            Deals Of The Day
          </p>
          <Image
            src={wave}
            alt="gradient line"
            className="w-[clamp(200px,70vw,300px)]"
          />
        </div>
        <DealsOfTheDaySection />

        {/* All products */}
        <div className="flex justify-center items-center uppercase flex-col mt-16">
          <p className="text-[clamp(18px,5vw,25px)] text-gradient-primary">
            Explore Our All Products
          </p>
          <Image
            src={wave}
            alt="gradient line"
            className="w-[clamp(250px,80vw,400px)]"
          />
        </div>
        <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5 min-h-96 justify-around my-5">
          <Suspense fallback={<Loading />}>
            {allProducts?.data?.map((product: IProduct) => {
              return <ProductCard key={product?._id} product={product} />;
            })}
          </Suspense>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={1}
          redirectTo="/category/page"
        />
      </div>{" "}
    </>
  );
};

export default page;
