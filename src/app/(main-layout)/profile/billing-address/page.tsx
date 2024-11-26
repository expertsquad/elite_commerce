import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import BillingAddress from "./_components/BillingAddress";
import Link from "next/link";
import { fetchCountryData } from "@/actions/fetchCountryData";
import CustomLoading from "@/Components/CustomLoader";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });
    return {
      title: `Address Book | My Profile | ${shopInfo?.data?.shopName}`,
      description: `Manage your saved addresses for a quicker checkout at ${shopInfo?.data?.shopName}. Add, edit, or remove addresses to keep your profile information up-to-date.`,
    };
  } catch (error) {
    return {
      title: "Address Book | My Profile",
      description:
        "Manage your saved addresses for a quicker checkout. Add, edit, or remove addresses to keep your profile information up-to-date.",
    };
  }
}

const page = async () => {
  try {
    // Fetch primary data concurrently
    const [billingAddress, countryData] = await Promise.all([
      fetchProtectedData({
        route: "/user-address/me",
        query: "isBilling=true",
      }),
      fetchProtectedData({
        route: "/settings/shop",
      }),
    ]);

    const country = countryData?.data?.country;

    // Fetch country-dependent data concurrently
    const [stateByCountryName, cityByStateName] = await Promise.all([
      fetchCountryData({ route: `/state/${country}`, limit: 100 }),
      fetchCountryData({ route: `/city/${country}`, limit: 100 }),
    ]);

    return (
      <div className="">
        {/* Tab to toggle section */}
        <div className="flex gap-5 border-b border-black-10 items-center justify-start">
          <div className="text-base pb-2">
            <Link href="/profile/shipping-address">Shipping Address</Link>
          </div>

          <Link
            className="text-gradient-primary font-semibold text-base border-b !border-primary-light pb-2"
            href="/profile/billing-address"
          >
            Billing Address
          </Link>
        </div>

        <BillingAddress
          country={country}
          billingAddress={billingAddress?.data[0]}
          states={stateByCountryName}
          cities={cityByStateName}
        />
      </div>
    );
  } catch (error) {
    console.error("Error loading billing address page:", error);
    // Handle errors or return fallback UI
    return (
      <div className="relative">
        <CustomLoading />
      </div>
    );
  }
};

export default page;
