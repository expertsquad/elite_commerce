import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import ProductVariantColor from "./ProductVariantColor";
import Image from "next/image";
import { server_url } from "@/constants";
import Link from "next/link";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import {
  IconBolt,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import QuickOrderButton from "@/app/(main-layout)/brands/_components/QuickOrderButton";

const SpecBulkProduct = ({ productdata }: { productdata: IProduct }) => {
  return (
    <div className="max-w-[370px] min-w-80 p-5 shadow-lg rounded-md hidden md:block sticky top-20">
      <div className="flex items-center gap-x-4 mb-3">
        {productdata?.productPhotos?.map((photo, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[60px] h-[70px] bg-[#F8F8F8] rounded-md border border-black-10"
          >
            <Image
              src={`${server_url + photo}`}
              alt="product image"
              fill
              className="inset-0 object-contain py-3 px-2"
            />
          </div>
        ))}
      </div>
      <span className="">{productdata?.productName}</span>
      <div className="relative shrink-0 h-6 w-10 mt-3   ">
        <Image
          src={`${server_url + productdata?.brand?.brandPhoto}`}
          alt="brand photo"
          fill
          className="inset-0 object-contain"
        />
      </div>
      <span className="bg-black-10 h-0.5 w-full hidden md:flex my-4"></span>
      {/* == Product variants color and storage == */}
      <div className="flex items-center justify-between gap-x-5 mb-5">
        <div>
          <span className="text-sm text-black-80">Color</span>
          <div className="flex items-center gap-x-2">
            <ProductVariantColor variants={productdata?.variants} />
          </div>
        </div>
        {/* <div>
          <span className="text-sm text-black-80">Storage</span>
          <div className="flex items-center gap-x-2">
            <span className="text-xs px-1.5 py-1 rounded-sm bg-gradient-primary text-white">
              {120}GB
            </span>
            <span className="text-xs px-1.5 py-1 rounded-sm bg-gradient-primary text-white">
              {120}GB
            </span>
            <span className="text-xs px-1.5 py-1 rounded-sm bg-gradient-primary text-white">
              {120}GB
            </span>
          </div>
        </div> */}
      </div>
      {/* == Price == */}
      <div className="flex items-center gap-x-2 mb-10">
        <span className="text-2xl font-bold text-gradient-primary">
          ${productdata?.variants[0]?.discountPercentage}
        </span>
        <span className="text-black-50">|</span>
        <del className="text-base text-black-50">
          ${productdata?.variants[0]?.sellingPrice}
        </del>
        <span className="text-black-50">|</span>
        <div className="bg-gradient-secondary-light rounded-full py-0.5">
          <span className="text-sm text-gradient-secondary px-3 font-semibold">
            ${productdata?.variants[0].discountPercentage}% OFF
          </span>
        </div>
      </div>
      {/* == Buy now, quick order and add to cart == */}
      <div>
        <div className="flex items-center justify-between gap-x-2.5">
          <div className="bg-gradient-primary-light rounded-md w-full">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-x-1.5 text-gradient-primary py-2 text-sm"
            >
              <GenerateGradientIcon
                IconComponent={IconShoppingBag}
                stroke={2}
                size={16}
              />
              BUY NOW
            </Link>
          </div>
          <QuickOrderButton
            product={{
              ...productdata,
              orderQuantity: 1,
              variant: productdata?.variants[0],
            }}
            buttonStyle="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2 rounded-md w-full text-[13px]"
            buttonIcon={<IconBolt size={16} fill="#fff" />}
            buttonText="QUICK ORDER"
          />
        </div>
        <div className="border border-black-10 rounded-md mt-5">
          <button className="text-gradient-primary flex items-center justify-center gap-x-1.5 w-full py-2">
            <GenerateGradientIcon
              IconComponent={IconShoppingCart}
              stroke={1}
              size={20}
            />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecBulkProduct;
