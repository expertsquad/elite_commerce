import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import IncreaseDecrease from "../../brands/_components/IncreaseDecrease";
import { ICartProduct } from "@/interfaces/cart.interface";
import { updateCart } from "@/utils/updateCart.utils";

export const CartItem = ({ product }: { product: ICartProduct }) => {
  const price =
    product?.variant?.discountedPrice || product?.variant?.sellingPrice;
  return (
    <div className="flex items-center md:cart-item-data border-b pb-5 border-black-10">
      <div className="flex items-center gap-x-2.5 w-full">
        <div className="bg-gradient-primary-light p-1.5 rounded-[10px]">
          <div className="relative md:w-[44px] md:h-[44px] w-[50px] h-[50px]">
            <Image
              alt="product"
              src={server_url + product?.productPhoto}
              fill
              objectFit="cover"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-4 w-full">
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
              <strong className="text-black-800 text-xs font-normal">
                ${price}
              </strong>
              <IncreaseDecrease product={product} />
            </div>
            <span className="font-bold text-gradient-primary">
              ${price * product?.orderQuantity}
            </span>
          </div>
        </div>
      </div>

      {/* medium device */}
      <div className="hidden md:flex flex-col items-center justify-between">
        <span className="text-sm text-black-80">U Price</span>
        <strong className="text-gradient-primary">${price}</strong>
      </div>
      <div className="md:flex flex-col gap-y-1 items-center justify-between hidden">
        <span className="text-sm text-black-80">Qty</span>
        <IncreaseDecrease product={product} />
      </div>
      <div className="md:flex flex-col gap-y-0.5 items-center justify-between hidden">
        <span className="text-sm text-black-80">Sub Total</span>
        <strong className="text-gradient-primary">
          ${price * product?.orderQuantity}
        </strong>
      </div>
      <div className="md:flex flex-col md:items-center items-end md:justify-center hidden justify-between">
        <button
          className="md:border rounded-full border-danger p-0.5"
          onClick={() => updateCart({ actionType: "remove", product })}
        >
          <IconX stroke={1} color="#FF3838" width={16} height={16} />
        </button>
        <strong className="text-gradient-primary md:hidden block">
          ${price * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};
