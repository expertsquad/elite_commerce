import { fetchProtectedData } from "@/actions/fetchData";
import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { postDataMutation } from "@/actions/postDataMutation";

const page = async () => {
  // Get data
  const billingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isBilling=true",
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
            href="/profile/address"
          >
            Billing Address
          </Link>
        </div>
      </div>

      <BillingAddress billingAddress={billingAddress?.data[0]} />
    </div>
  );
};

export default page;
