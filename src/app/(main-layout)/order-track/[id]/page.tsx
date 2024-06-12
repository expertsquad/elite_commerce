import { fetchData } from "@/actions/fetchData";
import OrderStatusStep from "./_components/OrderStatusStep";
import OrderInformation from "./_components/OrderInformation";

const OrderTrackPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetchData({ route: `/online-order/${params?.id}` });
  console.log(response?.data, "response");
  return (
    <div className="max-w-7xl mx-auto">
      <OrderStatusStep />
      <div className="flex items-center justify-between">
        <div className="w-2/3"></div>
        <div className="w-1/3">
          <OrderInformation />
        </div>
      </div>
    </div>
  );
};

export default OrderTrackPage;
