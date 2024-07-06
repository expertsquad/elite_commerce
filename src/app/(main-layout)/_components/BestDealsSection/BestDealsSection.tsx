import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import Image from "next/image";
import React from "react";
import StarRating from "@/Components/StarRating";
import BestDealsSectionProduct from "./BestDealsSectionProduct";

export interface IBestDealsProduct {
  _id: string;
  productPhoto: string;
  productName: string;
  averageRating: number;
  sellingPrice: number;
  discountedPrice: number;
}

const BestDealsSection = async () => {
  const bestDeals = await fetchData({ route: "/promotions/best-deals" });

  const endDate = new Date(bestDeals?.data?.endDate);
  //   const days=new Date(endDate) - new Date()
  const days = 4;
  const hours = 10;
  const minutes = 10;
  const seconds = 10;

  return (
    <div
      className="w-full"
      style={{
        background:
          bestDeals?.data?.backgroundColor || bestDeals?.data?.backgroundPhoto,
      }}
    >
      <div className="main-container py-10">
        <div className="md:flex md:items-center gap-16 pb-10">
          <div className="relative h-60 w-60 md:h-40 md:w-40 lg:h-60 lg:w-60 mx-auto my-auto md:ml-0">
            {" "}
            <Image
              src={server_url + bestDeals?.data?.firstProductPhoto}
              alt="product photo"
              className="object-cover"
              fill
            />{" "}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-gradient-primary uppercase font-semibold text-lg">
              {bestDeals?.data?.title}
            </h3>
            <h1 className="text-2xl font-semibold text-center mt-2">
              {bestDeals?.data?.description}
            </h1>
            <div className="flex gap-[clamp(10px,2vw,20px)] text-gradient-primary items-center text-xl text-center mt-9">
              <div className="bg-white h-16 md:h-12 lg:h-16 w-16 md:w-12 lg:w-16 flex flex-col items-center justify-center rounded-xl">
                <p className="text-gradient-primary font-semibold">{days}</p>
                <p className="text-gradient-primary text-xs">Days</p>
              </div>{" "}
              :
              <div className="bg-white h-16 md:h-12 lg:h-16 w-16 md:w-12 lg:w-16 flex flex-col items-center justify-center rounded-xl">
                <p className="text-gradient-primary font-semibold">{hours}</p>
                <p className="text-gradient-primary text-xs">Hours</p>
              </div>{" "}
              :
              <div className="bg-white h-16 md:h-12 lg:h-16 w-16 md:w-12 lg:w-16 flex flex-col items-center justify-center rounded-xl">
                <p className="text-gradient-primary font-semibold">{minutes}</p>
                <p className="text-gradient-primary text-xs">Mins</p>
              </div>{" "}
              :
              <div className="bg-white h-16 md:h-12 lg:h-16 w-16 md:w-12 lg:w-16 flex flex-col items-center justify-center rounded-xl">
                <p className="text-gradient-primary font-semibold">{seconds}</p>
                <p className="text-gradient-primary text-xs">Secs</p>
              </div>{" "}
            </div>
            {/* <CountdownTimer endDate={endDate} /> */}
          </div>
          <div className="relative hidden md:block md:h-40 md:w-40 lg:h-60 lg:w-60 mx-auto my-auto md:mr-0">
            <Image
              src={server_url + bestDeals?.data?.secondProductPhoto}
              alt="product photo"
              className="object-cover"
              fill
            />{" "}
          </div>
        </div>
        <div className="flex w-full overflow-auto scrollbar-x-remove">
          <div className="flex justify-between gap-2 w-full">
            {bestDeals?.data?.products?.map((product: IBestDealsProduct) => (
              <BestDealsSectionProduct key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDealsSection;
