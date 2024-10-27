import { server_url } from "@/constants";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { CartContext } from "@/Provider/CartProvider";
import { updateWishlist } from "@/utils/updateWishlist.utils";
import { updateCart } from "@/utils/updateCart.utils";
import { getWishlistRemoteAndLocalDataAndMerge } from "@/helpers/getWishlistRemoteAndLocalDataAndMerge";

const WishlishedProducts = ({
  product,
  setRefetch,
  currencyIcon,
}: {
  product: IWishlistProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  currencyIcon?: string;
}) => {
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
    <div
      key={product?._id}
      className="flex justify-between gap-3.5 border-b border-black-10 pb-5 mb-1"
    >
      <div className="flex items-center gap-3">
        <div className="bg-gradient-primary-light md:p-3 p-1.5 rounded-[10px]">
          <div className="relative md:w-[70px] md:h-[70px] w-[50px] h-[50px]">
            <Image
              alt="product"
              src={`${server_url + product.productPhoto}`}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:gap-4">
          <span className="line-clamp-1 md:text-base text-sm text-black-80">
            {product?.productName}
          </span>

          <div className="flex flex-col gap-2">
            <p className="text-positive text-[10px] md:text-xs">
              {product?.variant?.inStock ? product?.variant?.inStock : 0} In
              Stock
            </p>

            <div className="flex items-center gap-1.5">
              <strong className="font-semibold text-gradient-primary text-base">
                {currencyIcon}
                {product?.variant?.discountedPrice}
              </strong>
              <span className="text-black-10">|</span>
              <strong className="font-normal line-through text-black-50 text-xs">
                {currencyIcon}
                {product?.variant?.sellingPrice}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={() => handleRemoveFromWishlist({ product })}>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        {cartProducts?.some((p) => p?.productId === product?._id) ? (
          <small className="text-sm">Carted</small>
        ) : (
          <ButtonPrimary
            className="!rounded !py-0.5 !px-1.5 md:!py-1.5 md:!px-2.5 !hover:scale-100 !gap-x-1"
            onClick={() => handleAddToCart({ product })}
          >
            <IconShoppingCart size={16} stroke={2} />
            Add
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default WishlishedProducts;
