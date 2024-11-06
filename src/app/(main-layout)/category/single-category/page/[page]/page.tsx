import { fetchData } from "@/actions/fetchData";
import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { getCurrency } from "@/utils/getCurrency";
import React from "react";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { category: string };
}) {
  try {
    const category = await fetchData({
      route: `/category/slug/${searchParams?.category?.toLowerCase()}`,
    });

    const shopInfo = await fetchData({
      route: "/settings/shop",
    });
    const metaTitle = category?.data?.categoryName || "Category";

    const ogImage = category?.data?.categoryPhoto;

    return {
      title: `${metaTitle} | ${shopInfo?.data?.shopName}`,
      description:
        "Explore a wide range of products in this category, curated to meet your needs and preferences.",
      openGraph: {
        title: `${metaTitle}`,
        description:
          "Explore a wide range of products in this category, curated to meet your needs and preferences.",
        images: [
          {
            url: ogImage,
            width: 100,
            height: 100,
            alt: `Category OG Image`,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Category Not Found",
      description: "The category you're looking for does not exist!",
    };
  }
}

const SingleDynamicCategory = async ({
  searchParams,
  params,
}: {
  searchParams: { category: string };
  params: { page: number };
}) => {
  const response = await fetchData({
    route: "/product",
    query: `category.categoryName=${searchParams?.category}`,
    limit: 20,
    page: Number(params?.page),
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
            currentPage={Number(params?.page)}
            redirectTo={`/category/single-category/page`}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleDynamicCategory;
