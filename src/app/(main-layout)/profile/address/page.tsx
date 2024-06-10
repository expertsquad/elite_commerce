import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center justify-start">
        <div className="py-2 border-b-2 border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/address"
          >
            Billing Address
          </Link>
        </div>
        <div className="py-2  text-lg">
          <Link className=" " href="/profile/address/shipping-address">
            Billing Address
          </Link>
        </div>
      </div>

      <BillingAddress />
    </div>
  );
};

export default page;
