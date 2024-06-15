import { ICartProduct } from "@/interfaces/cart.interface";
import { IProduct } from "@/interfaces/product.interface";

export const formatProductForCart = ({
  product,
  selectedVariant,
}: {
  product: IProduct;
  selectedVariant?: Record<string, any>;
}): ICartProduct => {
  const isSelectedOneExist = product?.variants?.find(
    (v) => v.variantName === selectedVariant?.variantName
  );
  const defaultVariant = product?.variants?.find((v) => v.isDefault);
  const variant = isSelectedOneExist
    ? isSelectedOneExist
    : defaultVariant
    ? defaultVariant
    : product?.variants[0];

  return {
    ...product,
    brandName: product?.brand?.brandName,
    variant,
    orderQuantity: 1,
    productPhoto: product?.productPhotos?.length
      ? product.productPhotos[0]
      : "",
    productId: product?._id,
  };
};
