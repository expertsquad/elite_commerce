import WidgetCard from "@/Components/WidgetCard";
import FilterByAvailableProducts from "../_components/FilterByAvailableProducts";
import FilterByColor from "../_components/FilterByColor";
import PriceRange from "../_components/PriceRange";
import ProductFilterByBrands from "../_components/ProductFilterByBrands";
import TopRatingProductCard from "../_components/TopRatingProductCard";

const FilterComponent = () => {
  return (
    <div className="w-72 max-w-72">
      <PriceRange />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByColor />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <TopRatingProductCard />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByAvailableProducts />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <ProductFilterByBrands />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <div className="hidden md:block">
        <WidgetCard />
      </div>
    </div>
  );
};

export default FilterComponent;
