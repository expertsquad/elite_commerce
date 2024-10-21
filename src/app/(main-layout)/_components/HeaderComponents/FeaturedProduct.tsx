import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";

export const FeaturedProduct = async ({
  product,
  currencySymbol,
}: {
  product: IProduct;
  currencySymbol: string;
}) => {
  return (
    <div className="flex items-center border rounded border-black-10 p-3 gap-3">
      <div className="w-20 h-20 relative ">
        <Image
          src={server_url + product?.productPhotos[0]}
          alt="featured-products"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-black-80 line-clamp-2">
          {product?.productName}
        </p>
        <strong className="text-sm text-gradient-primary font-semibold">
          {currencySymbol}{" "}
          {product?.variant?.discountedPrice
            ? product?.variant?.discountedPrice
            : product?.variant?.sellingPrice
            ? product?.variant?.sellingPrice
            : product?.variants[0].sellingPrice}
        </strong>
      </div>
    </div>
  );
};
