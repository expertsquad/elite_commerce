"use client";
import { IProduct } from "@/interfaces/product.interface";
import React, { useContext } from "react";
import ProductVariantColor from "./ProductVariantColor";
import Image from "next/image";
import { server_url } from "@/constants";
import { IconBolt, IconShoppingCart } from "@tabler/icons-react";
import QuickOrderButton from "@/app/(main-layout)/_components/QuickOrder/QuickOrderButton";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import BuyNowSingleProduct from "./BuyNowSingleProduct";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";

const SpecBulkProduct = ({
  productdata,
  currencyIcon,
  accessToken,
  shippingAmount,
  isQuickOrderActive,
}: {
  productdata: IProduct;
  currencyIcon?: string;
  accessToken?: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
}) => {
  const [variant, setVariant] = React.useState<IProduct["variants"][0]>(
    productdata?.variants[0]
  );
  const { cartProducts, setRefetch } = useContext(CartContext);
  const handleAddToCart = () => {
    updateCart({ actionType: "add", product: productdata, variant: variant });
    setRefetch && setRefetch((prev) => prev + 1);
  };

  const isCarted = cartProducts?.find(
    (item) =>
      item?._id === productdata?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  return (
    <div className="max-w-[370px] min-w-80 p-5 shadow-lg rounded-md hidden md:block sticky top-20">
      <div className="flex items-center gap-x-4 mb-3">
        {productdata?.productPhotos?.slice(0, 4)?.map((photo, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[60px] h-[70px] bg-[#F8F8F8] rounded-md border border-black-10"
          >
            <Image
              src={`${server_url + photo}`}
              alt="product image"
              fill
              className="inset-0 object-contain py-3 px-2"
            />
          </div>
        ))}
      </div>
      <span className="text-black-80">{productdata?.productName}</span>

      <CategoryAndBrandSmallComponent
        brandPhoto={productdata?.brand?.brandPhoto}
        categoryName={productdata?.category?.categoryName}
      />
      <span className="bg-black-10 h-0.5 w-full hidden md:flex my-4"></span>
      {/* == Product variants color and storage == */}
      <div className="flex items-center justify-between gap-x-5 mb-5">
        <div>
          <span className="text-sm text-black-80">Color</span>
          <div className="flex items-center gap-x-2">
            <ProductVariantColor
              onSelectVariant={setVariant}
              variants={productdata?.variants}
            />
          </div>
        </div>
      </div>
      {/* == Price == */}
      <div className="flex items-center gap-x-2 mb-10">
        <span className="text-2xl font-bold text-gradient-primary">
          {currencyIcon}
          {variant?.discountedPrice
            ? variant?.discountedPrice
            : variant?.sellingPrice}
        </span>
        {variant?.sellingPrice && variant?.discountedPrice && (
          <>
            <span className="text-black-50">|</span>
            <del className="text-base text-black-50">
              {currencyIcon}
              {variant?.sellingPrice}
            </del>
          </>
        )}
        {variant?.discountPercentage && (
          <span className="text-black-50">|</span>
        )}
        {variant?.discountPercentage && (
          <div className="bg-gradient-secondary-light rounded-md">
            <span className="text-xs text-gradient-secondary px-2 ">
              {variant?.discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>
      {/* == Buy now, quick order and add to cart == */}
      <div>
        <div className="flex items-center justify-between gap-x-2.5">
          {isQuickOrderActive && (
            <QuickOrderButton
              product={{
                ...productdata,
                orderQuantity: 1,
                variant: variant,
              }}
              buttonStyle="text-white bg-gradient-primary hover:bg-gradient-primary-reverse flex items-center justify-center gap-x-1.5 py-2.5 rounded-md w-full text-[13px]"
              buttonIcon={<IconBolt size={16} fill="#fff" />}
              buttonText="QUICK ORDER"
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
            />
          )}
          <div className="bg-gradient-primary-light rounded-md w-full">
            <BuyNowSingleProduct
              product={productdata}
              selectedVariant={variant?.variantName}
              accessToken={accessToken ? accessToken : ""}
              className="!py-2.5 !text-[13px] hover:bg-gradient-primary-reverse"
              iconStyle="!size-4"
            />
          </div>
        </div>
        <div className="border border-black-10 rounded-md mt-5">
          <button
            onClick={handleAddToCart}
            className="text-black flex items-center justify-center gap-x-1.5 w-full py-2 text-[13px] hover:bg-gradient-primary rounded-md hover:text-white"
          >
            {isCarted ? (
              <>
                <IconShoppingCart size={15} stroke={1.7} />
                ALREADY CARTED
              </>
            ) : (
              <>
                <IconShoppingCart size={15} stroke={1.7} />
                ADD TO CART
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecBulkProduct;
