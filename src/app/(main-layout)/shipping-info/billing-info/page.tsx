import { fetchProtectedData } from "@/actions/fetchData";
import BillingInfoPageContent from "./_components/BillingInfoPageContent";

const page = async () => {
  const shopSetting = await fetchProtectedData({
    route: "/settings/shop",
  });
  const paymentMethodData = await fetchProtectedData({
    route: "/settings/payment-method/active",
  });
  const shippingCharge = await fetchProtectedData({
    route: "/settings/shipping-charge",
  });

  return (
    <BillingInfoPageContent
      currencySymbol={shopSetting?.data?.currencySymbol}
      country={shopSetting?.data?.country}
      paymentMethod={paymentMethodData?.data}
      shippingCharge={shippingCharge?.data}
    />
  );
};

export default page;
