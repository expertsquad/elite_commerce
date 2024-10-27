import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProduct = async ({
  product,
  currencySymbol,
}: {
  product: IProduct;
  currencySymbol: string;
}) => {
  return (
    <Link
      href={`/products/${product?._id}`}
      className="flex items-center border rounded border-black-10 p-3 gap-3 max-w-[350px]"
    >
      <div className="w-20 h-20 relative ">
        <Image
          src={server_url + product?.productPhotos[0]}
          alt="featured-products"
          fill
          className="object-contain h-full w-full inset-0"
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
    </Link>
  );
};
