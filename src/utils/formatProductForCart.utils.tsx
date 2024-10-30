import { ICartProduct } from "@/interfaces/cart.interface";
import { IProduct } from "@/interfaces/product.interface";

export const formatProductForCart = ({
  product,
  selectedVariant,
  selectedQuantity,
}: {
  product: IProduct;
  selectedVariant?: string;
  selectedQuantity?: number;
}): ICartProduct => {
  const isSelectedOneExist = product?.variants?.find(
    (v) => v?.variantName === selectedVariant
  );
  const defaultVariant = product?.variants?.find((v) => v?.isDefault);
  // const variant = isSelectedOneExist
  //   ? isSelectedOneExist
  //   : defaultVariant
  //   ? defaultVariant
  //   : product?.variants[0];
  const variant = isSelectedOneExist ?? defaultVariant ?? product.variants[0];

  return {
    ...product,
    brandName: product?.brand?.brandName,
    variant,
    orderQuantity: selectedQuantity ? selectedQuantity : 1,
    productPhoto: product?.productPhotos?.length
      ? product.productPhotos[0]
      : "",
    productId: product?._id,
  };
};
