import WidgetCard from "@/Components/WidgetCard";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import Image from "next/image";
import Link from "next/link";
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
          <Link
            href="/brands"
            className="flex justify-end text-gradient-primary"
          >
            <button className="flex items-center">
              See all
              <b className="px-2">&rarr;</b>
            </button>
          </Link>
        </div>
        {/* <div className="flex flex-wrap gap-5 mx-auto my-10"> */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
          {favouriteBrands?.map((brand) => (
            <div
              key={brand?._id}
              className="border border-black-10 w-32 h-16 relative rounded-2xl"
            >
              <Image
                src={server_url + brand?.brandPhoto}
                alt={brand?.brandName}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBrandSection;
