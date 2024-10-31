"use client";
import ProgressBar from "@/app/(main-layout)/_components/SliderComponents/ProgressBar";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { CartContext } from "@/Provider/CartProvider";
import React, { useContext } from "react";

const ExtraDiscountBasedOnOrder = ({
  product,
  quantity,
  variant,
}: {
  product: IProduct;
  quantity: number;
  variant?: IProductVariant | null;
}) => {
  const { cartProducts, setRefetch } = useContext(CartContext);

  const isCarted = cartProducts.find(
    (item) =>
      item?._id === product?._id &&
      item?.variant?.variantName === variant?.variantName
  );
  const productOrderQuantity = isCarted?.orderQuantity || 0;

  const bulkItems = product?.bulk?.minOrder || 0;

  // Calculate percentage based on productOrderQuantity if isCarted, else quantity
  const percentage = Math.min(
    ((isCarted ? productOrderQuantity : quantity) / bulkItems) * 100,
    100
  ).toFixed(0);

  return (
    <div className="">
      <ProgressBar progressValue={Number(percentage)} />
      <div className="mt-1.5">
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
    </div>
  );
};

export default ExtraDiscountBasedOnOrder;
