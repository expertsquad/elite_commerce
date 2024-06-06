import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import StarRating from "./StarRating";
import { IconShoppingCart } from "@tabler/icons-react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border hover:border-fuchsia-700 rounded-custom-10px group w-[calc(300px,2vw,185px)]  md:min-h-[400px] min-h-[300px] cursor-pointer duration-500  ">
      <div className="bg-gradient-primary-light p-4">
        <ProductImageSlider
          // loading={loading}
          product={product}
          // defaultVariant={defaultVariant}
        />
      </div>

      <div className="pt-4 border-t p-4">
        <div className="flex flex-col gap-[5px]">
          <span className="[font-size:_clamp(0.7em,4vw,1em)] line-clamp-1 ">
            {product?.productName}
          </span>
          <div className="flex items-center">
            <span className="text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] ">
              {product?.brand?.brandName}
            </span>
            <span>|</span>
            <span>
              <StarRating rating={Math.round(5)} />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center whitespace-nowrap">
            <span className="[font-size:_clamp(0.6em,4vw,1.1em)] main-text-color font-bold">
              ${50}
            </span>
            <span>|</span>
            <del className="text-md text text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] ">
              {0}
            </del>
          </div>
          <button className="bg-gradient-primary text-white rounded-full p-1.5 md:p-2.5 ">
            <IconShoppingCart stroke={2} height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
