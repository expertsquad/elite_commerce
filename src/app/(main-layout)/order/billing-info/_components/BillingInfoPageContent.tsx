"use client";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { OrderInitContext } from "@/Provider/OrderInitDataProvider";
import { IAddress } from "@/interfaces/address.interface";
import PaymentOption from "./PaymentOption";
import ShipToAndBillingSection from "./ShipToAndBillingSection";
import OrderSubmitAndTotalAmount from "./OrderSubmitAndTotalAmount";
import toast from "react-hot-toast";
import { postDataMutation } from "@/actions/postDataMutation";
import CustomLoading from "@/Components/CustomLoader";
import OrderItemsRightSection from "../../shipping-info/_components/OrderItemsRightSection";
import { revalidateTagAction } from "@/actions/revalidateTag";

const BillingInfoPageContent = ({
  currencySymbol,
  country,
  paymentMethod,
  shippingCharge,
  states,
  cities,
  defaultAddress,
}: {
  currencySymbol: string;
  country?: string;
  paymentMethod: any;
  shippingCharge: any;
  states?: any;
  cities?: any;
  defaultAddress?: any;
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

    const orderItems = orderData?.orderItems?.map((item) => ({
      productId: item.productId,
      variantName: item?.variant?.variantName || "Not specified",
      orderQuantity: item?.orderQuantity,
    }));

    // Data to be submitted
    const orderDataToSubmit = {
      shippingAddress,
      billingAddress,
      orderItems,
      payment: orderData?.payment,
    };

    // Handle address mutations without blocking other actions
    try {
      if (
        shippingAddress?.selectedShippingAddress === "newAddress" ||
        (shippingAddress?.isDefault === true && !defaultAddress)
      ) {
        await postDataMutation({
          route: "/user-address/add",
          data: JSON.stringify(shippingAddress),
          formatted: true,
        });
      } else if (
        shippingAddress?.selectedShippingAddress === "newAddress" ||
        shippingAddress?.isDefault === true
      ) {
        await updateDataMutation({
          route: "/user-address/" + defaultAddress?.data[0]?._id,
          data: JSON.stringify(shippingAddress),
          formatted: true,
          method: "PUT",
        });
      }
    } catch (error) {
      // console.error("Address mutation error:", error);
      // Optional: You can show a toast or log an error here if desired
    }

    // Submit order data
    try {
      const result = await updateDataMutation({
        route: "/online-order/add",
        data: JSON.stringify(orderDataToSubmit),
        method: "POST",
        formatted: true,
        pathToRevalidate: "/product",
      });

      if (result?.success) {
        toast.success(result?.message);
        localStorage.removeItem("orderInit");
        if (orderData?.payment?.paymentMethod === "COD") {
          revalidateTagAction("/product");
          router.push(`/successfull/${result?.data?._id}`);
        } else {
          revalidateTagAction("/product");
          router.push(result?.data);
        }
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      // console.error("Order submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`mb-10 p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row relative `}
    >
      {loading && <CustomLoading />}

      <div className="w-full">
        <PaymentOption paymentMethod={paymentMethod} />
        <ShipToAndBillingSection
          country={country ? country : ""}
          states={states}
          cities={cities}
        />
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
