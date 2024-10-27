import { IconBolt } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { IProduct } from "@/interfaces/product.interface";
import { calculateQuickOrderTotal } from "./calculateQuickOrderTotal";
import { calculateProductsTotalDiscount } from "@/constants/calculateProductsTotalDiscount";

interface IOrderSummaryProps {
  products: IProduct[];
  loading: boolean;
  currencyIcon?: string;
  shippingAmount: number;
}

export const OrderSummary = ({
  products,
  loading,
  currencyIcon,
  shippingAmount,
}: IOrderSummaryProps) => {
  const totalAmount = calculateQuickOrderTotal({ products });

  const totalDiscountAmount = calculateProductsTotalDiscount(products);
  const total = totalAmount + shippingAmount;

  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white drop-shadow-2xl md:drop-shadow-none">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          {totalAmount}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          {shippingAmount}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">
          Discount{" "}
          <small className="text-positive">
            (You&rsquo;ve saved {totalDiscountAmount})
          </small>
        </span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -{currencyIcon}
          {0}
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          {currencyIcon}
          {total}
        </strong>
      </div>
      <div className="md:block hidden">
        <ButtonPrimary
          buttonType={"submit"}
          className={`${loading && "cursor-wait opacity-60"}`}
        >
          {!loading && <IconBolt size={18} className="fill-white" />}
          <span>
            {loading ? (
              "Order Processing..."
            ) : (
              <span className="uppercase">{`Confirm Order - ${total}`}</span>
            )}
          </span>
        </ButtonPrimary>
      </div>
    </div>
  );
};
