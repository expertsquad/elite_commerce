import React from "react";
import PriceRange from "../../category/_components/PriceRange";
import WidgetCard from "@/Components/WidgetCard";
import CategoryCard from "../../category/_components/CategoryCard/CategoryCard";
import { ICategory } from "@/interfaces/category.interface";
import TopRatingProductCard from "../../category/_components/TopRatingProductCard";
import { IProduct } from "@/interfaces/product.interface";

import { IBrand } from "@/interfaces/brand.interface";
import CategoryFilterForBrand from "./CategoryFilterForBrand";
import PriceRangeFilterForBrand from "./PriceRangeFilterForBrand";
import { IWidgetCard } from "@/interfaces/widget.interface";

const BrandFilterSection = ({
  categories,
  products,
  brands,
  params,
  widget,
  currency,
  productMaxPrice,
}: {
  categories: ICategory[];
  products: IProduct[];
  brands: IBrand[];
  params: { slug?: string };
  widget: IWidgetCard;
  currency?: string;
  productMaxPrice?: number;
}) => {
  const redirectPath = `/brands/${params?.slug || ""}/filtered-brand-products`;
  return (
    <div>
      <CategoryFilterForBrand
        title="BEST CATEGORY IN THIS BRAND"
        categories={categories}
        redirectPath={redirectPath}
      />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>

      <PriceRangeFilterForBrand
        redirectPath={redirectPath}
        productMaxPrice={productMaxPrice}
      />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <TopRatingProductCard products={products} currency={currency} />
      <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
      <WidgetCard widget={widget} />
    </div>
  );
};

export default BrandFilterSection;
