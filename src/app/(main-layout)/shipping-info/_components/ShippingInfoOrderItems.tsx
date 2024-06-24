import StarRating from "@/Components/StarRating";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import IncreaseDecrease from "../../brands/_components/IncreaseDecrease";
import { ICartProduct } from "@/interfaces/cart.interface";
import { updateCart } from "@/utils/updateCart.utils";
import { server_url } from "@/constants";

export const ShippingInfoOrderItems = ({
  product,
  setRefetch,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleRemoveItem = () => {
    updateCart({ actionType: "remove", product });
    setRefetch((prev) => prev + 1);
  };

  // product price
  const price =
    product?.variant?.discountedPrice || product?.variant?.sellingPrice;

  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
              <Image
                alt="product"
                src={server_url + product?.productPhoto}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              {product?.productName}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">
                {product?.brandName}
              </span>
              <span className="text-black-10">|</span>
              <StarRating rating={4} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-xs">${price}</span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            <IncreaseDecrease product={product} setRefetch={setRefetch} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={handleRemoveItem}>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          ${price * product?.orderQuantity}
        </strong>
      </div>
    </div>
  );
};
