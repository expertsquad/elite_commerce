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

  const submitAction = async (addressId: string, formData: FormData) => {
    "use server";

    if (!billingAddress?.data.length) {
      const result = await postDataMutation({
        route: "/user-address/add",
        data: formData,
      });
      // console.log(result);
    } else {
      const result = await updateDataMutation({
        route: "/user-address" + "/" + addressId,
        data: formData,
        method: "PUT",
      });
      // console.log(result);
    }
  };

  return (
    <div className="">
      {/* Tab to toggle section */}

      <div className="flex gap-5 border-b border-black-10 items-center justify-start">
        <div className="pb-[2px] border-gradient-primary">
          <Link
            className="text-gradient-primary font-bold text-lg"
            href="/profile/address"
          >
            Billing Address
          </Link>
        </div>
        <div className="py-2 text-lg">
          <Link className="" href="/profile/address/shipping-address">
            Shipping Address
          </Link>
        </div>
      </div>

      <BillingAddress
        submitAction={submitAction}
        billingAddress={billingAddress?.data[0]}
      />
    </div>
  );
};

export default page;
