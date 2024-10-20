import React from "react";
import Link from "next/link";
import { fetchProtectedData } from "@/actions/fetchData";
import ShippingAddress from "./_components/ShippingAddress";

const page = async () => {
  // Get data
  const shippingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  const country = await fetchProtectedData({
    route: "/settings/shop",
  });

  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="pb-[1px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/shipping-address"
          >
            Shipping Address
          </Link>
        </div>

        <div className="text-lg">
          <Link href="/profile/billing-address">Billing Address</Link>
        </div>
      </div>

      <ShippingAddress
        country={country?.data?.country}
        shippingAddress={shippingAddress?.data[0]}
      />
    </div>
  );
};

export default page;
