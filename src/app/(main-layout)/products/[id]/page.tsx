import React from "react";
import ProductViewServices from "./_components/ProductViewServices";
import { fetchData } from "@/actions/fetchData";
import ProductVariantColor from "./_components/ProductVariantColor";
import ProductViewImage from "./_components/ProductViewImage";
import ProductViewDescAndOthers from "./_components/ProductViewDescAndOthers";

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
    </div>
  );
};

export default ProductViewPage;
