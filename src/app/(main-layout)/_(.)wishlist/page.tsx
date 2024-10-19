"use client";
import Modal from "@/Components/Modal";
import { IconArrowLeft } from "@tabler/icons-react";
import React, { useContext, useEffect } from "react";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import Link from "next/link";
import { WishlistContext } from "@/Provider/WishlistProvider";
import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";
import WishlishedProducts from "./_components/WishlishedProducts";

const WishlistInterceptingPage = () => {
  const [show, setShow] = React.useState(true);
  const { wishlistProducts, setRefetch } = useContext(WishlistContext);

  useEffect(() => {
    getWishlistRemoteAndLocalDataAndMerge();
    setRefetch((prev) => prev + 1);
  }, [setRefetch]);

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
              {wishlistProducts?.map(
                (product: IWishlistProduct, index: number) => (
                  <WishlishedProducts
                    key={index}
                    product={product}
                    setRefetch={setRefetch}
                  />
                )
              )}
            </div>
            <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto">
              <Link
                href={"/wishlist"}
                className="flex items-center justify-center gap-2.5 px-5 w-full py-3.5 bg-gradient-primary text-white rounded-full "
                onClick={() => window.location.reload()}
              >
                VIEW WISHLIST
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
