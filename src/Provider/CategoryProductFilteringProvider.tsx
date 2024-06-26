"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IFilterFields {
  "variants.sellingPrice[gte]"?: number;
  "variants.sellingPrice[lte]"?: number;
  "category.categoryName"?: string[];
  "brand.brandName"?: string[];
  "variant.variantName"?: string;
}
// props interface
interface IFilteringProviderProps {
  filter: IFilterFields;
  setFilter: Dispatch<SetStateAction<Record<string, string | number> | {}>>;
}
// initial state
const initialState = {
  filter: {},
  setFilter: () => {},
};
// context
export const FilterContext =
  createContext<IFilteringProviderProps>(initialState);

// Provider
const CategoryProductFilteringProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = useState<IFilterFields>(initialState.filter);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default CategoryProductFilteringProvider;
