import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import OrderCancelModal from "./OrderCancelModal";

const OrderedItemsTableData = ({
  orderItems,
}: {
  orderItems: OrderItemsTypes[];
}) => {
  return (
    <section>
      <div className="hidden md:order-item-data bg-[#F7F7F7] px-3 py-2 text-sm font-medium mb-5">
        <span>Product Name</span>
        <span>Un Price</span>
        <span>Qty</span>
        <span>Total</span>
      </div>
      <div>
        {orderItems?.map((item: OrderItemsTypes) => (
          <div
            key={item?._id}
            className="mb-5 flex items-center md:order-item-data"
          >
            <div className="flex items-center w-full">
              <div className="w-[50px] h-[50px] shrink-0 relative bg-gradient-primary-light rounded-md mr-2.5">
                <Image
                  src={`${server_url + item?.productPhotos[0]}`}
                  alt="product photo"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="w-full h-full top-0 left-0 object-cover p-2"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-x-2 justify-between">
                  <span className="line-clamp-1 text-sm md:text-base">
                    {item?.productName}
                  </span>
                  <div className="block md:hidden">
                    <OrderCancelModal id={item?._id} />
                  </div>
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
                      ${item?.variant?.discountedPrice}
                    </span>
                    <span className="text-sm">
                      <IconX size={16} />
                    </span>
                    <span className="text-sm">{item?.orderQuantity}</span>
                  </div>
                  <span className="text-sm font-bold text-gradient-primary">
                    ${item?.variant?.sellingPrice * item?.orderQuantity}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {item?.variant?.discountedPrice ? (
                <span className="text-sm md:text-base">
                  ${item?.variant?.discountedPrice}
                </span>
              ) : (
                <span className="text-sm md:text-base">
                  ${item?.variant?.sellingPrice}
                </span>
              )}
            </div>
            <div className="hidden md:flex items-center">
              <IconX size={16} className="text-black-80" />
              <span>{item?.orderQuantity}</span>
            </div>
            <div className="hidden md:block font-bold text-gradient-primary">
              ${item?.subTotalPayable?.toFixed(2)}
            </div>
            <div className="hidden md:block">
              <OrderCancelModal id={item?._id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderedItemsTableData;
