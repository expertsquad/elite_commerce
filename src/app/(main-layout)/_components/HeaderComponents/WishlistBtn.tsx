// "use client";
// import Modal from "@/Components/Modal";
// import { server_url } from "@/constants";
// import { IWishlistProduct } from "@/interfaces/wishlist.interface";
// import { WishlistContext } from "@/Provider/WishlistProvider";
// import {
//   IconArrowLeft,
//   IconCheck,
//   IconHeart,
//   IconShoppingCart,
//   IconX,
// } from "@tabler/icons-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { Fragment, useContext, useEffect } from "react";
// import ButtonPrimary from "../../brands/_components/ButtonPrimary";
// import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";
// import { CartContext } from "@/Provider/CartProvider";
// import { updateWishlist } from "@/utils/updateWishlist.utils";
// import { updateCart } from "@/utils/updateCart.utils";

// const WishlistBtn = ({ currencyIcon }: { currencyIcon: string }) => {
//   const [show, setShow] = React.useState(false);
//   const { wishlistProducts, setRefetch } = useContext(WishlistContext);
//   const { cartProducts, setRefetch: setRefetchCart } = useContext(CartContext);

//   useEffect(() => {
//     getWishlistRemoteAndLocalDataAndMerge();
//     setRefetch((prev) => prev + 1);
//   }, [setRefetch]);

//   const handleRemoveFromWishlist = ({
//     product,
//   }: {
//     product: IWishlistProduct;
//   }) => {
//     updateWishlist({ product });
//     setRefetch((prev) => prev + 1);
//   };

//   const handleAddToCart = ({ product }: { product: IWishlistProduct }) => {
//     updateCart({ actionType: "add", product });
//     setRefetch((prev) => prev + 1);
//     setRefetchCart && setRefetchCart((prev) => prev + 1);
//   };

//   return (
//     <Fragment>
//       <button className="relative" onClick={() => setShow(true)}>
//         <span className="p-1 w-4 h-4 rounded-full bg-gradient-secondary text-white absolute -right-1.5 -top-1 flex items-center justify-center text-[8px]">
//           {wishlistProducts?.length || 0}
//         </span>
//         <IconHeart stroke={1} />
//       </button>
//       {show && (
//         <Modal
//           alignment="right"
//           show={show}
//           setShow={setShow}
//           showCancelBtnINSmallDevice={show}
//           className="w-[600px] overflow-y-auto scrollbar-y-remove"
//         >
//           <div className="p-2">
//             <span className="font-semibold [font-size:clamp(14px,5vw,18px)] ">
//               My Wishlist
//             </span>
//             <div className="mt-[30px] flex flex-col gap-5 overflow-y-auto md:h-[calc(100vh-250px)] h-[calc(100vh-250px)] scrollbar-y-remove bg-white">
//               {wishlistProducts?.map(
//                 (product: IWishlistProduct, index: number) => (
//                   <div
//                     key={product?._id}
//                     className="flex justify-between gap-3.5 border-b border-black-10 pb-5 mb-1"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="bg-gradient-primary-light md:p-3 p-1.5 rounded-[10px]">
//                         <div className="relative md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
//                           <Image
//                             alt="product"
//                             src={`${server_url + product.productPhoto}`}
//                             fill
//                             objectFit="cover"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex flex-col justify-between gap-4">
//                         <span className="line-clamp-1 md:text-base text-sm text-black-80">
//                           {product?.productName}
//                         </span>

//                         <div className="flex flex-col gap-2">
//                           <p className="text-positive text-[10px] md:text-xs">
//                             {product?.variant?.inStock
//                               ? product?.variant?.inStock
//                               : 0}
//                             In Stock
//                           </p>

