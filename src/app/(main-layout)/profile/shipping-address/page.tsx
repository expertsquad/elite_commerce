import React from "react";
import Link from "next/link";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import ShippingAddress from "./_components/ShippingAddress";
import { fetchCountryData } from "@/actions/fetchCountryData";

const page = async () => {
  // Get data
  const shippingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  const country = await fetchData({
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
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <Link
          className=" text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2"
          href="/profile/shipping-address"
        >
          Shipping Address
        </Link>

        <div className="text-base pb-2">
          <Link href="/profile/billing-address">Billing Address</Link>
        </div>
      </div>

      <ShippingAddress
        country={country?.data?.country}
        shippingAddress={shippingAddress?.data[0]}
        states={stateByCountryName}
        cities={cityByStateName}
      />
    </div>
  );
};

export default page;
