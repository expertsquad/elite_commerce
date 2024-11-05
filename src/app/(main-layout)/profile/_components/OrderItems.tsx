import OrderCardHeader from "./OrderCardHeader";
import { Button } from "@/Components/Buttons";
import Link from "next/link";
import OrderItemsCard from "./OrderItemsCard";
import { Order } from "@/interfaces/oreder.interface";
import { dateFormat } from "@/utils/dateFormat";

const OrderItems = ({
  order,
  currency,
}: {
  order: Order;
  currency?: string;
}) => {
  return (
    <div className=" md:shadow-order-history-card-shadow shadow-none border border-black-10 md:border-transparent mt-5 p-5 rounded-lg">
      {/* Order top section start */}
      <div className="flex items-start lg:items-center md:justify-between flex-col lg:flex-row  border border-transparent lg:border lg:border-black-10 px-0 lg:px-4 py-3 rounded-lg gap-5">
        <div className="flex justify-between lg:justify-start gap-5 border border-black-10 rounded-lg lg:border-transparent w-full lg:w-7/12 p-3">
          <OrderCardHeader
            title="Order ID"
            value={order?.orderId}
            className="[font-size:_clamp(0.5em,5vw,0.9em)]"
          />
          <OrderCardHeader
            title="Order Date"
            value={dateFormat(order?.createdAt)}
            className="[font-size:_clamp(0.5em,5vw,0.9em)]"
          />
        </div>
        <div className="flex items-start gap-3">
          <Link
            href={`/order-track/${order?._id}`}
            className="border-gradient-primary p-[1px] rounded-md whitespace-nowrap"
          >
            <Button className="text-primary-light text-xs md:text-base px-5 py-2 hover:bg-gradient-primary-light">
              Track Order
            </Button>
          </Link>
          <span
            className={`whitespace-nowrap text-xs md:text-base ${
              order?.existOrderStatus?.status === "Order placed"
                ? "bg-black-10  px-5 rounded-md py-2"
                : order?.existOrderStatus?.status === "Packaging"
                ? "bg-gradient-secondary-light text-secondary-color  px-5 rounded-md py-2"
                : order?.existOrderStatus?.status === "Shipping"
                ? "bg-gradient-primary-light text-primary-color  px-5 rounded-md py-2"
                : order?.existOrderStatus?.status === "Delivered"
                ? "bg-gradient-positive text-positive    px-5 rounded-md py-2"
                : order?.existOrderStatus?.status === "Rejected"
                ? "bg-[#BF17221A] px-5 text-[#BF1722] rounded-md py-2"
                : order?.existOrderStatus?.status === "Pending"
                ? "bg-[#4114851A] text-[#411485] px-5 rounded-md py-2"
                : order?.existOrderStatus?.status === "Returned"
                ? "text-[#A33B3B] bg-[#F8EEEE] rounded-md py-2 px-5"
                : order?.existOrderStatus?.status === "Cancelled"
                ? "bg-[#FFE5E5] text-[#FF3838] rounded-md py-2 px-5"
                : ""
            } " px-5 rounded-md py-2"`}
          >
            {order?.existOrderStatus?.status}
          </span>
        </div>
      </div>
      {/* Order top section finish */}
      {/* Order items card */}
      {order?.orderItems?.map((orderItem) => (
        <OrderItemsCard
          currency={currency}
          key={orderItem._id}
          orderItem={orderItem}
          orderStatus={order?.existOrderStatus?.status}
        />
      ))}

      {/* bottom section total order  */}
      <div className="flex justify-between w-full pt-5">
        <div className="flex items-center justify-center gap-2 ">
          {" "}
          <p className="[font-size:_clamp(0.5em,5vw,1em)]">
            Total Order :{" "}
            <small className="text-black-50">
              ({order?.orderItems.length} Items , {order?.totalQuantity}{" "}
              Quantity)
            </small>
          </p>{" "}
        </div>
        <h3 className="[font-size:_clamp(0.8em,5vw,1.5em)] text-gradient-primary font-bold">
          {currency}
          {order?.totalPayable}
        </h3>
      </div>
    </div>
  );
};

export default OrderItems;
