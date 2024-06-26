import { IconBolt } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";

interface IOrderSummaryProps {
  subTotal?: number;
  shipping?: number;
  discount?: number;
  grandTotal?: number;
}

export const OrderSummary = ({
  discount,
  grandTotal,
  shipping,
  subTotal,
}: IOrderSummaryProps) => {
  const calculateGrandTotal = () => {
    let total = subTotal || 0;
    if (discount) {
      total = total - discount;
    }
    if (shipping) {
      total = total + shipping;
    }
    return total;
  };
  console.log(calculateGrandTotal());
  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white drop-shadow-2xl md:drop-shadow-none">
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
          ${calculateGrandTotal()}
        </strong>
      </div>
      <div className="md:block hidden">
        <ButtonPrimary buttonType="submit">
          <IconBolt height={18} width={18} />
          <span className="uppercase">
            Confirm Order - ${calculateGrandTotal()}
          </span>
        </ButtonPrimary>
      </div>
    </div>
  );
};
