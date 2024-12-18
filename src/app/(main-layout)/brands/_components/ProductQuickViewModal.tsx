import Modal from "@/Components/Modal";
import Image from "next/image";
import React from "react";
import { IProduct } from "@/interfaces/product.interface";
import { server_url } from "@/constants";
import ProductPriceCalculationAndOrder from "../../products/[slug]/_components/ProductPriceCalculationAndOrder";
import useGetSingleProduct from "@/utils/useGetSingleProduct";
import useCustomStyles from "@/utils/useCustomStyles";
import DescriptionReader from "@/Components/DescriptionReader";
import { getAccessTokenFromCookies } from "@/utils/getAccessTokenFromCookies";

const ProductQuickViewModal = ({
  show,
  setShow,
  product,
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
}) => {
  const { singleProduct } = useGetSingleProduct(product?._id);
  useCustomStyles(singleProduct?.description || "");

  const accessTokenValue = getAccessTokenFromCookies();
  return (
    <Modal
      show={show}
      setShow={setShow}
      alignment="right"
      showCancelBtnINSmallDevice={show}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-7 gap-5 md:p-3.5 p-2.5 md:w-[900px] w-full md:overflow-hidden overflow-y-auto scrollbar-y-remove md:h-auto h-[calc(100vh-20px)]">
        <div className="md:col-span-2 md:h-[calc(100vh-80px)] md:overflow-y-auto scrollbar-y-remove grid grid-cols-2 md:grid-cols-1 gap-5 ">
          {product?.productPhotos?.map((img, i) => {
            return (
              <div key={i}>
                <div className="bg-image-background rounded-2xl  md:px-6 md:py-10 py-6 px-7 flex items-center justify-center border border-black-10 mt-5 md:mt-0">
                  <div className="relative md:w-[250px] w-[100px] h-[100px] md:h-[250px] overflow-hidden">
                    <Image
                      src={`${server_url + img}`}
                      fill
                      alt="product photo"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-3 mb-10 md:mb-0 md:h-[calc(100vh-80px)] md:overflow-y-auto scrollbar-y-remove">
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
                  {product?.category?.categoryName}
                </span>
              </div>
            </div>
            <ProductPriceCalculationAndOrder
              product={product}
              accessToken={accessTokenValue}
              currencyIcon={currencyIcon}
              shippingAmount={shippingAmount}
              isQuickOrderActive={isQuickOrderActive}
            />
            {/* {singleProduct?.description ? (
              <div className="flex flex-col gap-5 mt-5 overflow-y-auto scrollbar-y-remove h-[300px]">
                <span className="font-semibold text-2xl">Description</span>
                <div
                  id="preview"
                  dangerouslySetInnerHTML={{
                    __html: singleProduct?.description,
                  }}
                />
              </div>
            ) : (
              ""
            )} */}
            <DescriptionReader
              className="mt-5"
              description={singleProduct?.description?.data}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductQuickViewModal;
