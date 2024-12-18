import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import OrderStatusStep from "./_components/OrderStatusStep";
import OrderInformation from "./_components/OrderInformation";
import OrderSummary from "./_components/OrderSummary";
import OrderedItems from "./_components/OrderedItems";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Track Your Order | ${shopInfo?.data?.shopName}`,
      description: `Easily track your order status at ${shopInfo?.data?.shopName}. Stay updated on your orders progress and estimated delivery date.`,
    };
  } catch (error) {
    return {
      title: "Track Your Order",
      description:
        "Easily track your order status. Stay updated on your order’s progress and estimated delivery date.",
    };
  }
}

const OrderTrackPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetchProtectedData({
    route: `/online-order/${params?.id}`,
  });
  const currencyIcon = await fetchProtectedData({
    route: "/settings/shop",
  });

  return (
    <div className="main-container mb-10 md:mb-28">
      <OrderStatusStep orderStatus={response?.data?.orderStatuses} />

      <div className="flex flex-col md:flex-row md:justify-between md:gap-x-7 mt-[30px]">
        <div className="md:w-2/3 flex flex-col gap-y-6">
          <OrderedItems
            id={params?.id}
            createdAt={response?.data?.createdAt}
            orderId={response?.data?.orderId}
            orderItems={response?.data?.orderItems}
            orderQuanity={response?.data?.totalQuantity}
            updatedAt={response?.data?.updatedAt}
            orderStatusLength={response?.data?.orderStatuses?.length}
          />
          <OrderSummary
            shipping={response?.data?.shippingCharge}
            total={response?.data?.totalPayable}
            subTotal={response?.data?.totalPrice}
            discount={
              response?.data?.totalDiscount ||
              response?.data?.additionalDiscount
            }
            orderQuanity={response?.data?.totalQuantity}
            orderItemsLength={response?.data?.orderItems?.length}
            currencyIcon={currencyIcon?.data?.currencySymbol}
            totalBulkDiscount={response?.data?.totalBulkDiscount}
          />
        </div>
        <div className="md:w-1/3">
          <OrderInformation
            ordreInformation={response?.data?.buyer}
            paymentMethod={response?.data?.payment?.paymentMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderTrackPage;
