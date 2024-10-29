"use client";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import React, { useState } from "react";
import ExtraDiscountBasedOnOrder from "./ExtraDiscountBasedOnOrder";
import ProductPriceBasedOnVariants from "./ProductPriceBasedOnVariants";
import ProdViewCartIncreamentDecreamentBtn from "./ProdViewCartIncreamentDecreamentBtn";
import ProductViewCartBtn from "./ProductViewCartBtn";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import { IconBolt } from "@tabler/icons-react";
import BuyNowSingleProduct from "./BuyNowSingleProduct";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";

const ProductPriceCalculationAndOrder = ({
  product,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
  accessToken,
}: {
  product: IProduct;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  accessToken: string;
}) => {
  const [variant, setVariant] = useState<IProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <RatingWishlistStockAndSold
          averageRating={product?.averageRating ? product?.averageRating : 0}
          instock={product?.variants[0].inStock}
          soldQuantity={
            product?.variants[0]?.soldQuantity
              ? product?.variants[0]?.soldQuantity
              : 0
          }
          product={product}
          variant={variant ? variant : product?.variants[0]}
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
          variant={variant}
          onVariantSelect={setVariant}
          quantity={quantity}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-3">
          <ProdViewCartIncreamentDecreamentBtn
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            variant={variant ? variant : product?.variants[0]}
          />
          <div className=" w-full">
            <ProductViewCartBtn
              product={product}
              variant={variant ? variant : product?.variants[0]}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          {isQuickOrderActive && (
            <QuickOrderButton
              product={{
                ...product,
                orderQuantity: quantity,
                variant: variant || product?.variants[0],
              }}
              buttonStyle="text-white bg-gradient-primary hover:bg-gradient-primary-reverse flex items-center justify-center gap-x-1.5 py-2.5 rounded-md w-full text-base"
              buttonIcon={<IconBolt size={20} fill="#fff" stroke={1} />}
              buttonText="QUICK ORDER"
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          )}
          <BuyNowSingleProduct
            accessToken={accessToken || ""}
            product={product}
            className="bg-gradient-primary-reverse hover:bg-gradient-primary"
            selectedVariant={
              variant ? variant?.variantName : product?.variants[0]?.variantName
            }
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPriceCalculationAndOrder;
