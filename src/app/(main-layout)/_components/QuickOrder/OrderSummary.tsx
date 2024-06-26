import { IconBolt } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { IProduct } from "@/interfaces/product.interface";

interface IOrderSummaryProps {
  products: IProduct[];
  loading: boolean;
}

export const OrderSummary = ({ products, loading }: IOrderSummaryProps) => {
  const subtotal = products?.reduce((acc, product: IProduct) => {
    const productTotal =
      product?.orderQuantity * (product?.variant?.discountedPrice ?? 0);

    if (product.bulk && product.orderQuantity >= product.bulk.minOrder) {
      return acc + productTotal * (1 - product.bulk.discount / 100);
    }

    return acc + productTotal;
  }, 0);

  const shipping = 100;

  const discount = 50;

  const total = subtotal + shipping - discount;

  return (
    <div className="md:border border-black-10 rounded-[10px] px-5 py-3.5  space-y-2.5 bg-white drop-shadow-2xl md:drop-shadow-none">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          ${subtotal}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          ${shipping}
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -${discount}
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          ${total}
        </strong>
      </div>
      <div className="md:block hidden">
        <ButtonPrimary buttonType={"submit"}>
          <IconBolt height={20} width={20} />
          <span className="uppercase">
            {loading ? "Order Processing..." : ` Confirm Order - ${total}`}
          </span>
        </ButtonPrimary>
      </div>
    </div>
  );
};
