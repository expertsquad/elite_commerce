"use client";
import Modal from "@/Components/Modal";
import { server_url } from "@/constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { WishlistContext } from "@/Provider/WishlistProvider";
import {
  IconArrowLeft,
  IconHeart,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext, useEffect } from "react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";
import { CartContext } from "@/Provider/CartProvider";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { updateCart } from "@/utils/updateCart.utils";

const WishlistBtn = () => {
  const [show, setShow] = React.useState(false);
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);
  const { cartProducts, setRefetch: setRefetchCart } = useContext(CartContext);

  useEffect(() => {
    getWishlistRemoteAndLocalDataAndMerge();
    setRefetch((prev) => prev + 1);
  }, [setRefetch]);

  const handleRemoveFromWishlist = ({
    product,
  }: {
    product: IWishlistProduct;
  }) => {
    updateWishlist({ product });
    setRefetch((prev) => prev + 1);
  };

  const handleAddToCart = ({ product }: { product: IWishlistProduct }) => {
    updateCart({ actionType: "add", product });
    setRefetch((prev) => prev + 1);
    setRefetchCart && setRefetchCart((prev) => prev + 1);
  };

  return (
    <Fragment>
      <button className="relative" onClick={() => setShow(true)}>
        <span className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
          {wishlistProducts?.length || 0}
        </span>
        <IconHeart stroke={1} />
      </button>
      {show && (
        <Modal
          alignment="right"
          show={show}
          setShow={setShow}
          showCancelBtnINSmallDevice={show}
          className="w-[600px] overflow-y-auto scrollbar-y-remove"
        >
          <div className="p-2">
            <span className="font-semibold [font-size:clamp(14px,5vw,18px)] ">
              My Wishlist
            </span>
            <div className="mt-[30px] flex flex-col gap-5 overflow-y-auto md:h-[calc(100vh-250px)] h-[calc(100vh-250px)] scrollbar-y-remove bg-white">
              {wishlistProducts?.map(
                (product: IWishlistProduct, index: number) => (
                  <div
                    key={product?._id}
                    className="flex justify-between gap-3.5 border-b border-black-10 pb-5 mb-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-primary-light md:p-3 p-1.5 rounded-[10px]">
                        <div className="relative md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
                          <Image
                            alt="product"
                            src={`${server_url + product.productPhoto}`}
                            fill
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-4">
                        <span className="line-clamp-1 md:text-base text-sm text-black-80">
                          {product?.productName}
                        </span>

                        <div className="flex flex-col gap-2">
                          <p className="text-positive text-[10px] md:text-xs">
                            {product?.variant?.inStock
                              ? product?.variant?.inStock
                              : 0}{" "}
                            In Stock
                          </p>

                          <div className="flex items-center gap-1.5">
                            <strong className="font-semibold text-gradient-primary text-base">
                              ${product?.variant?.discountedPrice}
                            </strong>
                            <span className="text-black-10">|</span>
                            <strong className="font-normal line-through text-black-50 text-xs">
                              ${product?.variant?.sellingPrice}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => handleRemoveFromWishlist({ product })}
                      >
                        <IconX stroke={1} color="red" height={16} width={16} />
                      </button>
                      {cartProducts?.some(
                        (p) => p?.productId === product?._id
                      ) ? (
                        <small className="text-sm">Carted</small>
                      ) : (
                        <ButtonPrimary
                          className="!rounded !py-1.5 !px-2.5 !hover:scale-100"
                          onClick={() => handleAddToCart({ product })}
                        >
                          <IconShoppingCart height={16} width={16} />
                          Add
                        </ButtonPrimary>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto">
              <Link
                href={"/wishlist"}
                className={`flex items-center justify-center gap-2.5 px-5 w-full py-3.5  bg-gradient-primary  text-white rounded-full uppercase ${
                  wishlistProducts?.length === 0
                    ? "pointer-events-none cursor-not-allowed opacity-50 select-none"
                    : ""
                }`}
                onClick={() => setShow(false)}
              >
                View Wishlist
              </Link>

              <Link
                href={"/"}
                onClick={() => setShow(false)}
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

export default WishlistBtn;
