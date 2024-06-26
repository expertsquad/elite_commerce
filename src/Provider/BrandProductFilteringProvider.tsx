"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IFilterFields {
  "variants.sellingPrice[gte]"?: number;
  "variants.sellingPrice[lte]"?: number;
  "category.categoryName"?: string[];
  // "brand.brandName"?: string[];
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
const BrandProductFilteringProvider = ({
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

export default BrandProductFilteringProvider;
