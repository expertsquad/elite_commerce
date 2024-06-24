"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../Components/BreadCrumb/Breadcrumb";
import Link from "next/link";
import {
  IconBolt,
  IconEye,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";

import Image from "next/image";
import StarRating from "@/Components/StarRating";
import ButtonPrimaryLight from "../brands/_components/ButtonPrimaryLight";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { server_url, storages } from "@/constants";
import { wishlistTableHeader } from "@/constants/tablesHeaders.constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { fetchProtectedData } from "@/actions/fetchData";
import {
  updatedWishlistMutation,
  updateWishlist,
} from "@/utils/updateWishlist.utils";
import { mergeProducts } from "@/utils/mergeProduct.utils";

const WishlistItem = ({ product }: { product: IWishlistProduct }) => {
  const handleRemoveFromFav = () => {
    updateWishlist({ product: product });
  };
  return (
    <tr>
      <td className="px-5 border border-black-10 border-collapse">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemoveFromFav();
          }}
        >
          <IconX color="#FF3838" />
        </button>
      </td>
      <td className="border border-black-10 border-collapse px-5 py-6">
        <div className="flex gap-5">
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative  md:w-[60px] md:h-[60px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhotos?.[0]}
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="line-clamp-2 [font-size:_clamp(10px,5vw,18px)]">
              {product?.productName}
            </span>
            <div className="flex items-center  gap-2">
              <span className="text-positive text-sm">
                {product?.brandName}
              </span>
              <span className="text-black-10 text-sm">|</span>
              <StarRating rating={product?.averageRating || 0} />
            </div>
          </div>
        </div>
      </td>
      <td className=" border border-black-10 border-collapse px-5">
        <span className="text-gradient-primary text-lg font-semibold">
          {product?.variant?.discountedPrice || product?.variant?.sellingPrice}
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <span className="text-positive text-lg font-semibold whitespace-nowrap">
          {product?.variant?.inStock} In Stock
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <div className=" flex items-center justify-center gap-5">
          <button className="border border-black-10 rounded-full p-2">
            <IconEye size={18} stroke={1} />
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
  const [wishlistProducts, setWishlistProducts] = useState<
    IWishlistProduct[] | []
  >([]);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    setWishlistProducts(getLocalStorageData(storages.wishlistProducts) || []);
  }, [refetch]);

  return (
    <div>
      <div>
        <Breadcrumb title="My Wishlist" />
      </div>
      <div className="max-w-[1320px] mx-auto px-5 mt-12  ">
        <div className="relative table-auto overflow-x-auto scrollbar-x-remove">
          {wishlistProducts?.length ? (
            <table className=" border border-black-10 border-collapse w-full">
              <thead>
                <tr className="border-black-10 border border-collapse">
                  {wishlistTableHeader.map((th, i) => {
                    return (
                      <th
                        className={`font-semibold text-black-80 border border-black-10 text-center py-4 ${
                          th === "x" && "invisible"
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
                {wishlistProducts.map((product, index) => {
                  return <WishlistItem key={index} product={product} />;
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gradient-secondary text-lg font-semibold">
              No products found in your wishlist
            </p>
          )}
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
