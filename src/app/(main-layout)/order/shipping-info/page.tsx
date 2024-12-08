import ShippingInfoContent from "./_components/ShippingInfoContent";
import ShippingAddess from "./_components/ShippingAddess";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import AddNewShippingAddress from "./_components/AddNewShippingAddress";
import OrderItemsRightSection from "./_components/OrderItemsRightSection";
import ShippinInfoTotalAmountCard from "./_components/ShippinInfoTotalAmountCard";
import { fetchCountryData } from "@/actions/fetchCountryData";
import CustomLoading from "@/Components/CustomLoader";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Shipping Information | ${shopInfo?.data?.shopName}`,
      description: `Learn about the shipping options, delivery times, and rates at ${shopInfo?.data?.shopName}. Find all the details to ensure a smooth delivery for your order.`,
    };
  } catch (error) {
    return {
      title: "Shipping Information",
      description:
        "Learn about our shipping options, delivery times, and rates. Find all the details to ensure a smooth delivery for your order.",
    };
  }
}

const page = async () => {
  try {
    // Fetch unrelated data in parallel
    const [defaultAddress, getMe, shippingCharge, shopSetting] =
      await Promise.all([
        fetchProtectedData({
          route: "/user-address/me",
          query: "isDefault=true",
        }),
        fetchProtectedData({ route: "/user/me" }),
        fetchData({ route: "/settings/shipping-charge" }),
        fetchData({ route: "/settings/shop" }),
      ]);

    // Fetch country-dependent data after shopSetting is resolved
    const country = shopSetting?.data?.country;
    const [stateByCountryName, cityByStateName] = await Promise.all([
      fetchCountryData({ route: `/state/${country}`, limit: 1000 }),
      fetchCountryData({ route: `/city/${country}`, limit: 1000 }),
    ]);

    return (
      <section className="p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row mb-10">
        <div className="w-full">
          <div className="">
            {/* Name and email only */}
            <ShippingInfoContent getMe={getMe} />
            {/* Shipping and shipping input section */}
            {defaultAddress?.data?.length ? (
              <ShippingAddess
                defaultAddress={defaultAddress}
                country={country}
                states={stateByCountryName}
                cities={cityByStateName}
              />
            ) : (
              <AddNewShippingAddress
                country={country}
                states={stateByCountryName}
                cities={cityByStateName}
              />
            )}
          </div>
        </div>

        <div className="">
          {/* Link to the next page */}
          <OrderItemsRightSection
            currencySymbol={shopSetting?.data?.currencySymbol}
          />
          <ShippinInfoTotalAmountCard
            currencySymbol={shopSetting?.data?.currencySymbol}
            shippingCharge={shippingCharge?.data}
            defaultAddress={defaultAddress}
          />
        </div>
      </section>
    );
  } catch (error) {
    // console.error("Error loading shipping info page:", error);
    // Handle errors or return fallback UI
    return (
      <div className="relative">
        <CustomLoading />
      </div>
    );
  }
};

export default page;
