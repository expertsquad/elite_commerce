"use client";
import StarRating from "@/Components/StarRating";
import { server_url, storages } from "@/constants";
import { ICartProduct } from "@/interfaces/cart.interface";
import { CartContext } from "@/Provider/CartProvider";
import { updateCart } from "@/utils/updateCart.utils";
import {
  IconArrowLeft,
  IconArrowRight,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import IncreaseDecreaseCartItems from "../../brands/_components/IncreaseDecreaseCartItems";
import Modal from "@/Components/Modal";
import ProgressBar from "../SliderComponents/ProgressBar";
import OrderSummery from "./OrderSummery";
import { calculatePercentageToFreeShipping } from "@/utils/calculatePercentageToFreeShipping";
import { getShippingFee } from "@/utils/getShippingFee";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { Button } from "@/Components/Buttons";
import { productEmptyState } from "@/assets";

const ShoppingCartBtn = ({
  currencyIcon,
  shippingCharge,
  shippingAmount,
  isQuickOrderActive,
}: {
  currencyIcon?: string;
  shippingCharge: any;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
}) => {
  const [show, setShow] = React.useState(false);
  // cart contex
  const { cartProducts, calculateTotalPriceAndDiscountOfCart, setRefetch } =
    useContext(CartContext);

  console.log(cartProducts);

  const { totalPrice } = calculateTotalPriceAndDiscountOfCart(cartProducts);
  // getting progress bar value percentage as number like : 76
  const progressValue = calculatePercentageToFreeShipping(
    totalPrice,
    shippingCharge?.freeShippingMinOrderAmount
  );

  const { orderData } = useContext(OrderInitContext);

  // city if it's available in order data context otherwise from default address
  const city = orderData?.shippingAddress?.city
    ? orderData?.shippingAddress?.city
    : "";
  // culculating shipping fee

  const shippingFee = getShippingFee(shippingCharge, city, totalPrice);

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
            <hr className="border border-black-10 h-[1px] my-3" />
            {cartProducts?.length < 0 && (
              <div className="flex flex-col gap-2 mt-2">
                <div className="mt-5 ">
                  <ProgressBar progressValue={progressValue} />
                </div>
                <span className="text-sm flex items-center gap-x-1">
                  Buy
                  <span className="text-gradient-primary">
                    {currencyIcon}
                    {shippingCharge?.freeShippingMinOrderAmount}
                  </span>
                  more to get
                  <span className="text-gradient-primary font-semibold">
                    Freeship
                  </span>
                  🔥
                </span>
              </div>
            )}

            {cartProducts?.length > 0 && (
              <div className="flex flex-col gap-y-5 overflow-y-auto scrollbar-y-remove h-[calc(100vh-max(360px,45vh))] md:h-[calc(100vh-max(400px,40vh))] pb-10">
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
            )}

            {/* if dont have anything in cart it will not show */}
            {cartProducts.length ? (
              <div className="fixed bottom-0 right-1 md:w-[95%]  mx-auto bg-white w-full ">
                <OrderSummery
                  setshow={setShow}
                  products={cartProducts}
                  shippingFee={shippingFee}
                  shippingAmount={shippingAmount}
                  calculateTotalPriceAndDiscountOfCart={
                    calculateTotalPriceAndDiscountOfCart
                  }
                  currencyIcon={currencyIcon ? currencyIcon : ""}
                  isQuickOrderActive={isQuickOrderActive}
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
            ) : null}

            {!cartProducts.length ? (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-250px)]">
                <span className="text-black-50">Your cart is empty.</span>
                <Image src={productEmptyState} alt="Empty State" />
                <Link
                  href={"/"}
                  onClick={() => setShow(false)}
                  className="mt-5 flex items-center gap-x-1"
                >
                  <IconArrowLeft stroke={2} size={18} />
                  BACK TO SHOPPING
                </Link>
              </div>
            ) : null}
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
            <span className="text-black-80 font-medium text-base">
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
