import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import IncreaseDecreaseCartItems from "../../brands/_components/IncreaseDecreaseCartItems";
import { ICartProduct } from "@/interfaces/cart.interface";
import { updateCart } from "@/utils/updateCart.utils";

export const CartItem = ({
  product,
  setRefetch,
  currencyIcon,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  currencyIcon?: string;
}) => {
  const price =
    product?.variant?.discountedPrice || product?.variant?.sellingPrice;

  const handleRemoveItem = () => {
    updateCart({ actionType: "remove", product });
    setRefetch((prev) => prev + 1);
  };
  return (
    <div className="flex items-center md:cart-item-data border-b pb-5 border-black-10">
      <div className="flex items-center gap-x-2.5 w-full">
        <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
          <div className="relative md:w-[44px] md:h-[50px] w-[50px] h-[60px]">
            <Image
              alt="product"
              src={server_url + product?.productPhoto}
              fill
              style={{
                objectFit: "contain",
              }}
              className="inset-0 top-0 left-0 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 md:gap-y-4 w-full">
          <div className="flex items-center justify-between gap-x-1 w-full">
            <span className="line-clamp-1 [font-size:clamp(10px,5vw,14px)]">
              {product?.productName}
            </span>
            <button className="md:border rounded-full border-danger p-0.5 block md:hidden">
              <IconX stroke={1} color="#FF3838" width={16} height={16} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-positive text-xs md:text-sm whitespace-nowrap">
              {product?.brandName}
            </span>
            <span className="text-black-10 text-xs ">|</span>
            <StarRating rating={product?.averageRating || 0} />
          </div>
          <div className="md:hidden flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <strong className="text-black-800 text-sm font-normal">
                {currencyIcon}
                {price}
              </strong>
              <IncreaseDecreaseCartItems
                product={product}
                setRefetch={setRefetch}
                className="!px-2 !py-0.5"
                btnStyle="!size-4 !flex !items-center !justify-center"
              />
            </div>
            <span className="font-bold text-gradient-primary">
              {currencyIcon}
              {price * product?.orderQuantity}
            </span>
          </div>
        </div>
      </div>

      {/* medium device */}
      <div className="hidden md:flex flex-col items-center md:gap-y-2 justify-between">
        <span className="text-sm text-black-80">Price</span>
        <strong className="text-gradient-primary">
          {currencyIcon}
          {price}
        </strong>
      </div>
      <div className="md:flex flex-col gap-y-1 items-center md:gap-y-2 justify-between hidden">
        <span className="text-sm text-black-80">Qty</span>
        <IncreaseDecreaseCartItems
          product={product}
          setRefetch={setRefetch}
          className="!px-2 !py-0.5"
          btnStyle="!size-4 !flex !items-center !justify-center"
        />
      </div>
      <div className="md:flex flex-col gap-y-0.5 items-center md:gap-y-2 justify-between hidden">
        <span className="text-sm text-black-80">Sub Total</span>
        <strong className="text-gradient-primary">
          {currencyIcon}
          {price * product?.orderQuantity}
        </strong>
      </div>
      <div className="md:flex flex-col md:items-center items-end md:justify-center hidden justify-between">
        <button
          className="md:border rounded-full border-danger p-0.5"
          onClick={handleRemoveItem}
        >
          <IconX stroke={1} color="#FF3838" width={16} height={16} />
        </button>
        <strong className="text-gradient-primary md:hidden block">
          {currencyIcon}
          {price * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};
