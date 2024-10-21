import { ICartProduct } from "@/interfaces/cart.interface";
import { updateCart } from "@/utils/updateCart.utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const IncreaseDecreaseCartItems = ({
  product,
  setRefetch,
  className,
  btnStyle,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  btnStyle?: string;
}) => {
  const handleIncreaseQuantity = () => {
    updateCart({ actionType: "add", product: product });
    setRefetch((prev) => prev + 1);
  };
  const handleDecreaseQuantity = () => {
    updateCart({ actionType: "decrease", product: product });
    setRefetch((prev) => prev + 1);
  };
  return (
    <div
      className={`bg-gradient-primary-light rounded-full py-2 px-3 flex items-center justify-center gap-x-2 ${className}`}
    >
      <button
        className={`bg-gradient-primary rounded-full p-0.5 ${btnStyle}`}
        onClick={handleDecreaseQuantity}
      >
        <IconMinus className="text-white" stroke={1.5} />
      </button>
      <strong className="text-base font-normal">
        {product?.orderQuantity}
      </strong>
      <button
        className={`bg-gradient-primary rounded-full p-0.5 ${btnStyle}`}
        onClick={handleIncreaseQuantity}
      >
        <IconPlus className="text-white" stroke={1.5} />
      </button>
    </div>
  );
};

export default IncreaseDecreaseCartItems;
