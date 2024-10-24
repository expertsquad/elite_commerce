import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import StarRating from "../StarRating";
import QuickViewButton from "@/app/(main-layout)/brands/_components/QuickViewButton";
import QuickOrderButton from "@/app/(main-layout)/brands/_components/QuickOrderButton";
import ProductCartBtn from "./ProductCartBtn";
import ProductPreviewRedirect from "./ProductPreviewRedirect";
export interface IProductCardProps {
  product: IProduct;
  onClick?: () => void;
  currencyIcon?: string;
}
const ProductCard = ({ product, onClick, currencyIcon }: IProductCardProps) => {
  return (
    <ProductPreviewRedirect
      className="border border-black-10 rounded-lg group relative w-full max-w-[280px] cursor-pointer duration-500 overflow-hidden group/productcard hover:shadow-lg mx-auto"
      product={product}
      onClick={onClick}
    >
      <div className="bg-gradient-primary-light">
        <ProductImageSlider product={product} />
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

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center whitespace-nowrap">
            <span className="[font-size:_clamp(16px,2vw,22px)] text-gradient-primary font-bold">
              {currencyIcon}
              {product?.variants[0]?.discountedPrice
                ? product?.variants[0]?.discountedPrice
                : product?.variants[0]?.sellingPrice}
            </span>
            <span className="mx-0.5 text-black-10">|</span>
            <del
              className={`text-black-50 [font-size:_clamp(14px,2vw,18px)] ${
                product?.variants[0]?.discountedPrice ? "block" : "hidden"
              }`}
            >
              {currencyIcon}
              {product?.variants[0]?.discountedPrice &&
                product?.variants[0]?.sellingPrice}
            </del>
          </div>
          <ProductCartBtn product={product} />
        </div>
      </div>
      <div className="absolute flex gap-3 items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all duration-300">
        <QuickViewButton product={product} />
        <QuickOrderButton
          product={{
            ...product,
            orderQuantity: 1,
            variant: product?.variants[0],
          }}
          buttonStyle="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full text-sm hover:font-bold transition-all duration-300"
          buttonText="Quick Order"
        />
      </div>
    </ProductPreviewRedirect>
  );
};

export default ProductCard;
