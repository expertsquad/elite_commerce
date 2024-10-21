import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import BillingInfoPageContent from "./_components/BillingInfoPageContent";

const page = async () => {
  const shopSetting = await fetchProtectedData({
    route: "/settings/shop",
  });
  const paymentMethodData = await fetchProtectedData({
    route: "/settings/payment-method/active",
  });

  return (
    <BillingInfoPageContent
      currencySymbol={shopSetting?.data?.currencySymbol}
      country={shopSetting?.data?.country}
      paymentMethod={paymentMethodData?.data}
    />
  );
};

export default page;
