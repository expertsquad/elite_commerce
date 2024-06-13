import React from "react";
import PriceRange from "./PriceRange";
import CategoryCard from "./CategoryCard";
import FilterByColor from "./FilterByColor";
import TopRatingProductCard from "./TopRatingProductCard";
import FilterByAvailableProducts from "./FilterByAvailableProducts";
import ProductFilterByBrandsSection from "./ProductFilterByBrands";
import WidgetCard from "@/Components/WidgetCard";
import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import { IBrand } from "@/interfaces/brand.interface";

export interface IFilteringSectionProps {
  categories: ICategory[];
  products: IProduct[];
  brands: IBrand[];
}
const FilteringSection = ({
  categories,
  products,
  brands,
}: IFilteringSectionProps) => {
  return (
    <div className="">
      <PriceRange />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <div>
        <CategoryCard title="CATEGORIES" categories={categories} />
      </div>
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByColor />
      <span className="bg-black-10 h-0.5 w-full hidden md:flex my-5 md:my-[30px]"></span>
      <div className="hidden md:block">
        <TopRatingProductCard products={products} />
      </div>
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <FilterByAvailableProducts />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <ProductFilterByBrandsSection brands={brands} />
      <span className="bg-black-10 h-0.5 w-full my-5 md:my-[30px] hidden md:flex"></span>
      <div className="hidden md:block">
        <WidgetCard />
      </div>
    </div>
  );
};

export default FilteringSection;
