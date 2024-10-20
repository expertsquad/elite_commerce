import React from "react";
import Link from "next/link";
import { fetchProtectedData } from "@/actions/fetchData";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";
import ShippingAddress from "../billing-address/_components/ShippingAddress";

const page = async () => {
  // Get data
  const shippingAddress = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  const country = await fetchProtectedData({
    route: "/settings/shop",
  });

  console.log(country);

  const submitAction = async (addressId: string, formData: FormData) => {
    "use server";
    const dataObj: Record<string, any> = {};

    for (const [key, value] of Array.from(formData.entries())) {
      dataObj[key] = value;
    }
    //zipCode string to number
    if (typeof dataObj.zipCode === "string") {
      dataObj.zipCode = parseInt(dataObj.zipCode);
    }
    // Add isDefault = true
    dataObj.isDefault = true;

    if (!shippingAddress?.data.length) {
      const result = await postDataMutation({
        route: "/user-address/add",
        data: JSON.stringify(dataObj),
        formatted: true,
      });
    } else {
      const result = await updateDataMutation({
        route: "/user-address" + "/" + addressId,
        data: JSON.stringify(dataObj),
        formatted: true,
        method: "PUT",
      });
    }
  };
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
        submitAction={submitAction}
        shippingAddress={shippingAddress?.data[0]}
      />
    </div>
  );
};

export default page;
