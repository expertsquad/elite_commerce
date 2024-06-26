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

    // Transforming the formData to the required format
    const transformedData = {
      orderItems: formData.orderItems.map((item) => ({
        productId: item.productId,
        variantName: item.variantName,
        orderQuantity: item.orderQuantity,
      })),
      shippingAddress: {
        firstName: formData.shippingAddress.firstName,
        lastName: formData.shippingAddress.lastName,
        streetAddress: formData.shippingAddress.streetAddress,
        state: formData.shippingAddress.state,
        country: formData.shippingAddress.country,
        zipCode: Number(formData.shippingAddress.zipCode), // Ensuring zipCode is a number
        phoneNumber: formData.shippingAddress.phoneNumber,
      },
      payment: {
        paymentStatus: formData.payment.paymentStatus,
        paymentMethod: formData.payment.paymentMethod,
      },
    };

    const result = await updateDataMutation({
      route: "/online-order/add",
      data: transformedData,
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
