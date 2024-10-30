import { fetchData } from "@/actions/fetchData";
import WishlistPageContent from "./_components/WishlistPageContent";
import { cookies } from "next/headers";

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
