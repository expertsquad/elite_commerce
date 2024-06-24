"use client";
import Modal from "@/Components/Modal";
import StarRating from "@/Components/StarRating";
import { server_url, storages } from "@/constants";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import Image from "next/image";
import React from "react";
import IncreaseDecrease from "../brands/_components/IncreaseDecrease";
import { IconBolt, IconShoppingCart, IconX } from "@tabler/icons-react";
import { calculateTotalPriceAndDiscount } from "../cart/_components/CartItems";
import ButtonPrimaryLight from "../brands/_components/ButtonPrimaryLight";
import ButtonPrimary from "../brands/_components/ButtonPrimary";
import Link from "next/link";
import ProgressBar from "../_components/SliderComponents/RangeSlider";

const QuickOrderItem = ({
  product,
  setRefetch,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light  p-1.5 rounded-[10px]">
            <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:gap-4">
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
            <span className="text-black-80 text-xs">
              {product?.variant?.sellingPrice}
            </span>
            <span className="text-xs">X</span>
            <IncreaseDecrease product={product} setRefetch={setRefetch} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          $1500.66
        </strong>
      </div>
    </div>
  );
};

const OrderSummery = ({ products }: { products: ICartProduct[] }) => {
  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscount(products);
  const shippingFee = 100;
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;

  return (
    <div className="md:border border-black-10 rounded-[10px] md:px-5 py-[clamp(2px,1.5vh,20px)] space-y-[clamp(2px,.5vh,20px)] bg-white">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>{totalPrice}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>{shippingFee}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -$<span>{totalDiscount}</span>
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          $<span>{totalPayable}</span>
        </strong>
      </div>
      <div className="flex items-center justify-center gap-5 md:px-5">
        <ButtonPrimaryLight className="!uppercase !text-black-80 !whitespace-nowrap py-[clamp(2px,1.2vh,20px)]">
          <IconShoppingCart />
          Order Now
        </ButtonPrimaryLight>
        <Link href="/shipping-info" className="w-full">
          <ButtonPrimary className="!uppercase !whitespace-nowrap py-[clamp(2px,1.2vh,20px)]">
            <IconBolt height={18} width={18} />
            Check Out
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

const CartInterceptingPage = () => {
  const [show, setShow] = React.useState(true);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [refetch, setRefetch] = React.useState(0);

  React.useEffect(() => {
    setCartProducts(getLocalStorageData(storages.cartProducts) || []);
  }, [refetch]);

  return (
    show && (
      <Modal
        show={show}
        setShow={setShow}
        className="w-[600px] overflow-y-auto  scrollbar-y-remove"
        alignment="right"
        showCancelBtnINSmallDevice={show}
        isIntercepting={true}
      >
        <div className="p-2">
          <span className="font-semibold [font-size:clamp(14px,5vw,18px)]">
            Shopping Cart
          </span>
          <div className="flex flex-col gap-2 mt-2">
            <ProgressBar progressValue={20} />
            <span className="block text-base">
              Buy <span className="text-gradient-primary">$900</span> more to
              get{" "}
              <span className="text-gradient-primary font-semibold">
                Freeship
              </span>{" "}
              🔥
            </span>
          </div>
          <hr className="border border-black-10 h-[1px] my-3" />

          <div className="flex flex-col gap-2 overflow-y-auto scrollbar-y-remove h-[calc(100vh-max(350px,45vh))] pb-10">
            {cartProducts?.map((product: ICartProduct) => {
              return (
                <QuickOrderItem
                  key={product?._id}
                  product={product}
                  setRefetch={setRefetch}
                />
              );
            })}
          </div>
          <div className="fixed bottom-0 right-1 w-[95%]  mx-auto bg-white">
            <OrderSummery products={cartProducts} />
            <div className="my-2 flex items-center justify-center">
              {" "}
              <button
                className="text-positive text-sm uppercase "
                onClick={() => window.location.reload()}
              >
                View Cart &rarr;
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default CartInterceptingPage;
