import { fetchProtectedData } from "@/actions/fetchData";
import ShippingInfoContent from "../_components/ShippingInfoContent";
import ShippingAddess from "../_components/ShippingAddess";
import AddNewShippingAddress from "../_components/AddNewShippingAddress";
import OrderItemsRightSection from "../_components/OrderItemsRightSection";
import ShipToCard from "./_components/ShipToCard";
import ShipToAndBillingSection from "./_components/ShipToAndBillingSection";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <section className="max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <ShipToAndBillingSection getMe={getMe} />
      </div>

      <div className="">
        {/* We will add here link to go to next page */}
        <OrderItemsRightSection />
      </div>
    </section>
  );
};

export default page;
