import SocialMediaAndOthers from "./SocialMediaAndOthers";
import ProductVariantColor from "./ProductVariantColor";
import { IProduct } from "@/interfaces/product.interface";
import CategoryAndBrandSmallComponent from "./CategoryAndBrandSmallComponent";
import RatingWishlistStockAndSold from "./RatingWishlistStockAndSold";
import {
  IconBolt,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";
import GenerateGradientIcon from "@/Components/GenerateGradientIcon";

const ProductViewDescAndOthers = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <SocialMediaAndOthers />
      <span className="font-semibold text-lg md:text-2xl line-clamp-2 my-5">
        {product?.productName}
      </span>
      <CategoryAndBrandSmallComponent
        categoryName={product?.category?.categoryName}
        brandPhoto={product?.brand?.brandPhoto}
      />
      <div className="my-5">
        <RatingWishlistStockAndSold
          averageRating={product?.averageRating}
          instock={product?.variants[0].inStock}
          soldQuantity={product?.variants[0].soldQuantity}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="text-2xl font-bold text-gradient-primary">
          ${product?.variants[0].discountPercentage}
        </span>
        <span className="text-black-50">|</span>
        <del className="text-base text-black-50">
          ${product?.variants[0].sellingPrice}
        </del>
        <span className="text-black-50">|</span>
        <span className="text-sm text-gradient-secondary px-2 py-0.5 border border-black-10 rounded-full">
          ${product?.variants[0].discountPercentage}% OFF
        </span>
      </div>
      <div className="flex items-center gap-x-5 my-5">
        <div>
          <span className="text-sm text-black-80">Color</span>
          <div className="flex items-center gap-x-2">
            <ProductVariantColor variants={product?.variants} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3 mb-5">
          <div className="flex items-center justify-center gap-x-2 py-2 px-3 border border-black-10 rounded-full">
            <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
              <IconMinus width={20} height={18} />
            </button>
            <span className="text-black-50">{0}</span>
            <button className="text-black-50 bg-black-10 p-0.5 rounded-full">
              <IconPlus width={20} height={18} />
            </button>
          </div>
          <div className="border-gradient-primary p-[1px] rounded-md w-full">
            <button className="text-gradient-primary flex items-center justify-center gap-x-1.5 w-full py-2">
              <GenerateGradientIcon
                IconComponent={IconShoppingCart}
                stroke={2}
                size={20}
              />
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          <div className="bg-gradient-primary-light rounded-md w-full">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-x-1.5 text-gradient-primary py-2"
            >
              <GenerateGradientIcon
                IconComponent={IconShoppingBag}
                stroke={2}
                size={20}
              />
              BUY NOW
            </Link>
          </div>
          <button className="text-white bg-gradient-primary flex items-center justify-center gap-x-1.5 py-2 rounded-md w-full">
            <IconBolt fill="#fff" size={20} />
            QUICK ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewDescAndOthers;
