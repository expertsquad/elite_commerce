"use client";
import StarRating from "@/Components/StarRating";
import { server_url, storages } from "@/constants";
import { ICartProduct } from "@/interfaces/cart.interface";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import { IconArrowRight, IconShoppingCart, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import IncreaseDecreaseCartItems from "../../brands/_components/IncreaseDecreaseCartItems";
import Modal from "@/Components/Modal";
import ProgressBar from "../SliderComponents/ProgressBar";
import OrderSummery from "./OrderSummery";

const ShoppingCartBtn = ({
  currencyIcon,
  shippingCharge,
}: {
  currencyIcon?: string;
  shippingCharge: number;
}) => {
  const {
    cartProducts,
    shippingFee,
    calculateTotalPriceAndDiscountOfCart,
    setRefetch,
  } = useContext(CartContext);
  const [show, setShow] = React.useState(false);

  const productOrderQuantity = cartProducts.reduce(
    (acc, product) => acc + product.orderQuantity,
    0
  );

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(cartProducts);

  const bulkItems = cartProducts.filter((product) => product.bulk);

  // If you want to calculate the total bulk order quantity
  const totalBulkOrderQuantity = bulkItems.reduce((acc, product) => {
    const bulkOrderQuantity =
      product?.orderQuantity >= product?.bulk?.minOrder!
        ? product?.orderQuantity
        : 0;
    return acc + bulkOrderQuantity;
  }, 0);
  const percentage = Math.min(
    (productOrderQuantity / totalBulkOrderQuantity) * 100,
    100
  ).toFixed(0);

  return (
    <Fragment>
      <button onClick={() => setShow(!show)} className="relative">
        <span className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
          {cartProducts?.length || 0}
        </span>
        <IconShoppingCart
          stroke={1.2}
          className="text-black-80"
          width={24}
          height={24}
        />
      </button>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          className="w-[600px] overflow-y-auto  scrollbar-y-remove"
          alignment="right"
          showCancelBtnINSmallDevice={show}
        >
          <div className="p-2">
            <span className="font-semibold [font-size:clamp(14px,5vw,18px)]">
              Shopping Cart
            </span>
            <div className="flex flex-col gap-2 mt-2">
              <div className="mt-5 overflow-hidden">
                <ProgressBar progressValue={Number(20)} />
              </div>
              <span className="text-base flex items-center gap-x-1">
                Buy
                <span className="text-gradient-primary">
                  {currencyIcon}
                  {shippingCharge}
                </span>
                more to get
                <span className="text-gradient-primary font-semibold">
                  Freeship
                </span>
                🔥
              </span>
            </div>
            <hr className="border border-black-10 h-[1px] my-3" />

            <div className="flex flex-col gap-y-5 overflow-y-auto scrollbar-y-remove h-[calc(100vh-max(360px,45vh))] md:h-[calc(100vh-max(400px,50vh))] pb-10">
              {cartProducts?.map((product: ICartProduct) => {
                return (
                  <QuickOrderItem
                    key={product?._id}
                    product={product}
                    setRefetch={setRefetch}
                    currencyIcon={currencyIcon}
                  />
                );
              })}
            </div>
            <div className="fixed bottom-0 right-1 md:w-[95%]  mx-auto bg-white w-full px-2">
              <OrderSummery
                setshow={setShow}
                products={cartProducts}
                shippingFee={shippingFee}
                calculateTotalPriceAndDiscountOfCart={
                  calculateTotalPriceAndDiscountOfCart
                }
                currencyIcon={currencyIcon}
              />
              <div className="my-5 flex items-center justify-center">
                {" "}
                <Link
                  onClick={() => setShow(!show)}
                  href={"/cart"}
                  className={`text-positive text-sm uppercase select-none flex items-center gap-x-1 ${
                    cartProducts?.length === 0
                      ? "pointer-events-none cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  View Cart <IconArrowRight stroke={2} size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default ShoppingCartBtn;

export const QuickOrderItem = ({
  product,
  setRefetch,
  currencyIcon,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  currencyIcon?: string;
}) => {
  const handleRemoveItem = () => {
    updateCart({ actionType: "remove", product });
    setRefetch((prev) => prev + 1);
  };

  const totalPrice =
    (product?.variant?.discountedPrice
      ? product?.variant?.discountedPrice
      : product?.variant?.sellingPrice) * product?.orderQuantity;

  return (
    <div className="flex justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
            <div className="relative md:w-[70px] md:h-[70px] w-[50px] h-[60px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                style={{
                  objectFit: "contain",
                }}
                className="inset-0 top-0 left-0 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:gap-y-2">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              {product?.productName}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brandName}
              </span>
              <span className="text-black-10">|</span>
              <StarRating rating={product?.averageRating || 0} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 font-medium text-xs md:text-sm">
              {currencyIcon}
              {product?.variant?.discountedPrice}
            </span>
            <span className="text-xs">
              <IconX stroke={1} size={16} />
            </span>
            <IncreaseDecreaseCartItems
              product={product}
              setRefetch={setRefetch}
              className="!px-2 !py-0.5"
              btnStyle="!size-4 !flex !items-center !justify-center !rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={handleRemoveItem}>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          {currencyIcon}
          {totalPrice}
        </strong>
      </div>
    </div>
  );
};
