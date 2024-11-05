import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import StarRating from "../StarRating";
import QuickViewButton from "@/app/(main-layout)/brands/_components/QuickViewButton";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import ProductCartBtn from "./ProductCartBtn";
import ProductPreviewRedirect from "./ProductPreviewRedirect";
import { getPricingDetails } from "./getPricingDetails";
export interface IProductCardProps {
  product: IProduct;
  onClick?: () => void;
  currencyIcon?: string;
  quickAction?: boolean;
  shippingAmount?: number;
  isQuickOrderActive?: boolean;
}
const ProductCard = ({
  product,
  onClick,
  currencyIcon,
  quickAction,
  shippingAmount,
  isQuickOrderActive,
}: IProductCardProps) => {
  const productDetails = getPricingDetails(product);
  const { sellingPrice, discountedPrice } = productDetails;

  return (
    <ProductPreviewRedirect
      onClick={onClick}
      product={product}
      className="border border-black-10 rounded-lg group relative w-full max-w-[280px] cursor-pointer duration-500 overflow-hidden group/productcard hover:shadow-lg mx-auto"
    >
      <div className="bg-image-background">
        <ProductImageSlider
          product={product}
          shippingAmount={shippingAmount ? shippingAmount : 0}
          currencyIcon={currencyIcon}
          isQuickOrderActive={isQuickOrderActive}
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

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center whitespace-nowrap">
            <span className="[font-size:_clamp(16px,2vw,22px)] text-gradient-primary font-bold">
              {currencyIcon}
              {discountedPrice ? discountedPrice : sellingPrice}
            </span>
            {sellingPrice && discountedPrice ? (
              <span className={`mx-0.5 text-black-10 text-xl`}>|</span>
            ) : null}
            <del
              className={`text-black-50 [font-size:_clamp(14px,2vw,18px)] ${
                product?.variants[0]?.discountedPrice ? "block" : "hidden"
              }`}
            >
              {currencyIcon}
              {sellingPrice && sellingPrice}
            </del>
          </div>
          <ProductCartBtn product={product} />
        </div>
      </div>
      <div
        className={`absolute ${
          quickAction
            ? "flex flex-col top-[40%] left-[50%]"
            : "flex flex-row top-[50%] left-[50%]"
        } gap-3 items-center  transform -translate-x-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all duration-300`}
      >
        <QuickViewButton
          product={product}
          btnClassName="text-sm transition-all duration-300 hover:bg-gradient-primary hover:text-white hover:w-full !px-4 py-2"
          currencyIcon={currencyIcon ? currencyIcon : ""}
          shippingAmount={shippingAmount ? shippingAmount : 0}
          isQuickOrderActive={isQuickOrderActive}
        />
        {isQuickOrderActive && (
          <QuickOrderButton
            product={{
              ...product,
              orderQuantity: 1,
              variant: product?.variants[0],
            }}
            buttonStyle="text-base bg-white hover:bg-gradient-primary hover:text-white py-2 whitespace-nowrap px-4 rounded-full text-sm transition-all duration-300"
            buttonText="Quick Order"
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount ? shippingAmount : 0}
            variant={product?.variants[0]}
          />
        )}
      </div>
    </ProductPreviewRedirect>
  );
};

export default ProductCard;
