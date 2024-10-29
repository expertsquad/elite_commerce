import SocialMediaAndOthers from "./SocialMediaAndOthers";
import { IProduct } from "@/interfaces/product.interface";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";
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
