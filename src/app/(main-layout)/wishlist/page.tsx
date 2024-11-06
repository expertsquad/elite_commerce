import { fetchData } from "@/actions/fetchData";
import WishlistPageContent from "./_components/WishlistPageContent";
import { cookies } from "next/headers";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Wishlist | ${shopInfo?.data?.shopName}`,
      description: `Discover and save your favorite products at ${shopInfo?.data?.shopName}. Keep track of all the items you love in one place on your wishlist.`,
    };
  } catch (error) {
    return {
      title: "Wishlist",
      description:
        "Discover and save your favorite products. Keep track of all the items you love in one place on your wishlist.",
    };
  }
}

const Wishlist = async () => {
  const currency = await fetchData({
    route: "/settings/shop",
  });
  // <== Quick Order Services ==>
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  const accessToken = cookies().get("accessToken")?.value;

  return (
    <div>
      <WishlistPageContent
        currencyIcon={currency?.data?.currencySymbol}
        shippingAmount={quickOrderServices?.data?.deliveryCharge}
        isQuickOrderActive={quickOrderServices?.data?.isQuickOrderServiceActive}
        accessToken={accessToken ? accessToken : ""}
      />
    </div>
  );
};

export default Wishlist;
