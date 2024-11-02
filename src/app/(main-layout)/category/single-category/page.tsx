import { fetchData } from "@/actions/fetchData";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import ProductEmptyState from "../../_components/ProductEmptyState";
import { getCurrency } from "@/utils/getCurrency";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  try {
    const response = await fetchData({
      route: "/product",
      query: `category.categoryName=${searchParams?.category}`,
    });

    if (!response?.data) {
      return {
        title: "Not Found",
        description: "The page you're looking for does not exist!",
      };
    }

    const productNames = response.data.map(
      (product: IProduct) => product?.productName
    );

    return {
      title: `Products in ${searchParams?.category}: ${productNames} | Elite Commerece`,
      description: `Browse through our selection of products in the ${searchParams?.category} category.`,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist!",
    };
  }
}

const SingleCategory = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `category.categoryName=${searchParams?.category}`,
    limit: 20,
  });

  const totalPages = Math.ceil(response?.meta?.total / response?.meta?.limit);
  const currency = await getCurrency();
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  return (
    <div>
      {response?.data?.length > 0 ? (
        <div className="grid grid-cols-product-grid gap-5 place-items-center">
          {response?.data?.map((product: IProduct) => (
            <ProductCard
              key={product?._id}
              product={product}
              currencyIcon={currency}
              isQuickOrderActive={
                quickOrderServices?.data?.isQuickOrderServiceActive
              }
              shippingAmount={quickOrderServices?.data?.deliveryCharge}
            />
          ))}
        </div>
      ) : (
        <ProductEmptyState />
      )}
      {totalPages > 1 ? (
        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            redirectTo={`/category/single-category/page`}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleCategory;
