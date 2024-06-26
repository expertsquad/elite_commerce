import OrderSection from "../_components/OrderSection";
import OrderHistory from "./components/OrderHistory";

const page = () => {
  return (
    <div>
      <OrderHistory />

      <OrderSection />
    </div>
  );
};

export default page;
