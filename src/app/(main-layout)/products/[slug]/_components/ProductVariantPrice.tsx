import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import { calculateDiscountAndBulkOrderPrice } from "@/utils/calculateDiscountAndBulkOrderPrice";
import React, { useContext } from "react";

interface IProductVariantPriceProps {
  product: IProduct;
  variant: IProductVariant | any;
  currencyIcon: string;
  quantity?: number;
}

const ProductVariantPrice = ({
  product,
  variant,
  currencyIcon,
  quantity,
}: IProductVariantPriceProps) => {
  const { cartProducts, setRefetch } = useContext(CartContext);

  const isCarted = cartProducts?.find(
    (item) =>
      item?._id === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );

  const isCartedQuantity = isCarted?.orderQuantity || 0;
  const passedQuantity = quantity || 1;

  const { sellingPrice, discountPercentage, discountedPrice } =
    calculateDiscountAndBulkOrderPrice(
      product,
      variant ? variant : product?.variants[0],
      isCarted ? isCartedQuantity : passedQuantity
    );

  return (
    <div className="flex items-center gap-x-2">
      <span className="[font-size:_clamp(23px,3vw,30px)] font-bold text-gradient-primary">
        {currencyIcon}
        {discountedPrice
          ? discountedPrice
          : product?.variants[0]?.discountedPrice}
      </span>
      <span className="text-black-10">|</span>
      <del className="[font-size:_clamp(20px,3vw,25px)] text-black-50">
        {currencyIcon}
        {sellingPrice ? sellingPrice : product?.variants[0]?.sellingPrice}
      </del>
      {discountPercentage && <span className="text-black-10">|</span>}
      {discountPercentage > 0 && (
        <div
          title={`You will get extra ${
            discountPercentage
              ? discountPercentage
              : product?.variants[0]?.discountPercentage
          } more!!`}
          className="bg-gradient-secondary-light rounded-md p-0.5"
        >
          <span className="text-sm text-gradient-secondary px-2">
            {discountPercentage
              ? discountPercentage
              : product?.variants[0]?.discountPercentage}
            % OFF
          </span>
        </div>
      )}
    </div>
  );
};
export default ProductVariantPrice;
