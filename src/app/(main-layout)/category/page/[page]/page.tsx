import { fetchData } from "@/actions/fetchData";
import React from "react";
import SortingSection from "../../_components/FilterBySelection";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import Pagination from "@/Components/Pagination";

const ProductsPage = async ({ params }: { params: { page: number } }) => {
  const products = await fetchData({
    route: "/product",
    page: params?.page,
    limit: 20,
  });

  const totalPages = Math.ceil(products?.meta?.total / products?.meta?.limit);

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
          <ProductCard key={product?._id} product={product} />
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
