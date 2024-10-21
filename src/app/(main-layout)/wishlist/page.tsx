"use client";
import React, { useContext, useEffect } from "react";
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
import { server_url } from "@/constants";
import { wishlistTableHeader } from "@/constants/tablesHeaders.constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import QuickOrderButton from "../brands/_components/QuickOrderButton";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import WishlishedProducts from "../_(.)wishlist/_components/WishlishedProducts";

const WishlistItem = ({ product }: { product: IWishlistProduct }) => {
  const { setRefetch } = useContext(WishlistContext);
  const { cartProducts, setRefetch: setRefetchCart } = useContext(CartContext);

  const handleRemoveFromFav = () => {
    updateWishlist({ product: product });
    setRefetch((prev) => prev + 1);
  };

  const handleAddToCart = ({ product }: { product: IWishlistProduct }) => {
    updateCart({ actionType: "add", product });
    setRefetch((prev) => prev + 1);
    setRefetchCart && setRefetchCart((prev) => prev + 1);
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
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px] flex items-center justify-center">
            <div className="relative md:w-[60px] md:h-[60px] w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                style={{
                  objectFit: "contain",
                }}
                className="inset-0 top-0 left-0 object-contain"
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
      <td className="border border-black-10 border-collapse px-5 text-center">
        <span className="text-gradient-primary text-lg font-semibold text-center">
          {product?.variant?.discountedPrice || product?.variant?.sellingPrice}
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <span className="[font-size:_clamp(14px,2.5vw,18px)] text-positive whitespace-nowrap">
          {product?.variant?.inStock} In Stock
        </span>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <div className=" flex items-center justify-center gap-5">
          <button className="border border-black-10 rounded-full p-2">
            <IconEye size={18} stroke={1} />
          </button>
          {cartProducts?.some((p) => p?.productId === product?._id) ? (
            <small className="text-sm">Already in the cart</small>
          ) : (
            <ButtonPrimaryLight
              className="!rounded-full !text-black-80 !whitespace-nowrap !py-2 !px-3.5 !gap-x-2"
              onClick={() => handleAddToCart({ product })}
            >
              <GenerateGradientIcon
                size={20}
                stroke={1}
                IconComponent={IconShoppingCart}
              />
              <span className="text-gradient-primary">Add To Cart</span>
            </ButtonPrimaryLight>
          )}
        </div>
      </td>
      <td className="border border-black-10 border-collapse px-5">
        <QuickOrderButton
          product={{
            ...product,
            orderQuantity: 1,
            variant: product?.variants?.[0],
          }}
          buttonStyle="bg-gradient-primary whitespace-nowrap text-white rounded-full px-3.5 uppercase flex items-center justify-center gap-x-2 text-sm py-2"
          buttonIcon={<IconBolt size={20} fill="#fff" />}
          buttonText="QUICK ORDER"
        />
      </td>
    </tr>
  );
};

const Wishlist = () => {
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);

  useEffect(() => {
    getWishlistRemoteAndLocalDataAndMerge();
    setRefetch((prev) => prev + 1);
  }, [setRefetch]);

  return (
    <div>
      <div>
        <Breadcrumb title="My Wishlist" />
      </div>
      <div className="max-w-[1320px] mx-auto px-5 mt-12  ">
        <div className="relative table-auto overflow-x-auto scrollbar-x-remove hidden md:block">
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
        <div className="block md:hidden">
          {wishlistProducts?.map((product: IWishlistProduct, index: number) => (
            <WishlishedProducts
              key={index}
              product={product}
              setRefetch={setRefetch}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-3.5 my-12">
          <Link
            href={"/"}
            className="py-2 px-2 md:py-4 md:px-5 bg-gradient-secondary-light rounded flex items-center justify-center text-sm md:text-base whitespace-nowrap"
          >
            <span className="text-gradient-secondary">← BACK TO SHOPPING</span>
          </Link>
          <Link
            href={"/cart"}
            className="px-2 py-2 md:py-4 md:px-5 bg-gradient-primary-light text-sm md:text-base rounded flex items-center justify-center gap-[5px] whitespace-nowrap"
          >
            <span className="text-gradient-primary flex items-center gap-x-1">
              <GenerateGradientIcon
                size={20}
                stroke={1}
                IconComponent={IconShoppingCart}
              />
              GO TO CART →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
