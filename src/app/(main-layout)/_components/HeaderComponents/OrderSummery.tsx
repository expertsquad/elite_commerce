import { storages } from "@/constants";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import Link from "next/link";
import { useContext } from "react";
import QuickOrderButton from "../../brands/_components/QuickOrderButton";
import { IconBolt, IconShoppingCart } from "@tabler/icons-react";
import ButtonPrimary from "../../brands/_components/ButtonPrimary";
import { useGetShippingFee } from "@/utils/shppingCharge/getShippingFee";

const OrderSummery = ({
  setshow,
  products,
  // shippingFee,
  calculateTotalPriceAndDiscountOfCart,
}: {
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
  products: ICartProduct[];
  shippingFee: number;
  calculateTotalPriceAndDiscountOfCart: (products: ICartProduct[]) => {
    totalDiscount: number;
    totalPrice: number;
  };
}) => {
  const { orderData, setRefetch } = useContext(OrderInitContext);

  const { totalDiscount, totalPrice } =
    calculateTotalPriceAndDiscountOfCart(products);
  const shippingFee = useGetShippingFee({ soldAmount: totalPrice }) || 0;
  const calculateTotalWithShipping = totalPrice + shippingFee;
  const totalPayable = calculateTotalWithShipping - totalDiscount;

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
          $<span>{totalPrice}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Shipping</span>
        <strong className="text-black-80 md:text-base text-sm font-semibold">
          $<span>{shippingFee}</span>
        </strong>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-base text-sm">Discount</span>
        <strong className="text-gradient-secondary md:text-base text-sm font-semibold">
          -$<span>{totalDiscount}</span>
        </strong>
      </div>
      <hr className="border-black-10 border my-3.5" />
      <div className="flex items-center justify-between ">
        <span className="text-black-80 md:text-lg text-base font-semibold">
          Total
        </span>
        <strong className="text-black-80 md:text-lg text-base font-semibold">
          $<span>{totalPayable}</span>
        </strong>
      </div>
      <div className="flex items-center justify-center gap-5 md:px-5">
        <QuickOrderButton
          product={products}
          buttonStyle="!uppercase !text-black-80 !whitespace-nowrap py-[clamp(2px,1.2vh,20px)] flex items-center justify-center gap-2.5 px-5 w-full py-3.5 bg-gradient-primary-light  text-white rounded-lg"
          buttonIcon={<IconBolt size={20} fill="#fff" />}
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
            <IconShoppingCart height={18} width={18} />
            Check Out
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummery;
