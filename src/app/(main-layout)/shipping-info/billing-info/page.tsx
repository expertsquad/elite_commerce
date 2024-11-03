import { fetchProtectedData } from "@/actions/fetchData";
import BillingInfoPageContent from "./_components/BillingInfoPageContent";
import { fetchCountryData } from "@/actions/fetchCountryData";

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

  const defaultAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  // this is from country data api
  // get all state by country name
  const stateByCountryName = await fetchCountryData({
    route: `/state/` + shopSetting?.data?.country,
    limit: 100,
  });
  // get all city by country name
  const cityByStateName = await fetchCountryData({
    route: `/city/` + shopSetting?.data?.country,
    limit: 1000,
  });

  return (
    <BillingInfoPageContent
      currencySymbol={shopSetting?.data?.currencySymbol}
      country={shopSetting?.data?.country}
      paymentMethod={paymentMethodData?.data}
      shippingCharge={shippingCharge?.data}
      states={stateByCountryName}
      cities={cityByStateName}
      defaultAddress={defaultAddress}
    />
  );
};

export default page;
