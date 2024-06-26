import SocialMediaAndOthers from "./SocialMediaAndOthers";
import ProductVariantColor from "./ProductVariantColor";
import { IProduct } from "@/interfaces/product.interface";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";
import {
  IconBolt,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import ProductVariantPrice from "./ProductVariantPrice";
import { Button } from "@/Components/Buttons";
import ProgressBar from "@/app/(main-layout)/_components/SliderComponents/ProgressBar";
import BuyNowSingleProduct from "./BuyNowSingleProduct";
import QuickOrderButton from "@/app/(main-layout)/brands/_components/QuickOrderButton";

const ProductViewDescAndOthers = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div className="hidden md:block">
        <SocialMediaAndOthers />
      </div>
      <span className="font-semibold text-lg md:text-2xl line-clamp-2 my-5">
        {product?.productName}
      </span>
      <CategoryAndBrandSmallComponent
        categoryName={product?.category?.categoryName}
        brandPhoto={product?.brand?.brandPhoto}
      />
      <div className="my-5">
        <RatingWishlistStockAndSold
          averageRating={product?.averageRating}
          instock={product?.variants[0].inStock}
          soldQuantity={product?.variants[0].soldQuantity}
        />
      </div>
      <div className="my-5">
        <ProgressBar progressValue={50} />
        <div>
          {product?.bulk &&
            (product?.bulk?.minOrder > 1 ||
              (product.bulk && typeof product.bulk !== "boolean")) && (
              <div className="whitespace-nowrap text-black-opacity-60">
                <p>
                  Buy{" "}
                  <span className="font-semibold main-text-color">
                    {product?.bulk?.minOrder}
                  </span>{" "}
                  item to get more{" "}
                  <span className="font-semibold text-black">
                    {product?.bulk?.discount} extra!
                  </span>
                </p>
              </div>
            )}
        </div>
      </div>
      <ProductVariantPrice product={product} />
      <div className="flex items-center gap-x-5 my-5">
        <div>
          <span className="text-sm text-black-80">Color</span>
          <div className="flex items-center gap-x-2 mt-1">
            <ProductVariantColor variants={product?.variants} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3 mb-5">
          <div className="flex items-center justify-center gap-x-2 py-2 px-3 border border-black-10 rounded-full">
            <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
              <IconMinus width={20} height={18} />
            </button>
            <span className="text-black-50">{0}</span>
            <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
              <IconPlus width={20} height={18} />
            </button>
          </div>
          <div className="border-gradient-primary p-[1px] rounded-md w-full">
            <button className="text-gradient-primary flex items-center justify-center gap-x-1.5 w-full py-2">
              <GenerateGradientIcon
                IconComponent={IconShoppingCart}
                stroke={2}
                size={20}
              />
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          <BuyNowSingleProduct product={product} />
          <QuickOrderButton
            product={{
              ...product,
              orderQuantity: 1,
              variant: product?.variants[0],
            }}
            buttonStyle="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2 rounded-md w-full text-base"
            buttonIcon={<IconBolt size={20} fill="#fff" />}
            buttonText="QUICK ORDER"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductViewDescAndOthers;
