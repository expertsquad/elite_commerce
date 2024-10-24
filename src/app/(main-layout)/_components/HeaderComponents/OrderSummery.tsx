import { storages } from "@/constants";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import Link from "next/link";
import { useContext } from "react";
import QuickOrderButton from "../../brands/_components/QuickOrderButton";
import { IconBolt, IconShoppingCart } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";

const OrderSummery = ({
  setshow,
  products,
  shippingFee,
  calculateTotalPriceAndDiscountOfCart,
  currencyIcon,
}: {
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
  products: ICartProduct[];
  shippingFee: number;
  calculateTotalPriceAndDiscountOfCart: (products: ICartProduct[]) => {
    totalDiscount: number;
    totalPrice: number;
  };
  currencyIcon?: string;
}) => {
  const { orderData, setRefetch } = useContext(OrderInitContext);

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);
  // handle init order
  const handleAddToInitOrder = () => {
    setLocalStorageData(storages.orderInit, {
      ...orderData,
      orderItems: products,
    });
    setRefetch((prev) => prev + 1);
  };

  return (
    <div className="md:border border-black-10 rounded-[10px] md:px-5 py-[clamp(2px,1.5vh,20px)] space-y-[clamp(2px,.5vh,20px)] bg-white">
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Subtotal</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          <span>{totalPrice}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between !my-2">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          {currencyIcon}
          <span>{shippingFee}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <p className={`${shippingFee ? "" : "text-primary-light"}`}>
          {shippingFee
            ? currencyIcon
              ? currencyIcon
              : "" + shippingFee
            : "You Got Free Shipping"}
        </p>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between !py-2">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          {currencyIcon}
          <span>{totalPrice + shippingFee} </span>
        </strong>
      </div>
      <div className="flex items-center justify-center gap-5 md:px-5">
        <QuickOrderButton
          product={products}
          buttonStyle="!uppercase !text-black-80 !whitespace-nowrap py-[clamp(2px,1.2vh,20px)] flex items-center justify-center gap-2.5 px-5 w-full py-3.5 bg-gradient-primary-light hover:bg-gradient-primary hover:text-white  text-white rounded-lg"
          buttonIcon={<IconBolt size={18} />}
          buttonText="QUICK ORDER"
        />
        <Link
          href="/shipping-info"
          className="w-full"
          onClick={handleAddToInitOrder}
        >
          <ButtonPrimary
            onClick={() => setshow(false)}
            className="!uppercase !whitespace-nowrap py-[clamp(2px,1.2vh,20px)]"
          >
            <IconShoppingCart size={18} />
            Check Out
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummery;
