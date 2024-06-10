import React from "react";
import ShippingAddress from "../_components/ShippingAddress";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="py-2  text-lg">
          <Link className=" " href="/profile/address">
            Billing Address
          </Link>
        </div>
        <div className="pb-[3px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/address/shipping-address"
          >
            Shipping Address
          </Link>
        </div>
      </div>

      <ShippingAddress />
    </div>
  );
};

export default page;
