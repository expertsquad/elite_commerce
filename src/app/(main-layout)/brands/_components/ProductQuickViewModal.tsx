import Modal from "@/Components/Modal";
import Image from "next/image";
import React from "react";
import { IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";
import ProductPriceCalculationAndOrder from "../../products/[slug]/_components/ProductPriceCalculationAndOrder";

const ProductQuickViewModal = ({
  show,
  setShow,
  product,
  accessToken,
  currencyIcon,
  shippingAmount,
  isQuickOrderActive,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct;
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
  accessToken: string;
}) => {
  return (
    <Modal
      show={show}
      setShow={setShow}
      alignment="right"
      className="w-full md:w-[900px] scrollbar-y-remove md:overflow-auto overflow-y-auto"
      showCancelBtnINSmallDevice={show}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-7 md:p-3.5 p-2.5">
        <div className="col-span-2 md:order-none order-2 md:flex md:flex-col md:flex-nowrap flex-wrap justify-center md:justify-normal gap-5 items-center scrollbar-y-remove h-[850px] overflow-y-auto  ">
          {product?.productPhotos?.map((img, i) => {
            return (
              <div
                key={i}
                className="bg-gradient-primary-light rounded-2xl  px-6 py-10 flex items-center justify-center border border-black-10 mt-5 md:mt-0"
              >
                <div className="relative w-[250px] h-[250px] overflow-hidden">
                  <Image src={`${server_url + img}`} fill alt="product photo" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-3 mb-10 md:mb-0">
          <span className="text-sm text-black-80">Quick View</span>
          <div className="mt-[30px]">
            <h1 className="text-base md:text-xl xl:text-2xl font-semibold">
              {product?.productName}
            </h1>
            <div className="flex flex-col gap-5 my-5">
              <div className="flex items-center gap-1.5">
                <div className="relative w-16 h-4">
                  <Image
                    src={`${server_url + product?.brand?.brandPhoto}`}
                    alt="brand img"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-black-10 text-sm">|</span>
                <span className="text-black-80">
                  Category: {product?.category?.categoryName}
                </span>
              </div>
            </div>
            <ProductPriceCalculationAndOrder
              product={product}
              accessToken={accessToken}
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
              isQuickOrderActive={isQuickOrderActive}
            />
            {product?.description ? (
              <div className="flex flex-col gap-5 mt-5 overflow-y-auto scrollbar-y-remove h-[300px]">
                <span className="font-semibold text-2xl">Description</span>
                <p className="">{product?.description}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductQuickViewModal;
