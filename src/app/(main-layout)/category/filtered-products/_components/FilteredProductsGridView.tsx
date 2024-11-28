import ProductEmptyState from "@/app/(main-layout)/_components/ProductEmptyState";
import CustomLoading from "@/Components/CustomLoader";
import Pagination from "@/Components/Pagination";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct, IProductApiResponse } from "@/interfaces/product.interface";

const FilteredProductsGridView = ({
  products,
  isLoading,
  currency,
  isQuickOrderActive,
  shippingAmount,
}: {
  products: IProductApiResponse;
  isLoading: boolean;
  currency: string;
  isQuickOrderActive: boolean;
  shippingAmount: number;
}) => {
  const totalPages = Math.ceil(products?.meta?.total / products?.meta?.limit);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CustomLoading />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 mb-10">
        <span className="text-lg">
          {products?.data?.length} Items result found
        </span>
        {products?.data?.length > 0 ? (
          <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
            {products?.data?.map((product: IProduct) => (
              <ProductCard
                currencyIcon={currency}
                isQuickOrderActive={isQuickOrderActive}
                shippingAmount={shippingAmount}
                key={product?._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <ProductEmptyState />
        )}
      </div>
      <div>
        {totalPages > 1 ? (
          <Pagination
            redirectTo="/category/filtered-products/page/"
            currentPage={1}
            totalPages={totalPages || 0}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilteredProductsGridView;
