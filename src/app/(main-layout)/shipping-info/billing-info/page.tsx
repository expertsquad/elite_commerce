import { fetchProtectedData } from "@/actions/fetchData";
import OrderItemsRightSection from "../_components/OrderItemsRightSection";
import ShipToAndBillingSection from "./_components/ShipToAndBillingSection";
import PaymentOption from "./_components/PaymentOption";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  return (
    <section className="p-5 lg:p-0 max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        {/* Contact Information and added shipping info */}
        <ShipToAndBillingSection getMe={getMe} />
        {/* Choose payment option  */}
        <PaymentOption />
      </div>

      <div className="">
        {/* We will add here link to go to next page */}
        <OrderItemsRightSection />
      </div>
    </section>
  );
};

export default page;
