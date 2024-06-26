"use client";
import { IOrderData, OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { storages } from "@/constants";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useContext } from "react";

const IncreaseDecreaseOrderItems = ({ product }: { product: ICartProduct }) => {
  const { orderData, setRefetch } = useContext(OrderInitContext);

  const handleIncreaseQuantity = () => {
    if (product?.orderQuantity < product?.variant?.inStock) {
      let updateOrderItems = orderData?.orderItems;
      const productIndex = orderData?.orderItems?.findIndex(
        (item) => item.productId === product.productId
      );
      const existProduct = orderData?.orderItems?.find(
        (item) => item.productId === product.productId
      );
      updateOrderItems = [
        ...updateOrderItems.slice(0, productIndex),
        {
          ...existProduct,
          orderQuantity: (existProduct?.orderQuantity || 1) + 1,
        },
        ...updateOrderItems.slice(productIndex + 1),
      ] as ICartProduct[];

      setLocalStorageData(storages.orderInit, {
        ...orderData,
        orderItems: updateOrderItems,
      });
      setRefetch((prev) => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (product?.orderQuantity > 1) {
      let updateOrderItems = orderData?.orderItems;
      const productIndex = orderData?.orderItems?.findIndex(
        (item) => item.productId === product.productId
      );
      const existProduct = orderData?.orderItems?.find(
        (item) => item.productId === product.productId
      );
      updateOrderItems = [
        ...updateOrderItems.slice(0, productIndex),
        {
          ...existProduct,
          orderQuantity: (existProduct?.orderQuantity || 1) - 1,
        },
        ...updateOrderItems.slice(productIndex + 1),
      ] as ICartProduct[];

      setLocalStorageData(storages.orderInit, {
        ...orderData,
        orderItems: updateOrderItems,
      });
      setRefetch((prev) => prev + 1);
    }
  };
  return (
    <div className="bg-gradient-primary-light rounded-full px-1 py-[3px] flex items-center gap-2">
      <button
        className="bg-gradient-primary rounded-full p-1"
        onClick={handleDecreaseQuantity}
      >
        <IconMinus className="text-white" stroke={1.5} width={13} height={13} />
      </button>
      <strong className="text-xs font-normal">{product?.orderQuantity}</strong>
      <button
        className="bg-gradient-primary rounded-full p-1"
        onClick={handleIncreaseQuantity}
      >
        <IconPlus className="text-white" stroke={1.5} width={13} height={13} />
      </button>
    </div>
  );
};

export default IncreaseDecreaseOrderItems;
