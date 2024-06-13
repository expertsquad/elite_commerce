import { IProduct } from "@/interfaces/product.interface";

export const formatProductForCart = ({
  product,
  selectedVariant,
  orderQuantity,
}: {
  product: IProduct;
  selectedVariant?: Record<string, any>;
  orderQuantity?: number;
}) => {
  const isSelectedOneExist = product?.variants?.find(
    (v) => v.variantName === selectedVariant?.variantName
  );
  const variant = isSelectedOneExist
    ? isSelectedOneExist
    : product?.variants?.find((v) => v.isDefault);

  return {
    ...product,
    brandName: product?.brand?.brandName,
    variant,
    price: variant?.discountedPrice
      ? variant.discountedPrice
      : variant?.sellingPrice,
    orderQuantity: orderQuantity ? orderQuantity : 1,
    productPhoto: product?.productPhotos?.length
      ? product.productPhotos[0]
      : "",
    productId: product?._id,
  };
};
