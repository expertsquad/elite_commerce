import { IconBolt } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { IProduct } from "@/interfaces/product.interface";

interface IOrderSummaryProps {
  products: IProduct[];
  loading: boolean;
  currencyIcon?: string;
}

export const OrderSummary = ({
  products,
  loading,
  currencyIcon,
}: IOrderSummaryProps) => {
  const subtotal = products?.reduce((acc, product: IProduct) => {
    const productTotal =
      product?.orderQuantity * (product?.variant?.discountedPrice ?? 0);

    if (product.bulk && product.orderQuantity >= product.bulk.minOrder) {
      return acc + productTotal * (1 - product.bulk.discount / 100);
    }

    return acc + productTotal;
  }, 0);

  const shipping = 0;

  const discount = 0;

  const total = subtotal + shipping - discount;

  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white drop-shadow-2xl md:drop-shadow-none">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          {subtotal}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          {shipping}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -{currencyIcon}
          {discount}
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
          {!loading && <IconBolt height={20} width={20} />}
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
