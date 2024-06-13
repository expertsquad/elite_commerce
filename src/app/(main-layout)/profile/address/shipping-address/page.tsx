import React from "react";
import ShippingAddress from "../_components/ShippingAddress";
import Link from "next/link";
import { fetchProtectedData } from "@/actions/fetchData";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";

const page = async () => {
  // Get data
  const shippingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  console.log(shippingAddress);

  const submitAction = async (addressId: string, formData: FormData) => {
    "use server";

    if (!shippingAddress?.data.length) {
      const result = await postDataMutation({
        //having problem with api we will have to add here billing address api
        route: "/user-address/add",
        data: formData,
      });
      console.log(result);
    } else {
      const result = await updateDataMutation({
        route: "/user-address" + "/" + addressId,
        data: formData,
        method: "PUT",
      });
      console.log(result);
    }
  };
  return (
    <div>
      {/* tab to toggle section */}

      <div className="flex gap-5 items-center border-b border-black-10 justify-start">
        <div className="py-2  text-lg">
          <Link className=" " href="/profile/address">
            Billing Address
          </Link>
        </div>
        <div className="pb-[2px]  border-gradient-primary">
          <Link
            className=" text-gradient-primary font-bold text-lg "
            href="/profile/address/shipping-address"
          >
            Shipping Address
          </Link>
        </div>
      </div>

      <ShippingAddress
        submitAction={submitAction}
        shippingAddress={shippingAddress?.data[0]}
      />
    </div>
  );
};

export default page;
