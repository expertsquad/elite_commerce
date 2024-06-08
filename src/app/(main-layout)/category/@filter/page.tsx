import WidgetCard from "@/Components/WidgetCard";
import FilterByAvailableProducts from "../_components/FilterByAvailableProducts";
import FilterByColor from "../_components/FilterByColor";
import PriceRange from "../_components/PriceRange";
import ProductFilterByBrands from "../_components/ProductFilterByBrands";
import TopRatingProductCard from "../_components/TopRatingProductCard";
import { fetchData } from "@/actions/fetchData";
import CategoryCard from "../_components/CategoryCard";

const FilterComponent = async () => {
  const response = await fetchData({ route: "/category", limit: 10 });
  return (
    <div className="">
      <PriceRange />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <div>
        <CategoryCard title="CATEGORIES" categoryData={response?.data} />
      </div>
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByColor />
      <span className="bg-black-10 h-0.5 w-full hidden md:flex my-5 md:my-[30px]"></span>
      <div className="hidden md:block">
        <TopRatingProductCard />
      </div>
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByAvailableProducts />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <ProductFilterByBrands />
      <span className="bg-black-10 h-0.5 w-full my-5 md:my-[30px] hidden md:flex"></span>
      <div className="hidden md:block">
        <WidgetCard />
      </div>
    </div>
  );
};

export default FilterComponent;
