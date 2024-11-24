import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import BillingInfoPageContent from "./_components/BillingInfoPageContent";
import { fetchCountryData } from "@/actions/fetchCountryData";
import CustomLoading from "@/Components/CustomLoader";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Billing Information | ${shopInfo?.data?.shopName}`,
      description: `Review and manage your billing information at ${shopInfo?.data?.shopName}. Ensure secure payment details for a smooth checkout process.`,
    };
  } catch (error) {
    return {
      title: "Billing Information",
      description:
        "Review and manage your billing information. Ensure secure payment details for a smooth checkout process.",
    };
  }
}

const page = async () => {
  try {
    const [shopSetting, paymentMethodData, shippingCharge, defaultAddress] =
      await Promise.all([
        fetchProtectedData({ route: "/settings/shop" }),
        fetchProtectedData({ route: "/settings/payment-method/active" }),
        fetchProtectedData({ route: "/settings/shipping-charge" }),
        fetchProtectedData({
          route: "/user-address/me",
          query: "isDefault=true",
        }),
      ]);

    // Fetch country data after knowing shopSetting's country
    const country = shopSetting?.data?.country;

    const [stateByCountryName, cityByStateName] = await Promise.all([
      fetchCountryData({ route: `/state/${country}`, limit: 100 }),
      fetchCountryData({ route: `/city/${country}`, limit: 1000 }),
    ]);

    return (
      <BillingInfoPageContent
        currencySymbol={shopSetting?.data?.currencySymbol}
        country={country}
        paymentMethod={paymentMethodData?.data}
        shippingCharge={shippingCharge?.data}
        states={stateByCountryName}
        cities={cityByStateName}
        defaultAddress={defaultAddress}
      />
    );
  } catch (error) {
    console.error("Error loading data for billing info page:", error);
    // Handle errors as needed or return fallback content
    return (
      <div className="relative">
        <CustomLoading />
      </div>
    );
  }
};

export default page;
