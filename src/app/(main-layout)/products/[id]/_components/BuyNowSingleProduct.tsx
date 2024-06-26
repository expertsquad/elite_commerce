"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { storages } from "@/constants";
import { setLocalStorageData } from "@/helpers/localStorage.helper";
import { IProduct } from "@/interfaces/product.interface";
import { formatProductForCart } from "@/utils/formatProductForCart.utils";
import { IconShoppingBag } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const BuyNowSingleProduct = ({ product }: { product: IProduct }) => {
  const router = useRouter();

  const { orderData, setRefetch } = useContext(OrderInitContext);

  //handling single product to direct order
  const handleSingleProductClick = (product: IProduct) => {
    const formattedProduct = formatProductForCart({
      product: product,
    });

    // Update the orderItems with the formatted product
    setLocalStorageData(storages.orderInit, {
      ...orderData,
      orderItems: [formattedProduct],
    });
    setRefetch((prev) => prev + 1);

    router.push("/shipping-info");
  };

  return (
    <button
      className="bg-gradient-primary-light rounded-md w-full flex items-center justify-center gap-x-1.5  py-2 "
      onClick={() => handleSingleProductClick(product)}
    >
      <GenerateGradientIcon
        IconComponent={IconShoppingBag}
        stroke={2}
        size={20}
      />
      BUY NOW
    </button>
  );
};

export default BuyNowSingleProduct;
