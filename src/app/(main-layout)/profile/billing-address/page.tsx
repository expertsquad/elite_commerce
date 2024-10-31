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
        <div className="text-lg">
          <Link href="/profile/shipping-address">Shipping Address</Link>
        </div>

        <div className="pb-[1px] border-gradient-primary">
          <Link
            className="text-gradient-primary font-bold text-lg"
            href="/profile/billing-address"
          >
            Billing Address
          </Link>
        </div>
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
