import WidgetCard from "@/Components/WidgetCard";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const FavouriteBrandSection = ({
  favouriteBrands,
}: {
  favouriteBrands: IBrand[];
}) => {
  return (
    <div className="md:flex items-start gap-5">
      {/* wiget card */}
      <WidgetCard className="w-[350px] mx-auto" />
      <div className="w-full mt-5 md:mt-0">
        <div className="relative w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-36 after:h-[2px] md:after:h-1 after:bg-gradient-primary">
          <h1 className="text-md md:text-2xl font-bold text-gradient-primary">
            Explore your Favorite Brand
          </h1>
          <div className="flex justify-end">
            <button className="flex items-center gap-3 text-primary">
              See all
              <IconArrowNarrowRight className="text-primary" />
            </button>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-5 mx-auto my-10"> */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 my-10">
          {favouriteBrands?.map((brand) => (
            <div
              key={brand?._id}
              className="border border-black-10 w-32 h-16 relative"
            >
              <Image
                src={server_url + brand?.brandPhoto}
                alt="brand photo"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBrandSection;
