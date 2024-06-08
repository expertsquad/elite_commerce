import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import StarRating from "../StarRating";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border border-black-10 rounded-lg group min-w-[280px] max-w-[280px] w-[calc(280px,2vw,185px)] relative  cursor-pointer duration-500 overflow-hidden">
      <div className="bg-gradient-primary-light">
        <ProductImageSlider
          // loading={loading}
          product={product}
          // defaultVariant={defaultVariant}
        />
      </div>

      <div className="p-4">
        <span className="[font-size:_clamp(0.7em,4vw,1em)] line-clamp-1 ">
          {product?.productName}
        </span>
        <div className="flex items-center my-2.5">
          <span className="text-positive [font-size:_clamp(0.5em,4vw,0.8em)] ">
            {product?.brand?.brandName}
          </span>
          <span className="text-black-10 mx-0.5">|</span>
          <span>
            <StarRating rating={Math.round(product?.averageRating || 0)} />
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center whitespace-nowrap">
            <span className="[font-size:_clamp(0.6em,4vw,1.1em)] text-gradient-primary font-bold">
              ${50}
            </span>
            <span className="mx-0.5 text-black-10">|</span>
            <del className="text-base text-black-50 [font-size:_clamp(0.5em,4vw,0.8em)] ">
              ${70}
            </del>
          </div>
          <button className="bg-gradient-primary text-white rounded-full p-1.5 md:p-2.5 ">
            <IconShoppingCart stroke={2} height={20} width={20} />
          </button>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 hidden md:group-hover:flex gap-x-4 items-center">
        <Link
          href={`products/${product?._id}`}
          className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full"
        >
          Quick View
        </Link>
        <button className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full">
          Quick Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
