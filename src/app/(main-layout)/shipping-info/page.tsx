import ShippingInfoContent from "./_components/ShippingInfoContent";
import ShippingAddess from "./_components/ShippingAddess";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import AddNewShippingAddress from "./_components/AddNewShippingAddress";
import OrderItemsRightSection from "./_components/OrderItemsRightSection";
import ShippinInfoTotalAmountCard from "./_components/ShippinInfoTotalAmountCard";
import { fetchCountryData } from "@/actions/fetchCountryData";

const page = async () => {
  const defaultAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  // const countryData = await fetchCountryData({
  //   route: "/countries",
  // });
  // console.log(countryData);

  const getMe = await fetchProtectedData({
    route: "/user/me",
  });
  const shippingCharge = await fetchData({
    route: "/settings/shipping-charge",
  });

  return (
    <section className=" p-5 lg:p-0 main-container flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <div className="">
          {/* Name and email only */}
          <ShippingInfoContent getMe={getMe} />
          {/* shipping and shipping input section */}
          {defaultAddress?.data?.length ? (
            <ShippingAddess defaultAddress={defaultAddress} />
          ) : (
            <AddNewShippingAddress />
          )}
        </div>
      </div>

      <div className="">
        {/* We will add here link to go to next page */}
        <OrderItemsRightSection />
        <ShippinInfoTotalAmountCard
          shippingCharge={shippingCharge?.data}
          defaultAddress={defaultAddress}
        />
      </div>
    </section>
  );
};

export default page;
