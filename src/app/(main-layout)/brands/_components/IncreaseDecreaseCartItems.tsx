import { ICartProduct } from "@/interfaces/cart.interface";
import { updateCart } from "@/utils/updateCart.utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const IncreaseDecreaseCartItems = ({
  product,
  setRefetch,
}: {
  product: ICartProduct;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
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
    <div className="bg-gradient-primary-light rounded-full py-2 px-3 flex items-center justify-center gap-x-2">
      <button
        className="bg-gradient-primary rounded-full p-0.5"
        onClick={handleDecreaseQuantity}
      >
        <IconMinus className="text-white" stroke={1.5} size={18} />
      </button>
      <strong className="text-base font-normal">
        {product?.orderQuantity}
      </strong>
      <button
        className="bg-gradient-primary rounded-full p-0.5"
        onClick={handleIncreaseQuantity}
      >
        <IconPlus className="text-white" stroke={1.5} size={18} />
      </button>
    </div>
  );
};

export default IncreaseDecreaseCartItems;
