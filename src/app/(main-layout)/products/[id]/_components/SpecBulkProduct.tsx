"use client";
import { IProduct } from "@/interfaces/product.interface";
import React, { useContext } from "react";
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
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";

const SpecBulkProduct = ({ productdata }: { productdata: IProduct }) => {
  const [variant, setVariant] = React.useState<IProduct["variants"][0]>(
    productdata?.variants[0]
  );
  const { setRefetch } = useContext(CartContext);
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: productdata, variant: variant });
    setRefetch && setRefetch((prev) => prev + 1);
  };
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
            <ProductVariantColor
              onSelectVariant={setVariant}
              variants={productdata?.variants}
            />
          </div>
        </div>
      </div>
      {/* == Price == */}
      <div className="flex items-center gap-x-2 mb-10">
        <span className="text-2xl font-bold text-gradient-primary">
          ${variant?.discountedPrice}
        </span>
        <span className="text-black-50">|</span>
        <del className="text-base text-black-50">${variant?.sellingPrice}</del>
        <span className="text-black-50">|</span>
        <div className="bg-gradient-secondary-light rounded-full py-0.5">
          <span className="text-sm text-gradient-secondary px-3 font-semibold">
            ${variant.discountPercentage}% OFF
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
              variant: variant,
            }}
            buttonStyle="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2 rounded-md w-full text-[13px]"
            buttonIcon={<IconBolt size={16} fill="#fff" />}
            buttonText="QUICK ORDER"
          />
        </div>
        <div className="border border-black-10 rounded-md mt-5">
          <button
            onClick={handleAddToCart}
            className="text-gradient-primary flex items-center justify-center gap-x-1.5 w-full py-2"
          >
            <GenerateGradientIcon
              IconComponent={IconShoppingCart}
              stroke={1.5}
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
