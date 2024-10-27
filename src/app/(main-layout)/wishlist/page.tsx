import { fetchData } from "@/actions/fetchData";
import WishlistPageContent from "./_components/WishlistPageContent";

const Wishlist = async () => {
  const currency = await fetchData({
    route: "/settings/shop",
  });
  // <== Quick Order Services ==>
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  return (
    <div>
      <WishlistPageContent
        currencyIcon={currency?.data?.currencySymbol}
        shippingAmount={quickOrderServices?.data?.deliveryCharge}
        isQuickOrderActive={quickOrderServices?.data?.isQuickOrderServiceActive}
      />
    </div>
  );
};

export default Wishlist;
