import SocialMediaAndOthers from "./SocialMediaAndOthers";
import { IProduct } from "@/interfaces/product.interface";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";
import { ISocialMedia } from "@/interfaces/footer.interface";
import ProductPriceCalculationAndOrder from "./ProductPriceCalculationAndOrder";

const ProductViewDescAndOthers = ({
  product,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  socialMedia,
  accessToken,
}: {
  product: IProduct;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  socialMedia: ISocialMedia[];
  accessToken: string;
}) => {
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
      <ProductPriceCalculationAndOrder
        product={product}
        accessToken={accessToken}
        currencyIcon={currencyIcon}
        shippingAmount={shippingAmount}
        isQuickOrderActive={isQuickOrderActive}
      />
    </div>
  );
};

export default ProductViewDescAndOthers;
