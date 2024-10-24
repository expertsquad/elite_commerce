"use client";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
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
  shippingCharge,
}: {
  currencySymbol: string;
  country?: string;
  paymentMethod: any;
  shippingCharge: any;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { orderData } = useContext(OrderInitContext);

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Convert zip code strings to numbers
    const shippingAddress = orderData?.shippingAddress as IAddress;
    if (typeof shippingAddress?.zipCode === "string") {
      shippingAddress.zipCode = Number(shippingAddress.zipCode);
    }

    const billingAddress = orderData?.billingAddress as IAddress;
    if (typeof billingAddress?.zipCode === "string") {
      billingAddress.zipCode = Number(billingAddress.zipCode);
    }

    // Now submit the modified orderData
    try {
      const result = await updateDataMutation({
        route: "/online-order/add",
        data: JSON.stringify(orderData),
        method: "POST",
        formatted: true,
      });

      if (result?.success === true) {
        localStorage.removeItem("orderInit");
        if (orderData?.payment?.paymentMethod === "COD") {
          router.push(`/successfull/${result?.data?._id}`);
        } else {
          router.push(result?.data);
        }
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      className={`${
        loading ? "opacity-50 pointer-events-none" : ""
      } "p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row mb-10" `}
    >
      <div className="w-full">
        <PaymentOption paymentMethod={paymentMethod} />
        <ShipToAndBillingSection country={country ? country : ""} />
      </div>

      <div>
        <OrderItemsRightSection currencySymbol={currencySymbol} />
        <OrderSubmitAndTotalAmount
          currencySymbol={currencySymbol}
          shippingCharge={shippingCharge}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default BillingInfoPageContent;
