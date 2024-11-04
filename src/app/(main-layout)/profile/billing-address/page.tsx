import { fetchProtectedData } from "@/actions/fetchData";
import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";
import { fetchCountryData } from "@/actions/fetchCountryData";

const page = async () => {
  // Get data
  const billingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isBilling=true",
  });
  const country = await fetchProtectedData({
    route: "/settings/shop",
  });

  // this is from country data api
  // get all state by country name
  const stateByCountryName = await fetchCountryData({
    route: `/state/` + country?.data?.country,
    limit: 100,
  });
  // get all city by country name
  const cityByStateName = await fetchCountryData({
    route: `/city/` + country?.data?.country,
    limit: 1000,
  });

  return (
    <div className="">
      {/* Tab to toggle section */}

      <div className="flex gap-5 border-b border-black-10 items-center justify-start">
        <div className="text-base pb-2">
          <Link href="/profile/shipping-address">Shipping Address</Link>
        </div>

        <Link
          className="text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2"
          href="/profile/billing-address"
        >
          Billing Address
        </Link>
      </div>

      <BillingAddress
        country={country?.data?.country}
        billingAddress={billingAddress?.data[0]}
        states={stateByCountryName}
        cities={cityByStateName}
      />
    </div>
  );
};

export default page;
