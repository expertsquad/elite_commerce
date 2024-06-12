import { fetchData } from "@/actions/fetchData";
import OrderStatusStep from "./_components/OrderStatusStep";

const OrderTrackPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetchData({ route: `/online-order/${params?.id}` });
  console.log(response?.data, "response");
  return (
    <div className="max-w-7xl mx-auto">
      <OrderStatusStep />
    </div>
  );
};

export default OrderTrackPage;
