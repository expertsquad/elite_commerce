import ShippingInfoContent from "./_components/ShippingInfoContent";
import ShippingAddess from "./_components/ShippingAddess";
import { fetchProtectedData } from "@/actions/fetchData";
import AddNewShippingAddress from "./_components/AddNewShippingAddress";
import OrderItemsRightSection from "./_components/OrderItemsRightSection";
import ShippinInfoTotalAmountCard from "./_components/ShippinInfoTotalAmountCard";
import { fetchCountryData } from "@/actions/fetchCountryData";

const page = async () => {
  const defaultAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });
  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const shippingCharge = await fetchProtectedData({
    route: "/settings/shipping-charge",
  });
  // fetch shop data to get country and currency symbol
  const shopSetting = await fetchProtectedData({
    route: "/settings/shop",
  });

  // this is from country data api
  // get all state by country name
  const stateByCountryName = await fetchCountryData({
    route: `/state/` + shopSetting?.data?.country,
    limit: 1000,
  });
  // get all city by country name
  const cityByStateName = await fetchCountryData({
    route: `/city/` + shopSetting?.data?.country,
    limit: 1000,
  });

  return (
    <section className=" p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <div className="">
          {/* Name and email only */}
          <ShippingInfoContent getMe={getMe} />
          {/* shipping and shipping input section */}
          {defaultAddress?.data?.length ? (
            <ShippingAddess
              defaultAddress={defaultAddress}
              country={shopSetting?.data?.country}
              states={stateByCountryName}
              cities={cityByStateName}
            />
          ) : (
            <AddNewShippingAddress
              country={shopSetting?.data?.country}
              states={stateByCountryName}
              cities={cityByStateName}
            />
          )}
        </div>
      </div>

      <div className="">
        {/* We will add here link to go to next page */}
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
};

export default page;
