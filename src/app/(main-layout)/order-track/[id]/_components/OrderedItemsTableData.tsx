import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import OrderCancelModal from "./OrderCancelModal";
import { fetchData } from "@/actions/fetchData";

const OrderedItemsTableData = async ({
  orderItems,
  id,
  orderStatusLength,
}: {
  orderItems: OrderItemsTypes[];
  id: string;
  orderStatusLength: number;
}) => {
  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });

  return (
    <section>
      <div className="hidden md:flex bg-[#F7F7F7] px-3 py-2 text-sm font-medium mb-5 w-full">
        <span className="w-[45%]">Product Name</span>
        <span className="w-[15%]">Un Price</span>
        <span className="w-[15%]">Qty</span>
        <span className="w-[15%]">Total</span>
        <span className="w-[10%]"></span>
      </div>
      <div>
        {orderItems?.map((item: OrderItemsTypes) => (
          <div key={item?._id} className="mb-5 flex items-center">
            <div className="flex items-center w-full md:w-[45%]">
              <div className="w-[50px] h-[60px] md:h-[50px] shrink-0 relative bg-gradient-primary-light rounded-md mr-2.5">
                <Image
                  src={`${server_url + item?.productPhotos[0]}`}
                  alt="product photo"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  className="inset-0 top-0 left-0 object-contain p-1.5"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-x-2 justify-between">
                  <span className="line-clamp-1 text-sm md:text-base">
                    {item?.productName}
                  </span>
                  {orderStatusLength <= 2 && (
                    <div className="block md:hidden">
                      <OrderCancelModal id={id} />
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-xs md:text-sm">
                    {item?.brand?.brandName}
                  </span>
                  <span className="text-black-10">|</span>
                  <div>
                    <StarRating rating={2} />
                  </div>
                </div>
                <div className="md:hidden flex items-center justify-between">
                  <div className="flex items-center gap-x-1 text-black-80">
                    <span className="text-sm">
                      {currencyIcon?.data?.currencySymbol}
                      {item?.variant?.discountedPrice}
                    </span>
                    <span className="text-sm">
                      <IconX size={16} />
                    </span>
                    <span className="text-sm">{item?.orderQuantity}</span>
                  </div>
                  <span className="text-sm font-bold text-gradient-primary">
                    {currencyIcon?.data?.currencySymbol}
                    {item?.variant?.sellingPrice * item?.orderQuantity}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-[14%]">
              {item?.variant?.discountedPrice ? (
                <span className="text-sm md:text-base">
                  {currencyIcon?.data?.currencySymbol}
                  {item?.variant?.discountedPrice}
                </span>
              ) : (
                <span className="text-sm md:text-base">
                  {currencyIcon?.data?.currencySymbol}
                  {item?.variant?.sellingPrice}
                </span>
              )}
            </div>
            <div className="hidden md:flex items-center md:w-[15%]">
              <IconX size={16} stroke={1} className="text-black-80" />
              <span>{item?.orderQuantity}</span>
            </div>
            <div className="hidden md:block font-bold text-gradient-primary md:w-[15%]">
              {currencyIcon?.data?.currencySymbol}
              {item?.subTotalPayable?.toFixed(2)}
            </div>
            <div className="hidden md:w-[10%] md:flex items-center justify-center">
              {orderStatusLength <= 2 && (
                <div>
                  <OrderCancelModal id={id} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderedItemsTableData;