//                           <div className="flex items-baseline gap-1.5">
//                             <strong className="font-semibold text-gradient-primary text-base">
//                               {currencyIcon}
//                               {product?.variant?.discountedPrice}
//                             </strong>
//                             <span className="text-black-10">|</span>
//                             <strong className="font-normal line-through text-black-50 text-sm">
//                               {currencyIcon}
//                               {product?.variant?.sellingPrice}
//                             </strong>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-end justify-between">
//                       <button
//                         onClick={() => handleRemoveFromWishlist({ product })}
//                       >
//                         <IconX stroke={1} color="red" height={16} width={16} />
//                       </button>
//                       {cartProducts?.some(
//                         (p) => p?.productId === product?._id
//                       ) ? (
//                         <div className="text-positive text-sm flex items-center justify-center gap-x-1">
//                           <IconCheck size={18} />
//                           <span>Carted</span>
//                         </div>
//                       ) : (
//                         <button
//                           className="flex items-center justify-center gap-x-1 bg-gradient-primary px-2 py-1 rounded-md text-white hover:text-black"
//                           onClick={() => handleAddToCart({ product })}
//                         >
//                           <IconShoppingCart size={17} stroke={2} />
//                           Add
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto">
//                 <Link
//                   href={"/wishlist"}
//                   onClick={() => setShow(false)}
//                   className={`relative inline-flex items-center justify-center py-3.5 overflow-hidden font-bold rounded-full group w-full bg-gradient-primary ${
//                     wishlistProducts?.length === 0
//                       ? "pointer-events-none cursor-not-allowed opacity-50 select-none"
//                       : ""
//                   }`}
//                 >
//                   <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
//                   <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black group-hover:-translate-x-8"></span>
//                   <span className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-black text-center">
//                     VIEW WISHLIST
//                   </span>
//                   <span className="absolute inset-0 border border-white rounded-full"></span>
//                 </Link>

//                 <Link
//                   href="/"
//                   className="py-3 relative rounded-full group overflow-hidden font-medium bg-gradient-primary-light text-black inline-block"
//                 >
//                   <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-primary group-hover:h-full opacity-90"></span>
//                   <span className="relative flex items-center justify-center gap-x-1 group-hover:text-white">
//                     <IconArrowLeft size={18} />
//                     CONTINUE SHOPPING
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </Fragment>
//   );
// };

// export default WishlistBtn;

"use client";
import Modal from "@/Components/Modal";
import { server_url } from "@/constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { WishlistContext } from "@/Provider/WishlistProvider";
import {
  IconArrowLeft,
  IconCheck,
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
import { productEmptyState } from "@/assets";

const WishlistBtn = ({ currencyIcon }: { currencyIcon: string }) => {
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

            {/* Empty State */}
            {wishlistProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-250px)] text-black-50 text-lg">
                Your wishlist is empty.
                <Image src={productEmptyState} alt="Empty State" />
              </div>
            ) : (
              <div className="mt-[30px] flex flex-col gap-5 overflow-y-auto md:h-[calc(100vh-250px)] h-[calc(100vh-250px)] scrollbar-y-remove bg-white">
                {wishlistProducts.map(
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
                                : 0}
                              In Stock
                            </p>

                            <div className="flex items-baseline gap-1.5">
                              <strong className="font-semibold text-gradient-primary text-base">
                                {currencyIcon}
                                {product?.variant?.discountedPrice}
                              </strong>
                              <span className="text-black-10">|</span>
                              <strong className="font-normal line-through text-black-50 text-sm">
                                {currencyIcon}
                                {product?.variant?.sellingPrice}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => handleRemoveFromWishlist({ product })}
                        >
                          <IconX
                            stroke={1}
                            color="red"
                            height={16}
                            width={16}
                          />
                        </button>
                        {cartProducts?.some(
                          (p) => p?.productId === product?._id
                        ) ? (
                          <div className="text-positive text-sm flex items-center justify-center gap-x-1">
                            <IconCheck size={18} />
                            <span>Carted</span>
                          </div>
                        ) : (
                          <button
                            className="flex items-center justify-center gap-x-1 bg-gradient-primary hover:bg-gradient-primary-reverse hover:text-white px-2 py-1 rounded-md text-white"
                            onClick={() => handleAddToCart({ product })}
                          >
                            <IconShoppingCart size={17} stroke={2} />
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-5 bg-white fixed bottom-5 w-[92%] mx-auto">
                <Link
                  href="/wishlist"
                  onClick={() => setShow(false)}
                  className={`py-3 relative rounded-full group overflow-hidden font-medium bg-gradient-primary-light text-black inline-block ${
                    wishlistProducts?.length === 0
                      ? "pointer-events-none cursor-not-allowed opacity-50 select-none"
                      : ""
                  }`}
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-primary group-hover:h-full opacity-90"></span>
                  <span className="relative flex items-center justify-center group-hover:text-white">
                    VIEW WISHLIST
                  </span>
                </Link>
                <Link
                  href="/"
                  className="py-3 relative rounded-full group overflow-hidden font-medium bg-gradient-primary-light text-black inline-block"
                >
                  <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-primary group-hover:h-full opacity-90"></span>
                  <span className="relative flex items-center justify-center gap-x-1 group-hover:text-white">
                    <IconArrowLeft size={18} />
                    CONTINUE SHOPPING
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default WishlistBtn;
