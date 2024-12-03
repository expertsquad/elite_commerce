"use client";
import {
  IconArrowLeft,
  IconArrowRight,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import WishlishedProducts from "./WishlishedProducts";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";
import { wishlistTableHeader } from "@/constants/tablesHeaders.constants";
import WishlistedItems from "./WishlistedItems";
import Breadcrumb from "@/Components/BreadCrumb/Breadcrumb";

const WishlistPageContent = ({
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  accessToken,
}: {
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  accessToken?: string;
}) => {
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);

  useEffect(() => {
    getWishlistRemoteAndLocalDataAndMerge();
    setRefetch((prev) => prev + 1);
  }, [setRefetch]);

  const filteredHeaders = isQuickOrderActive
    ? wishlistTableHeader
    : wishlistTableHeader.filter((header) => header !== "Quick Order");

  return (
    <div>
      <div>
        <Breadcrumb title="My Wishlist" />
      </div>
      <div
        className={`max-w-[1320px] mx-auto px-5 mt-12 ${
          !wishlistProducts?.length &&
          "md:h-[calc(100vh-490px)] flex flex-col items-center justify-center"
        }`}
      >
        <div className="relative table-auto overflow-x-auto scrollbar-x-remove hidden md:block">
          {wishlistProducts?.length ? (
            <table className=" border border-black-10 border-collapse w-full">
              <thead>
                <tr className="border-black-10 border border-collapse">
                  {filteredHeaders.map((th, i) => {
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
                  return (
                    <WishlistedItems
                      key={index}
                      product={product}
                      currencyIcon={currencyIcon}
                      shippingAmount={shippingAmount}
                      isQuickOrderActive={isQuickOrderActive}
                      accessToken={accessToken ? accessToken : ""}
                    />
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gradient-secondary text-lg font-semibold">
              No products found in your wishlist
            </p>
          )}
        </div>
        <div className="block md:hidden">
          {wishlistProducts?.map((product: IWishlistProduct, index: number) => (
            <WishlishedProducts
              key={index}
              product={product}
              setRefetch={setRefetch}
              currencyIcon={currencyIcon}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-5 items-center justify-center md:gap-x-3.5 my-12">
          <p className="text-center text-gradient-secondary text-lg font-semibold block md:hidden">
            No products found in your wishlist
          </p>
          <Link
            href="/"
            className="relative inline-flex items-center justify-center w-[220px] py-3 overflow-hidden font-medium transition-all bg-gradient-secondary-light rounded hover:bg-white group"
          >
            <span className="w-[220px] h-[200px] rounded rotate-[40deg] bg-secondary absolute bottom-0 right-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center justify-center gap-x-1 text-sm">
              <IconArrowLeft size={18} stroke={1.5} />
              BACK TO SHOPPING
            </span>
          </Link>

          <Link
            href="/cart"
            className="relative inline-flex items-center justify-center w-[220px] py-3 overflow-hidden font-medium transition-all bg-gradient-primary-light rounded hover:bg-white group"
          >
            <span className="w-[220px] h-[200px] rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center justify-center gap-x-1 text-sm">
              <IconShoppingCart size={18} stroke={1.5} />
              GO TO CART
              <IconArrowRight size={18} stroke={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPageContent;
