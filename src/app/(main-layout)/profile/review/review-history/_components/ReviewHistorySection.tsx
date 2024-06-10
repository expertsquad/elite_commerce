import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import ReviewCard from "../../_components/ReviewCard";
import { Order } from "@/interfaces/oreder.interface";

const ReviewHistorySection = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const allOrder = await fetchData({
    route: "/online-order",
    query: `buyer.userId=${getMe?.data?._id}&orderItems.isReviewed=true`,
    // query: `reviewer.userId=${getMe?.data?._id}`,
  });

  console.log(allOrder);

  return (
    <div>
      {" "}
      {allOrder?.data?.map((order: Order) => (
        <div key={order._id}>
          {order.orderItems.map((orderItem: any) => (
            <ReviewCard
              key={orderItem._id}
              orderItem={orderItem}
              createdAt={order?.createdAt}
              orderStatus={order?.orderStatus?.status}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReviewHistorySection;
