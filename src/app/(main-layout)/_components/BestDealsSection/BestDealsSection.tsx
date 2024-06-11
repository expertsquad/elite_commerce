import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import Image from "next/image";
import React from "react";
import CountdownTimer from "./CountDownTimer";
import StarRating from "@/Components/StarRating";

interface IProduct {
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

  console.log(bestDeals);

  return (
    <div
      className="w-full"
      style={{
        background:
          bestDeals?.data?.backgroundColor || bestDeals?.data?.backgroundPhoto,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-16 p-10">
        <div className="relative h-44 w-44 lg:h-60 lg:w-60 mx-auto my-auto">
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
            <div className="bg-white h-[clamp(40px,5vw,80px)] w-[clamp(40px,5vw,80px)] flex flex-col items-center justify-center rounded-xl">
              <p className="text-gradient-primary font-semibold">{days}</p>
              <p className="text-gradient-primary text-xs">Days</p>
            </div>{" "}
            :
            <div className="bg-white h-[clamp(40px,5vw,80px)] w-[clamp(40px,5vw,80px)] flex flex-col items-center justify-center rounded-xl">
              <p className="text-gradient-primary font-semibold">24</p>
              <p className="text-gradient-primary text-xs">Hours</p>
            </div>{" "}
            :
            <div className="bg-white h-[clamp(40px,5vw,80px)] w-[clamp(40px,5vw,80px)] flex flex-col items-center justify-center rounded-xl">
              <p className="text-gradient-primary font-semibold">24</p>
              <p className="text-gradient-primary text-xs">Mins</p>
            </div>{" "}
            :
            <div className="bg-white h-[clamp(40px,5vw,80px)] w-[clamp(40px,5vw,80px)] flex flex-col items-center justify-center rounded-xl">
              <p className="text-gradient-primary font-semibold">24</p>
              <p className="text-gradient-primary text-xs">Secs</p>
            </div>{" "}
          </div>
          {/* <CountdownTimer endDate={endDate} /> */}
        </div>
        <div className="relative h-44 w-44 lg:h-60 lg:w-60 mx-auto my-auto">
          <Image
            src={server_url + bestDeals?.data?.secondProductPhoto}
            alt="product photo"
            className="object-cover"
            fill
          />{" "}
        </div>
      </div>
      <div className="flex pb-5 w-full overflow-auto scrollbar-x-remove">
        <div className="mx-auto flex">
          {bestDeals?.data?.products?.map((product: IProduct) => (
            <div
              // onClick={handleViewProduct}
              key={product?._id}
              className="flex items-center min-w-[200px] px-2 py-2 mx-2 rounded-xl bg-white hover:drop-shadow-lg hover:duration-500 cursor-pointer"
            >
              <div className="w-[60px] h-[60px] relative mr-2">
                <Image
                  src={server_url + product?.productPhoto}
                  fill
                  sizes="500px"
                  alt="Product Photo"
                  priority={true}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center flex-col gap-1">
                <span className="text-black text-sm md:text-base line-clamp-1">
                  {product?.productName}
                </span>

                <StarRating
                  rating={Math.round(product?.averageRating || 0)}
                  className="w-2 h-2 md:w-2.5 md:h-2.5"
                />

                <div className="flex items-center gap-2.5">
                  <span className="text-black flex items-baseline gap-1 main-text-color text-xs md:text-base font-semibold">
                    {product?.discountedPrice} <small>$</small>
                  </span>
                  <del className="flex items-baseline gap-1 text-[10px] md:text-sm">
                    {product?.sellingPrice} <small>$</small>
                  </del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDealsSection;
