import ProductImageSlider from "./ProductImageSlider";
import { IProduct } from "@/interfaces/product.interface";
import { Button } from "@/Components/Buttons";
import StarRating from "./StarRating";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div
      // onClick={handleViewProduct}
      className="border hover:border-fuchsia-700 rounded-custom-10px group w-[calc(300px,2vw,185px)]  md:min-h-[400px] min-h-[300px] cursor-pointer duration-500  "
    >
      <div className="bg-gradient-primary-light p-4">
        <ProductImageSlider
          // loading={loading}
          product={product}
          // defaultVariant={defaultVariant}
        />
      </div>

      <div className="pt-4 border-t p-4">
        <div className="flex flex-col gap-[5px]">
          <h3 className="[font-size:_clamp(0.7em,4vw,1em)] line-clamp-1 ">
            {product?.productName}
          </h3>
          <span className=" text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] ">
            {" "}
            {product?.brand?.brandName}
          </span>

          <StarRating rating={Math.round(5)} />
        </div>

        <div className="flex items-baseline justify-start gap-2 my-3.5 whitespace-nowrap">
          <h4 className="[font-size:_clamp(0.6em,4vw,1.1em)] main-text-color font-bold">
            {50}
            {}
            QAR
          </h4>

          <del className="text-md text text-gray-500 [font-size:_clamp(0.5em,4vw,0.8em)] ">
            {0} QAR
          </del>
        </div>

        <Button>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
