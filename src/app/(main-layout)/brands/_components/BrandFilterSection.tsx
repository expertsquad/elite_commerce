import React from "react";
import PriceRange from "../../category/_components/PriceRange";
import WidgetCard from "@/Components/WidgetCard";
import CategoryCard from "../../category/_components/CategoryCard";
import { ICategory } from "@/interfaces/category.interface";
import TopRatingProductCard from "../../category/_components/TopRatingProductCard";
import { IProduct } from "@/interfaces/product.interface";
import ProductFilterByBrandsSection from "../../category/_components/ProductFilterByBrands";
import { IBrand } from "@/interfaces/brand.interface";

const BrandFilterSection = ({
  categories,
  products,
  brands,
}: {
  categories: ICategory[];
  products: IProduct[];
  brands: IBrand[];
}) => {
  return (
    <div>
      <CategoryCard
        title="BEST CATEGORY IN THIS BRAND"
        categories={categories}
      />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>

      <PriceRange />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <TopRatingProductCard products={products} />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <ProductFilterByBrandsSection brands={brands} />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>

      <WidgetCard />
    </div>
  );
};

export default BrandFilterSection;
