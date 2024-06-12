import { fetchData } from "@/actions/fetchData";
import OrderPlacedThankYou from "./_components/OrderPlacedThankYou";
import { formatDate } from "@/constants/formateDate.constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import Image from "next/image";
import { server_url } from "@/constants";
import TotalSubTotalShippingFee from "./_components/TotalSubTotalShippingFee";
import { IconX } from "@tabler/icons-react";
import { orderPlacedDesignTemplate } from "@/assets";

const OrderSuccessfull = async ({ params }: { params: { id: string } }) => {
  const response = await fetchData({ route: `/online-order/${params?.id}` });
  console.log(response?.data, "response");
  return (
    <div className="max-w-7xl mx-auto md:px-0 flex flex-col-reverse md:flex-row md:items-center md:gap-x-6 mb-6 md:mb-16">
      <div className="flex-1 md:w-1/2 bg-[#333333] text-white px-2 md:px-[30px] md:py-[30px] py-5 md:rounded-lg relative">
        <div className="flex items-center justify-between">
          <span>Order Details</span>
          <span className="font-light">
            Date: {formatDate(response?.data?.createdAt)}
          </span>
        </div>
        <div className="flex items-center justify-between font-light mt-2">
          <span className="text-sm md:text-base">
            Order Id: #{response?.data?.orderId}
          </span>
          <span className="text-sm md:text-base">
            Payment: {response?.data?.payment?.paymentMethod}
          </span>
        </div>
        <div className="mt-[30px]">
          {response?.data?.orderItems?.map((item: OrderItemsTypes) => (
            <div
              key={item?._id}
              className="flex items-center gap-x-2.5 mb-5 bg-[#fff] bg-opacity-10 p-2 md:p-5 rounded-md"
            >
              <div className="relative shrink-0 h-[65px] w-[65px] bg-white-15 rounded-md">
                <Image
                  src={`${server_url + item?.productPhotos[0]}`}
                  alt="Product Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full top-0 left-0 object-cover p-2"
                />
              </div>
              <div className="w-full">
                <span className="line-clamp-2 text-sm md:text-base font-light">
                  {item?.productName}
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1">
                    <span>{item?.orderQuantity}</span>
                    <IconX size={18} />
                    <span>${item?.variant?.discountedPrice}</span>
                  </div>
                  <span>
                    $
                    {(
                      item?.variant?.discountedPrice * item?.orderQuantity
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TotalSubTotalShippingFee
          shipping={response?.data?.shippingCharge}
          total={response?.data?.totalPayable}
          subTotal={response?.data?.totalPrice}
          discount={response?.data?.totalDiscount}
        />
      </div>
      <div className="md:w-1/2">
        <OrderPlacedThankYou />
      </div>
    </div>
  );
};

export default OrderSuccessfull;
