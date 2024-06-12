import React from "react";
import Breadcrumb from "../example-poran/_components/Breadcrumb";
import Link from "next/link";
import {
  IconBolt,
  IconEye,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";

import Image from "next/image";
import { demoProductPhoto } from "@/assets";
import StarRating from "@/Components/StarRating";
import ButtonPrimaryLight from "../brands/_components/ButtonPrimaryLight";

export const WishlistItem = () => {
  return (
    <tr>
      <td className="px-5 border border-black-10 border-collapse">
        <button>
          {" "}
          <IconX color="#FF3838" />
        </button>
      </td>
      <td className="border border-black-10 border-collapse px-5 py-6">
        <div className="flex gap-5">
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative  md:w-[60px] md:h-[60px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={demoProductPhoto}
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="line-clamp-2 [font-size:_clamp(10px,5vw,18px)]">
              Apple Watch Series 8 GPS 45mm Silver Aluminum Case
            </span>
            <div className="flex items-center  gap-2">
              <span className="text-positive text-sm">Apple</span>
              <span className="text-black-10 text-sm">|</span>
              <StarRating rating={2} />
            </div>
          </div>
        </div>
      </td>
      <td className=" border border-black-10 border-collapse px-5">
        <span className="text-gradient-primary text-lg font-semibold">
          $1500.03
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <span className="text-positive text-lg font-semibold whitespace-nowrap">
          {"205"} In Stock
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <div className=" flex items-center justify-center gap-5">
          <button className="border border-black-10 rounded-full p-2">
            <IconEye />
          </button>
          <ButtonPrimaryLight className="!rounded-full !text-black-80 !whitespace-nowrap !py-2 !px-3.5">
            <IconShoppingCart color="#24509E" />
            Add To Cart
          </ButtonPrimaryLight>
        </div>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <button className="bg-gradient-primary whitespace-nowrap text-white rounded-full px-3.5 uppercase flex items-center justify-center gap-2.5 text-sm py-2">
          <IconBolt width={20} />
          Quick order
        </button>
      </td>
    </tr>
  );
};

const Wishlist = () => {
  return (
    <div>
      <div>
        <Breadcrumb title="My Wishlist" />
      </div>
      <div className="max-w-[1320px] mx-auto px-5 mt-12  ">
        <div className="relative table-auto overflow-x-auto scrollbar-x-remove">
          <table className=" border border-black-10 border-collapse">
            <thead>
              <tr className="border-black-10 border border-collapse">
                {[
                  "X",
                  "Product Name",
                  "Price",
                  "Stock",
                  "Action",
                  "Quick Order",
                ].map((th, i) => {
                  return (
                    <th
                      className={`font-semibold text-black-80 border border-black-10 text-center py-4 ${
                        th === "X" && "invisible"
                      }`}
                      key={i}
                    >
                      {th}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((td, index) => {
                return <WishlistItem key={index} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-3.5 my-12">
          <Link
            href={"/"}
            className="py-4 bg-gradient-secondary-light px-5 rounded flex items-center justify-center text-base whitespace-nowrap"
          >
            ← BACK TO SHOPPING
          </Link>
          <Link
            href={"/cart"}
            className="py-4 bg-gradient-primary-light px-5 rounded flex items-center justify-center text-base gap-[5px] whitespace-nowrap"
          >
            <IconShoppingCart color="#24509E" width={20} height={20} /> GO TO
            CART →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
