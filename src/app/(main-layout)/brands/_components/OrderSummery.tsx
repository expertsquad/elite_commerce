import { IconBolt } from "@tabler/icons-react";
import ButtonPrimary from "./ButtonPrimary";

export const OrderSummery = () => {
  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>1300</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>14</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -$<span>50</span>
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          $<span></span>
        </strong>
      </div>
      <div className="md:block hidden">
        <ButtonPrimary buttonType="submit">
          <IconBolt height={18} width={18} />
          <span className="uppercase">Confirm Order - $1264.00</span>
        </ButtonPrimary>
      </div>
    </div>
  );
};
