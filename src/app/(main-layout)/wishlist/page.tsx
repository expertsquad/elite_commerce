import { fetchData } from "@/actions/fetchData";
import WishlistPageContent from "./_components/WishlistPageContent";

const Wishlist = async () => {
  const currency = await fetchData({
    route: "/settings/shop",
  });
  return (
    <div>
      <WishlistPageContent currencyIcon={currency?.data?.currencySymbol} />
    </div>
  );
};

export default Wishlist;
