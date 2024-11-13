import WidgetCard from "@/Components/WidgetCard";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import { IWidgetCard } from "@/interfaces/widget.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FavouriteBrandSection = ({
  favouriteBrands,
  widget,
}: {
  favouriteBrands: IBrand[];
  widget?: IWidgetCard;
}) => {
  return (
    <div className="md:flex items-start gap-5">
      {/* wiget card */}
      <WidgetCard widget={widget} className="w-[350px] mx-auto" />
      <div className="w-full mt-5 md:mt-0">
        <div className="relative w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-md md:text-2xl font-bold text-gradient-primary">
              Explore your Favorite Brand
            </h1>
            <span>😍</span>
          </div>
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
        <div className="grid grid-cols-fav-brand-grid 2xl:grid-cols-fav-brand-grid-xl gap-8 my-10">
          {favouriteBrands?.map((brand) => (
            <Link href={`brands/${brand?.brandName}`} key={brand?._id}>
              <div className="border hover:border-primary-light hover:bg-image-background transition-all duration-100 border-black-10 h-[60px] 2xl:h-[70px] relative rounded-lg">
                <Image
                  src={server_url + brand?.brandPhoto}
                  alt={brand?.brandName}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBrandSection;
