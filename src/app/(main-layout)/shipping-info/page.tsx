import React from "react";
import ShippingInfoContent from "./_components/ShippingInfoContent";
import ShippingAddess from "./_components/ShippingAddess";
import { fetchProtectedData } from "@/actions/fetchData";
import AddNewShippingAddress from "./_components/AddNewShippingAddress";

const page = async () => {
  const defaultAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  return (
    <section className="max-w-7xl mx-auto">
      {/* Name and email only */}
      <ShippingInfoContent />
      {/* shipping and shipping input section */}
      {defaultAddress?.data?.length ? (
        <ShippingAddess defaultAddress={defaultAddress} />
      ) : (
        <AddNewShippingAddress />
      )}
    </section>
  );
};

export default page;
