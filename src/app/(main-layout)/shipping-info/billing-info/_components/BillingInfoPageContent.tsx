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

  //demo.elitecommerce.app/transaction/success?orderId=6716632d8a754c9e034c23bf
  //demo.elitecommerce.app/transaction/success?orderId=671662cc8a754c9e034c223f

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
