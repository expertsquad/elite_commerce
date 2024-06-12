import React from "react";
import ShippingInfoContent from "./_components/ShippingInfoContent";
import ShippingAddess from "./_components/ShippingAddess";
import { fetchProtectedData } from "@/actions/fetchData";
import AddNewShippingAddress from "./_components/AddNewShippingAddress";
import OrderItemsRightSection from "./_components/OrderItemsRightSection";

const page = async () => {
  const defaultAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  return (
    <section className=" p-5 lg:p-0 max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10">
      <div className="w-full">
        <div className="">
          {/* Name and email only */}
          <ShippingInfoContent />
          {/* shipping and shipping input section */}
          {defaultAddress?.data?.length ? (
            <ShippingAddess defaultAddress={defaultAddress} />
          ) : (
            <AddNewShippingAddress />
          )}
        </div>
      </div>

      <div className="">
        {/* We will add here link to go to next page */}
        <OrderItemsRightSection />
      </div>
    </section>
  );
};

export default page;
