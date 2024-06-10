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
    <div className="max-w-7xl mx-auto">
      <div>
        <ProductViewImage />
        <ProductViewDescAndOthers product={response?.data} />
      </div>
      <ProductViewServices />
      <Specifications product={response?.data} />
      {/* == Customer Review == */}
      <div id="customerreview">
        <CustomerReview />
      </div>
      <RelatedProductsByCategory
        categoryName={response?.data?.category?.categoryName}
      />
    </div>
  );
};

export default ProductViewPage;
