import Modal from "@/Components/Modal";
import StarRating from "@/Components/StarRating";
import {
  IconArrowLeft,
  IconBolt,
  IconMapPin,
  IconPhone,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import IncreaseDecrease from "./IncreaseDecrease";
import { demoProductPhoto } from "@/assets";
import ButtonPrimary from "./ButtonPrimary";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import Link from "next/link";

export const QuickOrderItem = () => {
  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={demoProductPhoto}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              New UBL Bluetooth Speaker
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">UBL</span>
              <span className="text-black-10">|</span>
              <StarRating rating={4} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-xs">$500.22</span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            <IncreaseDecrease />
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

export const OrderSummery = () => {
  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>1300</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>14</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -$<span>50</span>
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          $<span>1264</span>
        </strong>
      </div>
      <div className="md:block hidden">
        <ButtonPrimary buttonType="submit">
          <IconBolt height={18} width={18} />
          <span className="uppercase">Confirm Order - $1264.00</span>
        </ButtonPrimary>
      </div>
    </div>
  );
};

const QuickOrderModal = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      show={show}
      setShow={setShow}
      alignment="center"
      className="h-[800px] md:w-3/4 w-full  overflow-y-auto scrollbar-y-remove "
      showCancelBtnINSmallDevice={show}
    >
      <div className="">
        <div className="flex justify-between gap-5 md:flex-row flex-col-reverse md:p-2 p-3.5 relative">
          <div className="flex-1 flex  border-r border-black-10  flex-col pr-5 ">
            <div className="md:flex flex-col gap-3.5 hidden">
              <span className="font-semibold  text-lg md:block hidden">
                Quick Order
              </span>
              <input
                type="range"
                className="w-full  pointer-events-none"
                value={10}
              />
              <span className="block text-base">
                Buy <span className="text-gradient-primary">$900</span> more to
                get{" "}
                <span className="text-gradient-primary font-semibold">
                  Freeship
                </span>{" "}
                🔥
              </span>
            </div>
            <hr className="border-black-10 my-5" />
            <span className="md:hidden block text-black-50 text-sm mb-5">
              Item lists
            </span>
            <div className="flex flex-col gap-5 overflow-y-auto h-[600px] scrollbar-y-remove scrollbar-x-remove">
              {[...Array(10)].map((item, index) => (
                <QuickOrderItem key={index} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="md:hidden flex-col gap-3.5 flex my-10">
              <span className="font-semibold  text-lg md:block hidden">
                Quick Order
              </span>
              <input
                type="range"
                className="w-full  pointer-events-none"
                value={10}
              />
              <span className="block text-base">
                Buy <span className="text-gradient-primary">$900</span> more to
                get{" "}
                <span className="text-gradient-primary font-semibold">
                  Freeship
                </span>{" "}
                🔥
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="uppercase font-semibold text-lg">
                Cash on delivery
              </span>
              <span className="text-black-50 text-base">
                Enter Your shipping address
              </span>
            </div>

            <form action="" className="mt-12 flex flex-col gap-[50px]">
              <div className="flex flex-col gap-5  ">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="fullName">
                    Full Name <span className="text-gradient-secondary">*</span>
                  </label>
                  <div className="border border-black-10 rounded-lg px-5 py-3 flex justify-between items-center">
                    <input
                      type="text"
                      name="fullName"
                      className="outline-none w-full"
                    />
                    <IconUser stroke={1} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="userPhone">
                    Phone Number{" "}
                    <span className="text-gradient-secondary">*</span>
                  </label>
                  <div className="border border-black-10 rounded-lg px-5 py-3 flex justify-between items-center">
                    <input
                      type="text"
                      name="userPhone"
                      className="outline-none w-full"
                    />
                    <IconPhone stroke={1} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="userAddress">
                    Address <span className="text-gradient-secondary">*</span>
                  </label>
                  <div className="border border-black-10 rounded-lg px-5 py-3 flex justify-between items-center">
                    <input
                      type="text"
                      name="userAddress"
                      className="outline-none w-full"
                    />
                    <IconMapPin stroke={1} />
                  </div>
                </div>
                <div className="md:hidden block ">
                  <ButtonPrimary buttonType="submit">
                    <IconBolt height={18} width={18} />
                    <span className="uppercase text-sm">
                      Confirm Order - $1264.00
                    </span>
                  </ButtonPrimary>
                </div>
              </div>

              <div className="md:block hidden">
                <OrderSummery />
              </div>
            </form>
            <Link
              href={"/"}
              className="uppercase text-black-80 md:flex items-center justify-center mt-5 gap-2  hidden"
            >
              <IconArrowLeft />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden mx-auto w-[90%]">
          <OrderSummery />
        </div>
      </div>
    </Modal>
  );
};

export default QuickOrderModal;
