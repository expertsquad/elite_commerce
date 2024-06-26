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

    console.log(formData);

    const dataObj: Record<string, any> = {};
    for (const [key, value] of Array.from(formData.entries())) {
      dataObj[key] = value;
    }
    console.log(dataObj);

    // Transforming the data to the required format
    const transformedData = {
      orderItems: JSON.parse(dataObj.orderItems).map((item: any) => ({
        productId: item.productId,
        variantName: item.variantName,
        orderQuantity: item.orderQuantity,
      })),
      shippingAddress: {
        firstName: dataObj.firstName,
        lastName: dataObj.lastName,
        streetAddress: dataObj.streetAddress,
        state: dataObj.state,
        country: dataObj.country,
        zipCode: Number(dataObj.zipCode),
        phoneNumber: dataObj.phoneNumber,
      },
      payment: {
        paymentStatus: dataObj.paymentStatus,
        paymentMethod: dataObj.paymentMethod,
      },
    };

    // Sending the transformed data
    const result = await updateDataMutation({
      route: "/online-order/add",
      data: JSON.stringify(transformedData),
      method: "POST",
      formatted: true,
    });

    console.log(result);
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
