"use client";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { IProduct } from "@/interfaces/product.interface";
import { formatProductForCart } from "@/utils/formatProductForCart.utils";
import { IconShoppingBag } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const BuyNowSingleProduct = ({ product }: { product: IProduct }) => {
  const router = useRouter();

  const { orderData, setOrderData } = useContext(OrderInitContext);
  console.log(orderData);

  //handling single product to direct order
  const handleSingleProductClick = (product: IProduct) => {
    const formattedProduct = formatProductForCart({
      product: product,
      selectedVariant: product?.variants?.[0],
    });

    // Update the orderItems with the formatted product
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      orderItems: [...prevOrderData.orderItems, formattedProduct],
    }));
    router.push("/shipping-info");
  };

  return (
    <button
      className="bg-gradient-primary-light rounded-md w-full"
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
