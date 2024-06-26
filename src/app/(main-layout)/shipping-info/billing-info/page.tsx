import { fetchProtectedData } from "@/actions/fetchData";
import OrderItemsRightSection from "../_components/OrderItemsRightSection";
import ShipToAndBillingSection from "./_components/ShipToAndBillingSection";
import PaymentOption from "./_components/PaymentOption";
import { updateDataMutation } from "@/actions/updateDataMutation";

const page = async () => {
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });

  const submitAction = async (formData: FormData) => {
    "use server";
    const dataObj: Record<string, any> = {};

    console.log(formData);

    for (const [key, value] of Array.from(formData.entries())) {
      dataObj[key] = value;
    }

    await updateDataMutation({
      route: "/online-order/add",
      data: JSON.stringify({ zipCode: Number(dataObj["zipCode"]) }),
      method: "POST",
      // formatted: true,
    });
  };

  return (
    <section className="p-5 lg:p-0 max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <ShipToAndBillingSection getMe={getMe} />
        <PaymentOption />
      </div>

      <div>
        <OrderItemsRightSection
          buttonText="Place Order"
          submitAction={submitAction}
        />
      </div>
    </section>
  );
};

export default page;
