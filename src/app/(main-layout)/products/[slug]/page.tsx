import React from "react";
import ProductViewServices from "./_components/ProductViewServices";
import { fetchData } from "@/actions/fetchData";
import ProductViewImage from "./_components/ProductViewImage";
import ProductViewDescAndOthers from "./_components/ProductViewDescAndOthers";
import Specifications from "./_components/Specifications";
import RelatedProductsByCategory from "./_components/RelatedProductsByCategory";
import CustomerReview from "./_components/CustomerReview";
import SocialMediaAndOthers from "./_components/SocialMediaAndOthers";
import SpecBulkProduct from "./_components/SpecBulkProduct";
import SpecificationsMenu from "./_components/SpecificationsMenu";
import { cookies } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const product = await fetchData({
      route: `/product/slug/${params?.slug}`,
      pathToRevalidate: "product",
    });
    const metaTitle =
      product?.data?.seo?.metaTitle || product?.data?.productName;
    const metaDescription =
      product?.data?.seo?.metaDescription || product?.data?.productName;

    const ogImage = product?.data?.productPhotos[0];

    return {
      title: `${metaTitle}`,
      description: `${metaDescription}`,
      openGraph: {
        title: `${metaTitle}`,
        description: `${metaDescription}`,
        images: [
          {
            url: ogImage,
            width: 100,
            height: 100,
            alt: `Product OG Image`,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist!",
    };
  }
}

const ProductViewPage = async ({
  params,
  searchParams,
}: {
  params: { id: string; slug: string };
  searchParams: { sortBy: string };
}) => {
  // <== Get a product by productslugURL ==>
  const product = await fetchData({
    route: `/product/slug/${params?.slug}`,
  });

  // <== Get currency icon ==>
  const currencyIcon = await fetchData({
    route: `/settings/shop`,
  });

  // <== Get social media data ==>
  const socialMedia = await fetchData({
    route: "/settings/social-media",
  });

  // <== Quick Order Services ==>
  const quickOrderServices = await fetchData({
    route: "/settings/quick-order-setting",
  });

  const accessToken = cookies().get("accessToken")?.value;

  return (
    <div className="main-container px-5 mt-6">
      <div className="block md:hidden mb-5">
        <SocialMediaAndOthers socialMedia={socialMedia?.data} />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-16 md:gap-10 gap-5">
        <div>
          <ProductViewImage product={product?.data} />
        </div>
        <div className="md:flex-1">
          <ProductViewDescAndOthers
            product={product?.data}
            currencyIcon={currencyIcon?.data?.currencySymbol}
            shippingAmount={quickOrderServices?.data?.deliveryCharge}
            isQuickOrderActive={
              quickOrderServices?.data?.isQuickOrderServiceActive
            }
            socialMedia={socialMedia?.data}
            accessToken={accessToken ? accessToken : ""}
          />
        </div>
      </div>
      <ProductViewServices className="my-20" />
      <section>
        <SpecificationsMenu />
        <div className="flex justify-between md:gap-7 gap-0 w-full">
          <div className="w-full">
            <div>
              <Specifications product={product?.data} />
            </div>
            <div id="customerreview">
              <CustomerReview
                rating={Number(searchParams?.sortBy)}
                slug={params?.slug}
                productId={product?.data?._id}
                averageRating={product?.data?.averageRating}
              />
            </div>
          </div>
          <div>
            <SpecBulkProduct
              productdata={product?.data}
              currencyIcon={currencyIcon?.data?.currencySymbol}
              shippingAmount={quickOrderServices?.data?.deliveryCharge}
              accessToken={accessToken ? accessToken : ""}
              isQuickOrderActive={
                quickOrderServices?.data?.isQuickOrderServiceActive
              }
            />
          </div>
        </div>
      </section>
      <RelatedProductsByCategory
        categoryName={product?.data?.category?.categoryName}
        currencyIcon={currencyIcon?.data?.currencySymbol}
        shippingAmount={quickOrderServices?.data?.deliveryCharge}
        isQuickOrderActive={quickOrderServices?.data?.isQuickOrderServiceActive}
        productId={product?.data?._id}
      />
    </div>
  );
};

export default ProductViewPage;
