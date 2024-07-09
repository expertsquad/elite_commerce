import { fetchData } from "@/actions/fetchData";
import SmallDeviceGlobalSearch from "./_components/SmallDeviceGlobalSearch";

const SearchPage = async () => {
  const categories = await fetchData({
    route: "/category",
    limit: 1000,
    revalidate: 600,
  });
  const products = await fetchData({ route: "/product", limit: 1 });

  return (
    <SmallDeviceGlobalSearch
      categories={categories?.data}
      products={products?.data}
    />
  );
};

export default SearchPage;
