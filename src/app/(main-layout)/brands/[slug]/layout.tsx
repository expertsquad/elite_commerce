import React from "react";
import BrandFilterSection from "../_components/BrandFilterSection";
import BrandFilterModal from "../_components/BrandFilterModal";
import { fetchData } from "@/actions/fetchData";
import { getWidget } from "@/utils/getWidget";
import { getCurrency } from "@/utils/getCurrency";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const shopInfo = await fetchData({
      route: "/settings/shop",
    });

    const brandInfo = await fetchData({
      route: `/brand/slug/${params.slug.toLowerCase()}`,
    });

    const ogImage = brandInfo?.data?.brandPhoto;

    return {
      title: `${brandInfo?.data?.brandName || "Brand"} | ${
        shopInfo?.data?.shopName
      }`,
      description: `Discover the exclusive ${brandInfo?.data?.brandName} collection at ${shopInfo?.data?.shopName}. Explore high-quality products designed to meet your needs and enhance your lifestyle.`,
      openGraph: {
        images: [
          {
            url: ogImage,
            width: 100,
            height: 100,
            alt: "Brand Photo",
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Brand",
      description:
        "Discover premium products from top brands. Explore high-quality items tailored to meet your needs and enhance your lifestyle.",
    };
  }
}

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const categories = await fetchData({ route: "/category", limit: 10 });
  const products = await fetchData({
    route: "/product",
    limit: 5,
    query: "sortBy=averageRating",
  });
  const brands = await fetchData({ route: "/brand", limit: 10 });
  const widgetData = await getWidget();
  const currency = await getCurrency();

  return (
    <div className="my-10">
      <div className="flex items-center justify-between md:hidden">
        {/* <SortingSection /> */}
        <BrandFilterModal
          params={params}
          products={products?.data}
          categories={categories?.data}
          brands={brands?.data}
          widget={widgetData}
          currency={currency}
        />
      </div>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
        <div className="hidden md:block lg:block">
          <BrandFilterSection
            brands={brands?.data}
            products={products?.data}
            categories={categories?.data}
            params={params}
            widget={widgetData}
            currency={currency}
          />
        </div>
        <div className="lg:col-span-3 md:grid-cols-2 md:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
