import OrderPlacedThankYou from "@/app/(main-layout)/successfull/[id]/_components/OrderPlacedThankYou";
import TotalSubTotalShippingFee from "@/app/(main-layout)/successfull/[id]/_components/TotalSubTotalShippingFee";
import { server_url } from "@/constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import { formatDate } from "@/constants/formateDate.constants";
import { fetchData } from "@/actions/fetchData";
import { orderPlacedDesign } from "@/assets";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Order Successful | ${shopInfo?.data?.shopName}`,
      description: `Thank you for shopping with ${shopInfo?.data?.shopName}! Your order has been placed successfully. We are preparing your items for delivery.`,
    };
  } catch (error) {
    return {
      title: "Order Successful",
      description:
        "Thank you for your order! Your purchase has been completed successfully, and we are preparing your items for delivery.",
    };
  }
}

interface Params {
  id: string;
}

interface SearchParams {
  orderId: string;
  [key: string]: any;
}

const SuccessPage = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const response = await fetchData({
    route: `/online-order/${searchParams?.orderId}`,
  });

  const currencyIcon = await fetchData({
    route: "/settings/shop",
  });

  return (
    <div className="max-w-7xl mx-auto md:px-0 flex flex-col-reverse md:flex-row md:items-center md:gap-x-6 mb-6 md:mb-16">
      <div className="flex-1 md:w-1/2 md:h-[700px] bg-[#333333] text-white px-2 md:px-[30px] md:py-[30px] py-5 md:rounded-lg relative">
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
            Payment:{" "}
            {response?.data?.payment?.paymentMethod ||
              response?.data?.payment?.paymentGateway}
          </span>
        </div>
        <div className="mt-[30px] max-h-[400px] overflow-y-scroll scrollbar-y-remove">
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
                    <span>
                      {currencyIcon?.data?.currencySymbol}
                      {item?.variant?.discountedPrice}
                    </span>
                  </div>
                  <span>
                    {currencyIcon?.data?.currencySymbol}
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
          currencySymbol={currencyIcon?.data?.currencySymbol}
        />
      </div>
      <div className="md:w-1/2 bg-[#2943931A] bg-opacity-10 md:rounded-lg">
        <div className="flex items-center">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image src={orderPlacedDesign} alt="order placed design" />
            </div>
          ))}
        </div>
        <OrderPlacedThankYou id={searchParams?.orderId} />
      </div>
    </div>
  );
};

export default SuccessPage;
