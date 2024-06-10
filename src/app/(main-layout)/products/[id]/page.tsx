import React from "react";
import ProductViewServices from "./_components/ProductViewServices";
import { fetchData } from "@/actions/fetchData";
import ProductVariantColor from "./_components/ProductVariantColor";
import ProductViewImage from "./_components/ProductViewImage";
import ProductViewDescAndOthers from "./_components/ProductViewDescAndOthers";
import Specifications from "./_components/Specifications";
import RelatedProductsByCategory from "./_components/RelatedProductsByCategory";
import CustomerReview from "./_components/CustomerReview";

const ProductViewPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetchData({
    route: `/product/${params?.id}`,
  });

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-16 md:gap-3 gap-7">
        <div>
          <ProductViewImage product={response?.data} />
        </div>
        <div className="md:flex-1">
          <ProductViewDescAndOthers product={response?.data} />
        </div>
      </div>
      <ProductViewServices />
      <Specifications product={response?.data} />
      {/* == Customer Review == */}
      <div id="customerreview">
        <CustomerReview productId={params?.id} />
      </div>
      <RelatedProductsByCategory
        categoryName={response?.data?.category?.categoryName}
      />
    </div>
  );
};

export default ProductViewPage;
