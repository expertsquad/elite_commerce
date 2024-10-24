import { fetchProtectedData } from "@/actions/fetchData";
import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";

const page = async () => {
  // Get data
  const billingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isBilling=true",
  });
  const country = await fetchProtectedData({
    route: "/settings/shop",
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
      />
    </div>
  );
};

export default page;
