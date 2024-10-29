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
import { ISocialMedia } from "@/interfaces/footer.interface";

const ProductViewDescAndOthers = ({
  product,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  socialMedia,
}: {
  product: IProduct;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  socialMedia: ISocialMedia[];
}) => {
  const accessToken = cookies().get("accessToken")?.value;

  return (
    <div className="flex flex-col gap-y-5">
      <div className="hidden md:block">
        <SocialMediaAndOthers socialMedia={socialMedia} />
      </div>
      <span className="font-semibold text-lg md:text-[22px] line-clamp-2">
        {product?.productName}
      </span>
      <div>
        <CategoryAndBrandSmallComponent
          categoryName={product?.category?.categoryName}
          brandPhoto={product?.brand?.brandPhoto}
        />
      </div>
      <div>
        <RatingWishlistStockAndSold
          averageRating={product?.averageRating ? product?.averageRating : 0}
          instock={product?.variants[0].inStock}
          soldQuantity={
            product?.variants[0]?.soldQuantity
              ? product?.variants[0]?.soldQuantity
              : 0
          }
          products={[product]}
        />
      </div>
      {/* <== Bulk order based discount ==> */}
      {product?.bulk?.minOrder && product?.bulk?.minOrder > 0 && (
        <ExtraDiscountBasedOnOrder product={product} />
      )}
      <div>
        <ProductPriceBasedOnVariants
          currencyIcon={currencyIcon}
          product={product}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-3">
          <ProdViewCartIncreamentDecreamentBtn product={product} />
          <div className=" w-full">
            <ProductViewCartBtn product={product} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          {isQuickOrderActive && (
            <QuickOrderButton
              product={{
                ...product,
                orderQuantity: 1,
                variant: product?.variants[0],
              }}
              buttonStyle="text-white bg-gradient-primary hover:bg-gradient-primary-reverse flex items-center justify-center gap-x-1.5 py-2.5 rounded-md w-full text-base"
              buttonIcon={<IconBolt size={20} fill="#fff" stroke={1} />}
              buttonText="QUICK ORDER"
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          )}
          <BuyNowSingleProduct
            accessToken={accessToken ? accessToken : ""}
            product={product}
            className="bg-gradient-primary-reverse hover:bg-gradient-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductViewDescAndOthers;
