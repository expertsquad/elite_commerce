import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import Image from "next/image";
import React from "react";
import BestDealsSectionProduct from "./BestDealsSectionProduct";
import { IBestDealsProductData } from "@/interfaces/bestDeals.interface";
import CountdownTimer from "./CountDownTimer";

const BestDealsSection = async () => {
  const bestDeals = await fetchData({
    route: "/promotions/best-deals",
    revalidate: 0,
  });

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: `${
          bestDeals?.data?.backgroundColor &&
          `${bestDeals?.data?.backgroundColor}`
        }`,
        backgroundImage: `url(${
          bestDeals?.data?.backgroundPhoto &&
          `${server_url + bestDeals?.data?.backgroundPhoto}`
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="main-container py-10">
        <div className="flex flex-col items-center justify-center gap-y-7 md:flex-row md:items-center md:justify-between pb-10">
          <div className="relative w-[clamp(250px,15vw,350px)] min-h-[250px] max-h-[350px] shrink-0">
            <Image
              src={server_url + bestDeals?.data?.firstProductPhoto}
              alt="product photo"
              style={{
                objectFit: "cover",
              }}
              fill
              className="inset-0 top-0 left-0 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-gradient-primary uppercase text-sm font-medium">
              Best Deals
            </h3>
            <span className="text-gradient-primary uppercase text-center [font-size:clamp(18px,3vw,30px)] font-bold line-clamp-2 xl:w-[80%]">
              {bestDeals?.data?.title}
            </span>
            <p className="text-center mt-2 text-black-80 [font-size:clamp(14px,2vw,18)] md:line-clamp-3 line-clamp-2 hidden md:block">
              {bestDeals?.data?.description}
            </p>
            <div className="mt-9">
              <CountdownTimer
                startDate={bestDeals?.data?.startDate}
                endDate={bestDeals?.data?.endDate}
              />
            </div>
          </div>
          <div className="relative w-[clamp(250px,15vw,350px)] min-h-[250px] max-h-[350px] shrink-0">
            <Image
              src={server_url + bestDeals?.data?.secondProductPhoto}
              alt="product photo"
              style={{
                objectFit: "cover",
              }}
              fill
              className="inset-0 top-0 left-0 object-cover"
            />
          </div>
        </div>
        <div className="flex w-full overflow-x-scroll scrollbar-x-remove">
          <div className="flex items-center justify-center gap-x-5 w-[300%] md:w-full">
            {bestDeals?.data?.products?.map(
              (product: IBestDealsProductData) => (
                <BestDealsSectionProduct key={product?._id} product={product} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDealsSection;
