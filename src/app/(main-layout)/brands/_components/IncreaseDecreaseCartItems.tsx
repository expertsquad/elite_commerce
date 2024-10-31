import { ICartProduct } from "@/interfaces/cart.interface";
import { IProductVariant } from "@/interfaces/product.interface";
import { updateCart } from "@/utils/updateCart.utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const IncreaseDecreaseCartItems = ({
  product,
  variant,
  setRefetch,
  className,
  btnStyle,
}: {
  product: ICartProduct;
  variant?: IProductVariant;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  btnStyle?: string;
}) => {
  const handleIncreaseQuantity = () => {
    updateCart({ actionType: "add", product: product, variant });
    setRefetch((prev) => prev + 1);
  };
  const handleDecreaseQuantity = () => {
    updateCart({ actionType: "decrease", product: product, variant });
    setRefetch((prev) => prev + 1);
  };

  const isQuantityOverStock =
    product?.orderQuantity >= product?.variant?.inStock;

  return (
    <div
      className={`bg-gradient-primary-light rounded-full py-2 px-3 flex items-center justify-center gap-x-2 border border-transparent ${className}`}
    >
      <button
        className={`bg-gradient-primary rounded-full p-0.5 ${btnStyle}`}
        onClick={handleDecreaseQuantity}
      >
        <IconMinus className="text-white" size={18} />
      </button>
      <strong className="text-base font-normal">
        {product?.orderQuantity}
      </strong>
      <button
        title={`${
          isQuantityOverStock ? "Quantity over stock" : "Increase quantity"
        }`}
        disabled={isQuantityOverStock}
        className={`bg-gradient-primary ${
          isQuantityOverStock && "cursor-wait"
        } rounded-full p-0.5 ${btnStyle}`}
        onClick={handleIncreaseQuantity}
      >
        <IconPlus className="text-white" size={18} />
      </button>
    </div>
  );
};

export default IncreaseDecreaseCartItems;
