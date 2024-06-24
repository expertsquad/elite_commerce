"use client";
import Modal from "@/Components/Modal";
import { server_url, storages } from "@/constants";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { IconArrowLeft, IconShoppingCart, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../brands/_components/ButtonPrimary";
import Image from "next/image";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { fetchProtectedData } from "@/actions/fetchData";
import { mergeProducts } from "@/utils/mergeProduct.utils";
import { updatedWishlistMutation } from "@/utils/updateWishlist.utils";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";

const WishlistInterceptingPage = () => {
  const [show, setShow] = React.useState(true);
  const [wishlistProducts, setWishlistProducts] = useState<
    IWishlistProduct[] | []
  >([]);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    const getRemoteData = async () => {
      try {
        const remoteWishlist = await fetchProtectedData({
          route: "/wishlist/me",
        });
        const localProducts =
          getLocalStorageData(storages.wishlistProducts) || [];
        const remoteProducts = remoteWishlist?.data?.products || [];
        const mergedProducts = mergeProducts(localProducts, remoteProducts);
        await updatedWishlistMutation(mergedProducts);

        return localProducts;
      } catch (error) {
        console.log(error);
      }
    };
    getRemoteData();
    setWishlistProducts(getLocalStorageData(storages.wishlistProducts) || []);
  }, [refetch]);

  return (
    <div className="h-screen">
      {show && (
        <Modal
          alignment="right"
          show={show}
          setShow={setShow}
          showCancelBtnINSmallDevice={show}
          isIntercepting={true}
          className="w-[600px] overflow-y-auto scrollbar-y-remove"
        >
          <div className="p-2">
            <span className="font-semibold [font-size:clamp(14px,5vw,18px)] ">
              My Wishlist
            </span>
            <div className="mt-[30px] flex flex-col gap-5 overflow-y-auto md:h-[calc(100vh-250px)] h-[calc(100vh-250px)] scrollbar-y-remove bg-white">
              {wishlistProducts?.map((product: IProduct, index: number) => (
                <div
                  key={product?._id}
                  className="flex justify-between gap-3.5 border-b border-black-10 pb-5 mb-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-primary-light md:p-3 p-1.5 rounded-[10px]">
                      <div className="relative md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
                        {product &&
                          product.productPhotos &&
                          product.productPhotos.length > 0 && (
                            <Image
                              alt="product"
                              src={`${server_url + product.productPhotos[0]}`}
                              fill
                              objectFit="cover"
                            />
                          )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <span className="line-clamp-1 md:text-base text-sm text-black-80">
                        {product?.productName}
                      </span>

                      <div className="flex flex-col gap-2">
                        <span className="text-positive text-[10px] md:text-xs">
                          {product?.brand?.brandName}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <strong className="font-semibold text-gradient-primary text-base">
                            ${product?.variant?.discountedPrice}
                          </strong>
                          <span className="text-black-10">|</span>
                          <strong className="font-normal line-through text-black-50 text-xs">
                            ${product?.variant.sellingPrice}
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
              ))}
            </div>
            <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto">
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
    </div>
  );
};

export default WishlistInterceptingPage;
