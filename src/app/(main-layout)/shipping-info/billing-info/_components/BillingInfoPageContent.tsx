"use client";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { IAddress } from "@/interfaces/address.interface";
import OrderItemsRightSection from "../../_components/OrderItemsRightSection";
import PaymentOption from "./PaymentOption";
import ShipToAndBillingSection from "./ShipToAndBillingSection";
import OrderSubmitAndTotalAmount from "./OrderSubmitAndTotalAmount";

const BillingInfoPageContent = ({
  currencySymbol,
  country,
  paymentMethod,
}: {
  currencySymbol: string;
  country?: string;
  paymentMethod: any;
}) => {
  const router = useRouter();
  const { orderData } = useContext(OrderInitContext);
  const submitAction = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shippingAddress = orderData?.shippingAddress as IAddress;
    let shippingZipCode = shippingAddress?.zipCode;

    if (typeof shippingZipCode === "string") {
      shippingZipCode = Number(shippingZipCode);
    }

    const billingAddress = orderData?.billingAddress as IAddress;

    let billingZipCOde = billingAddress?.zipCode;

    if (typeof billingZipCOde === "string") {
      billingZipCOde = Number(billingZipCOde);
    }

    try {
      const result = await updateDataMutation({
        route: "/online-order/add",
        data: JSON.stringify(orderData),
        method: "POST",
        formatted: true,
      });

      const orderId = result?.data?._id;

      if (result?.success === true) {
        localStorage.removeItem("orderInit");
        router.push(`/successfull/${orderId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <ShipToAndBillingSection country={country ? country : ""} />
        <PaymentOption paymentMethod={paymentMethod} />
      </div>

      <div>
        <OrderItemsRightSection currencySymbol={currencySymbol} />
        <OrderSubmitAndTotalAmount currencySymbol={currencySymbol} />
      </div>
    </section>
  );
};

export default BillingInfoPageContent;
