import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      {/* tab to toggle section */}

      <div className="flex gap-5 border-b border-black-10  items-center justify-start">
        <div className="pb-[3px]  border-gradient-primary">
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
