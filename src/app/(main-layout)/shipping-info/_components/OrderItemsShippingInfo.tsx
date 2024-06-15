import StarRating from "@/Components/StarRating";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import IncreaseDecrease from "../../brands/_components/IncreaseDecrease";

export const OrderItemsShippingInfo = () => {
  return (
    <div className="flex  justify-between gap-3.5">
      <div className="flex md:items-center gap-3.5">
        <div>
          <div className="bg-gradient-primary-light md:p-3.5 p-1.5 rounded-[10px]">
            <div className="relative  md:w-[70px] md:h-[70px]  w-[50px] h-[50px]">
              <Image alt="product" src={""} fill objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-1 md:text-base text-sm text-black-80">
              New UBL Bluetooth Speaker
            </span>
            <div className="flex items-center gap-2">
              <span className="text-positive text-[10px] md:text-xs">UBL</span>
              <span className="text-black-10">|</span>
              <StarRating rating={4} />
            </div>
            <div className="flex items-center justify-between gap-5"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black-80 text-xs">$500.22</span>
            <span>
              <IconX stroke={1} height={12} width={12} />
            </span>
            {/* <IncreaseDecrease /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button>
          <IconX stroke={1} color="red" height={16} width={16} />
        </button>
        <strong className="font-semibold text-gradient-primary text-base">
          $1500.66
        </strong>
      </div>
    </div>
  );
};
