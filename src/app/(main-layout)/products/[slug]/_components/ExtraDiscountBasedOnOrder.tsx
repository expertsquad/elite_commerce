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
  const productQuantity = isCarted ? productOrderQuantity : quantity;

  // Calculate percentage based on productOrderQuantity if isCarted, else quantity
  const percentage = Math.min((productQuantity / bulkItems) * 100, 100).toFixed(
    0
  );

  return (
    <div className="">
      <ProgressBar progressValue={Number(percentage)} />
      <div className="mt-1.5">
        {product?.bulk &&
        (product?.bulk?.minOrder > 1 ||
          (product.bulk && typeof product.bulk !== "boolean")) ? (
          <div className="whitespace-nowrap text-black-80">
            {productQuantity >= bulkItems ? (
              <div>
                <span className="text-positive font-medium">
                  Congratulations
                </span>
                , You got a{" "}
                <span className="text-gradient-primary font-medium">
                  {product?.bulk?.discount}% extra{" "}
                </span>
                discount, Thank you.
              </div>
            ) : (
              <p>
                Buy
                <span className="font-semibold text-gradient-primary mx-1.5">
                  {product?.bulk?.minOrder - productQuantity}
                </span>
                item to get more
                <span className="font-semibold text-gradient-primary ml-1.5">
                  {product?.bulk?.discount} extra!
                </span>
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExtraDiscountBasedOnOrder;
