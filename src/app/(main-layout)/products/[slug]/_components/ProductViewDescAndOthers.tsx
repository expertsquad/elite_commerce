import SocialMediaAndOthers from "./SocialMediaAndOthers";
import { IProduct } from "@/interfaces/product.interface";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";
import { IconBolt } from "@tabler/icons-react";
import BuyNowSingleProduct from "./BuyNowSingleProduct";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import ProductViewCartBtn from "./ProductViewCartBtn";
import ProdViewCartIncreamentDecreamentBtn from "./ProdViewCartIncreamentDecreamentBtn";
import ProductPriceBasedOnVariants from "./ProductPriceBasedOnVariants";
import { cookies } from "next/headers";
import ExtraDiscountBasedOnOrder from "./ExtraDiscountBasedOnOrder";

const ProductViewDescAndOthers = ({
  product,
  currencyIcon,
  shippingAmount,
}: {
  product: IProduct;
  currencyIcon: string;
  shippingAmount: number;
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
          <QuickOrderButton
            product={{
              ...product,
              orderQuantity: 1,
              variant: product?.variants[0],
            }}
            buttonStyle="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2.5 rounded-md w-full text-base"
            buttonIcon={<IconBolt size={20} fill="#fff" stroke={1} />}
            buttonText="QUICK ORDER"
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount}
          />
          <BuyNowSingleProduct
            accessToken={accessToken ? accessToken : ""}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductViewDescAndOthers;
