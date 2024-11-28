"use client";
import { fetchData } from "@/actions/fetchData";
import FilteredProductsGridView from "./_components/FilteredProductsGridView";
import { Fragment, useContext, useEffect, useState } from "react";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { IProductApiResponse } from "@/interfaces/product.interface";
import { buildQueryString } from "@/utils/buildQueryString";
import { getCurrency } from "@/utils/getCurrency";

const FilteredProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeQucikOrder, setActiveQuickOrder] = useState(false);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [currency, setCurrency] = useState<string>("");
  const [products, setProducts] = useState<IProductApiResponse | null>(null);
  const { filter } = useContext(FilterContext);
  useEffect(() => {
    const query = buildQueryString(filter as Record<string, string | string[]>);
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 20,
        query: query,
      });
      const quickOrderServices = await fetchData({
        route: "/settings/quick-order-setting",
      });

      const currency = await getCurrency();
      setProducts(response);
      setActiveQuickOrder(quickOrderServices?.data?.isQuickOrderServiceActive);
      setShippingAmount(quickOrderServices?.data?.deliveryCharge);
      setCurrency(currency);
      setIsLoading(false);
    };
    getDataByFetching();
  }, [filter]);
  return (
    <Fragment>
      {products && (
        <FilteredProductsGridView
          currency={currency}
          isQuickOrderActive={activeQucikOrder}
          shippingAmount={shippingAmount}
          products={products}
          isLoading={isLoading}
        />
      )}
    </Fragment>
  );
};
export default FilteredProductsPage;
