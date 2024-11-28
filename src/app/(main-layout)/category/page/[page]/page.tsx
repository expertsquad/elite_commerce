import { fetchData } from "@/actions/fetchData";
import React from "react";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import Pagination from "@/Components/Pagination";
import { getCurrency } from "@/utils/getCurrency";

export async function generateMetadata() {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    return {
      title: `Category | ${shopInfo?.data?.shopName}`,
      description: `Explore a wide range of categories at ${shopInfo?.data?.shopName}. Discover products across various categories tailored to your needs, all in one place.`,
    };
  } catch (error) {
    return {
      title: "Category",
      description:
        "Explore a wide range of product categories tailored to meet every need, all in one place.",
    };
  }
}

const ProductsPage = async ({ params }: { params: { page: number } }) => {
  const products = await fetchData({
    route: "/product",
    page: params?.page,
    limit: 20,
  });

  const totalPages = Math.ceil(products?.meta?.total / products?.meta?.limit);

  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  const currency = await getCurrency();

  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span>{products?.meta?.total} Items result found - </span>
        </div>
        <div className="hidden md:block">{/* <SortingSection /> */}</div>
      </div>
      <div className="grid grid-cols-product-grid gap-5 place-items-center">
        {products?.data?.map((product: IProduct) => (
          <ProductCard
            currencyIcon={currency}
            isQuickOrderActive={
              quickOrderServices?.data?.isQuickOrderServiceActive
            }
            shippingAmount={quickOrderServices?.data?.deliveryCharge}
            key={product?._id}
            product={product}
          />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="my-10">
          <Pagination
            totalPages={totalPages}
            currentPage={Number(params?.page)}
            redirectTo="/category/page"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductsPage;

export const generateStaticParams = async () => {
  const { meta } = await fetchData({ route: "/product" });
  const totalPages = Math.ceil(meta?.total / meta?.limit);
  return [...Array(totalPages)].map((_, i) => ({
    params: { page: i + 1 },
  }));
};
