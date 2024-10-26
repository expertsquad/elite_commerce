import React from "react";
import PriceRange from "./PriceRange";
import CategoryCard from "./CategoryCard/CategoryCard";
import FilterByColor from "./FilterByColor";
import TopRatingProductCard from "./TopRatingProductCard";
import WidgetCard from "@/Components/WidgetCard";
import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import { IBrand } from "@/interfaces/brand.interface";
import ProductFilterByBrandsSection from "./ProductFilterByBrands";
import { IWidgetCard } from "@/interfaces/widget.interface";

export interface IFilteringSectionProps {
  categories: ICategory[];
  products: IProduct[];
  brands: IBrand[];
  widget: IWidgetCard;
  currency?: string;
  colors?: string[];
}
const FilteringSection = ({
  categories,
  products,
  brands,
  widget,
  currency,
  colors,
}: IFilteringSectionProps) => {
  const redirectPath = "/category/filtered-products";
  return (
    <div className="">
      <PriceRange currency={currency} redirectPath={redirectPath} />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <div>
        <CategoryCard
          title="CATEGORIES"
          categories={categories}
          redirectPath={redirectPath}
        />
      </div>
      <FilterByColor colors={colors || []} redirectPath={redirectPath} />
      <span className="bg-black-10 h-0.5 w-full hidden md:flex my-5 md:my-[30px]"></span>
      <div className="hidden md:block">
        <TopRatingProductCard products={products} currency={currency} />
      </div>
      {/* <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByAvailableProducts  /> */}
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <ProductFilterByBrandsSection
        brands={brands}
        redirectPath={redirectPath}
      />
      <span className="bg-black-10 h-0.5 w-full my-5 md:my-[30px] hidden md:flex"></span>
      <div className="hidden md:block">
        <WidgetCard widget={widget} />
      </div>
    </div>
  );
};
export default FilteringSection;
