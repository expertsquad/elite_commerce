"use client";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import React, { useContext, useState } from "react";
import ExtraDiscountBasedOnOrder from "./ExtraDiscountBasedOnOrder";
import ProductPriceBasedOnVariants from "./ProductPriceBasedOnVariants";
import ProdViewCartIncreamentDecreamentBtn from "./ProdViewCartIncreamentDecreamentBtn";
import ProductViewCartBtn from "./ProductViewCartBtn";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import { IconBolt } from "@tabler/icons-react";
import BuyNowSingleProduct from "./BuyNowSingleProduct";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";
import { CartContext } from "@/Provider/CartProvider";

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
  const [variant, setVariant] = useState<IProductVariant | null>(
    product?.variants[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const { cartProducts, setRefetch } = useContext(CartContext);

  const isCarted = cartProducts?.find(
    (item) =>
      item?._id === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <RatingWishlistStockAndSold
          averageRating={product?.averageRating ? product?.averageRating : 0}
          product={product}
          variant={variant ? variant : product?.variants[0]}
        />
      </div>
      {/* <== Bulk order based discount ==> */}
      {product?.bulk?.minOrder && product?.bulk?.minOrder > 0 ? (
        <ExtraDiscountBasedOnOrder
          product={product}
          quantity={quantity}
          variant={variant}
        />
      ) : null}
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
            btnContainerStyle="!rounded-md"
          />
          <div className=" w-full">
            <ProductViewCartBtn
              product={product}
              variant={variant ? variant : product?.variants[0]}
              quantity={quantity ? quantity : 1}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          {isQuickOrderActive && (
            <QuickOrderButton
              product={{
                ...product,
                orderQuantity: isCarted ? isCarted?.orderQuantity : quantity,
                variant: variant || product?.variants[0],
              }}
              variant={variant ? variant : product?.variants[0]}
              buttonStyle="text-white bg-gradient-secondary hover:bg-gradient-primary-reverse flex items-center justify-center gap-x-1.5 py-2.5 rounded-md w-full text-base"
              buttonIcon={
                <IconBolt size={20} className="fill-white" stroke={1} />
              }
              buttonText="QUICK ORDER"
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          )}
          <BuyNowSingleProduct
            accessToken={accessToken || ""}
            product={product}
            className={`bg-gradient-primary-reverse hover:bg-gradient-primary ${
              variant && variant?.inStock < 1 && " cursor-not-allowed"
            }`}
            selectedVariant={
              variant ? variant?.variantName : product?.variants[0]?.variantName
            }
            disabled={variant ? variant.inStock < 1 : false}
            selectedQuantity={isCarted ? isCarted?.orderQuantity : quantity}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPriceCalculationAndOrder;
