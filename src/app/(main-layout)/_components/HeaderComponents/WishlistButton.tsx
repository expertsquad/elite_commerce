"use client";
import { demoProductPhoto } from "@/assets";
import Modal from "@/Components/Modal";
import {
  IconArrowLeft,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { Fragment } from "react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import Link from "next/link";

export const WishlistItem = () => {
  return (
    <div className="flex justify-between gap-3.5 border-b border-black-10 pb-5">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-primary-light md:p-3 p-1.5 rounded-[10px]">
          <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
            <Image
              alt="product"
              src={demoProductPhoto}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <span className="line-clamp-1 md:text-base text-sm text-black-80">
            New UBL Bluetooth Speaker
          </span>

          <div className="flex flex-col gap-2">
            <span className="text-positive text-[10px] md:text-xs">UBL</span>

            <div className="flex items-center gap-1.5">
              <strong className="font-semibold text-gradient-primary text-base">
                $806.66
              </strong>
              <span className="text-black-10">|</span>
              <strong className="font-normal line-through text-black-50  text-xs">
                $1500.00
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <ButtonPrimary className="!rounded !py-1.5 !px-2.5 !hover:scale-100">
          <IconShoppingCart height={16} width={16} />
          Add
        </ButtonPrimary>
      </div>
    </div>
  );
};

const WishlistButton = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Fragment>
      <button onClick={() => setShow(true)} className="relative">
        <circle className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
          0
        </circle>
        <IconHeart stroke={1} />
      </button>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          alignment="right"
          className="md:w-[500px] "
          showCancelBtnINSmallDevice={show}
        >
          <div className="md:p-4 p-3.5">
            <span className="font-semibold text-xl text-black-80">
              My Wishlist
            </span>
            <div className="mt-[30px] flex flex-col gap-5 overflow-y-auto md:h-[calc(100vh-300px)] h-[calc(100vh-250px)] scrollbar-y-remove bg-white ">
              {[...Array(10)].map((_, i) => {
                return <WishlistItem key={i} />;
              })}
            </div>
            <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto ">
              <Link
                href={"/wishlist"}
                className="flex items-center justify-center gap-2.5 px-5 w-full py-3.5  bg-gradient-primary  text-white rounded-full "
              >
                View All Wishlist
              </Link>

              <Link
                href={"/"}
                className="uppercase text-black-80 flex items-center justify-center gap-2  "
              >
                <IconArrowLeft />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default WishlistButton;
