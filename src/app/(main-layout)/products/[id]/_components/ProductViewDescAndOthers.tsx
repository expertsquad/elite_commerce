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
import ProductCartBtn from "@/Components/ProductCard/ProductCartBtn";
import ProductViewCartBtn from "./ProductViewCartBtn";
import ProdViewCartIncreamentDecreamentBtn from "./ProdViewCartIncreamentDecreamentBtn";
import ProductPriceBasedOnVariants from "./ProductPriceBasedOnVariants";
import { cookies } from "next/headers";
import ExtraDiscountBasedOnOrder from "./ExtraDiscountBasedOnOrder";

const ProductViewDescAndOthers = ({
  product,
  currencyIcon,
}: {
  product: IProduct;
  currencyIcon: string;
}) => {
  const accessToken = cookies().get("accessToken")?.value;

  return (
    <div>
      <div className="hidden md:block">
        <SocialMediaAndOthers />
      </div>
      <span className="font-semibold text-lg md:text-2xl line-clamp-2 my-6">
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
          products={product}
        />
      </div>
      {/* <div className="my-5">
        <ProgressBar progressValue={100} />
        <div>
          {product?.bulk &&
            (product?.bulk?.minOrder > 1 ||
              (product.bulk && typeof product.bulk !== "boolean")) && (
              <div className="whitespace-nowrap text-black-80">
                <p>
                  Buy
                  <span className="font-semibold text-gradient-primary mx-1.5">
                    {product?.bulk?.minOrder}
                  </span>
                  item to get more
                  <span className="font-semibold text-gradient-primary ml-1.5">
                    {product?.bulk?.discount} extra!
                  </span>
                </p>
              </div>
            )}
        </div>
      </div> */}
      <ExtraDiscountBasedOnOrder product={product} />
      <div>
        <ProductPriceBasedOnVariants
          currencyIcon={currencyIcon}
          product={product}
        />
      </div>
      <div>
        <div className="flex items-center gap-x-3 mb-5">
          <ProdViewCartIncreamentDecreamentBtn product={product} />
          <div className=" w-full">
            <ProductViewCartBtn product={product} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          <BuyNowSingleProduct
            accessToken={accessToken || ""}
            product={product}
          />
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
