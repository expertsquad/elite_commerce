import { fetchData } from "@/actions/fetchData";
import OrderPlacedThankYou from "./_components/OrderPlacedThankYou";
import { formatDate } from "@/constants/formateDate.constants";
import { OrderItemsTypes } from "@/interfaces/orderitems.interface";
import Image from "next/image";
import { server_url } from "@/constants";
import TotalSubTotalShippingFee from "./_components/TotalSubTotalShippingFee";

const OrderSuccessfull = async ({ params }: { params: { id: string } }) => {
  const response = await fetchData({ route: `/online-order/${params?.id}` });
  console.log(response?.data, "response");
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 flex flex-col md:flex-row items-center md:gap-x-6">
      <div className="flex-1 bg-[#333333] text-white px-5 md:px-[30px] py-[30px] rounded-lg">
        <div className="flex items-center justify-between">
          <span>Order Details</span>
          <span>Date: {formatDate(response?.data?.createdAt)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Order Id: #{response?.data?.orderId}</span>
          <span>Payment: {response?.data?.payment?.paymentMethod}</span>
        </div>
        <div className="bg-white bg-opacity-10">
          {response?.data?.orderItems?.map((item: OrderItemsTypes) => (
            <div key={item?._id}>
              <div className="relative shrink-0 h-[65px] w-[65px]">
                <Image
                  src={`${server_url + item?.productPhotos[0]}`}
                  alt="Product Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full top-0 left-0 object-cover"
                />
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
      <OrderPlacedThankYou />
    </div>
  );
};

export default OrderSuccessfull;
