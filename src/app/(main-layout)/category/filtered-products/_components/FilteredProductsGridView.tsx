import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";

const FilteredProductsGridView = ({ products }: { products: IProduct[] }) => {
  if (products?.length === 0) {
    return (
      <div className="flex text-center mt-20 justify-center items-center">
        <span className="text-lg">No products found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 mb-10">
      <span className="text-lg">{products?.length} Items result found</span>
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {products?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilteredProductsGridView;
