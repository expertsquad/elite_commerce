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
import { getWidget } from "@/utils/getWidget";

const Page = async () => {
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

  const widget = await getWidget();
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });

  return (
    <>
      <div className="main-container pb-10">
        {/* Hero section added */}
        <Hero currencyIcon={currencyIcon?.data?.currencySymbol} />

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
          currencyIcon={currencyIcon?.data?.currencySymbol}
          newestProducts={newestProducts?.data}
          topSellProducts={topSellProducts?.data}
          popularProducts={popularProducts?.data}
        />
      </div>
      {/* best deals */}
      <BestDealsSection />
      {/* extra services section */}
      <div className="main-container pb-10">
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
        <FavouriteBrandSection
          widget={widget}
          favouriteBrands={favouriteBrands?.data}
        />

        {/* Deals of the day */}
        <div className="flex justify-center items-center  flex-col gap-3.5 my-16">
          <div className="flex justify-center items-center gap-5">
            <div className="border-b w-[100px] border-black-50"></div>
            <span className="text-[clamp(20px,5vw,30px)] text-gradient-primary font-bold">
              Deals Of The Day
            </span>
            <div className="border-b w-[100px] border-black-50"></div>
          </div>
          <p className="text-black-80 [font-size:_clamp(14px,2.5vw,16px)]">
            Grab today&apos;s best deals with limited-time discounts. Shop now
            before they&apos;re gone!
          </p>
        </div>
        <DealsOfTheDaySection />

        {/* All products */}
        <div className="flex justify-center items-center capitalize flex-col gap-3.5 my-16">
          <div className="flex justify-center items-center gap-5">
            <div className="border-b w-[100px] border-black-50"></div>
            <span className="text-[clamp(20px,5vw,30px)] text-gradient-primary font-bold">
              Explore Our Product
            </span>
            <div className="border-b w-[100px] border-black-50"></div>
          </div>
          <p className="text-black-80 [font-size:_clamp(14px,2.5vw,16px)]">
            Browse through our diverse range of high-quality products. Find
            everything you need in one place!
          </p>
        </div>
        <div className="grid grid-cols-product-grid grid-rows-product-grid gap-10 min-h-96 justify-around my-5">
          <Suspense fallback={<Loading />}>
            {allProducts?.data?.map((product: IProduct) => {
              return (
                <ProductCard
                  key={product?._id}
                  product={product}
                  currencyIcon={currencyIcon?.data?.currencySymbol}
                />
              );
            })}
          </Suspense>
        </div>
        {totalPages > 1 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            redirectTo="/category/page"
          />
        ) : (
          ""
        )}
      </div>{" "}
    </>
  );
};

export default Page;
