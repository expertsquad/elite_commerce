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

const ProductViewPage = async ({
  params,
}: {
  params: { id: string; slug: string };
}) => {
  const product = await fetchData({
    route: `/product/slug/${params?.slug}`,
  });

  const currencyIcon = await fetchData({
    route: `/settings/shop`,
  });
  const socialMedia = await fetchData({
    route: "/settings/social-media",
  });

  const accessToken = cookies().get("accessToken")?.value;

  return (
    <div className="main-container px-5 mt-6">
      <div className="block md:hidden mb-5">
        <SocialMediaAndOthers />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-16 md:gap-10 gap-5">
        <div>
          <ProductViewImage product={product?.data} />
        </div>
        <div className="md:flex-1">
          <ProductViewDescAndOthers
            product={product?.data}
            currencyIcon={currencyIcon?.data?.currencySymbol}
          />
        </div>
      </div>
      <ProductViewServices />
      <section>
        <SpecificationsMenu />
        <div className="flex justify-between md:gap-7 gap-0 w-full">
          <div className="w-full">
            <div>
              <Specifications product={product?.data} />
            </div>
            <div id="customerreview">
              <CustomerReview
                productId={params?.id}
                averageRating={product?.data?.averageRating}
              />
            </div>
          </div>
          <div>
            <SpecBulkProduct
              productdata={product?.data}
              currencyIcon={currencyIcon?.data?.currencySymbol}
              accessToken={accessToken!}
            />
          </div>
        </div>
      </section>
      <RelatedProductsByCategory
        categoryName={product?.data?.category?.categoryName}
      />
    </div>
  );
};

export default ProductViewPage;
