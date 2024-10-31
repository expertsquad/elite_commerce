import { IProduct, IProductVariant } from "@/interfaces/product.interface";

export const handleIncreaseQuickOrderQuantity = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>,
  variant: IProductVariant
) => {
  setProductList((prev) =>
    prev?.map((product) =>
      product?._id === productId &&
      product?.variant?.variantName === variant?.variantName
        ? {
            ...product,
            orderQuantity: Math.min(
              product.orderQuantity + 1,
              product?.variant?.inStock
            ),
          }
        : product
    )
  );
};

export const handleDecreaseQuickOrderQuantity = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>,
  variant: IProductVariant
) => {
  setProductList((prev) =>
    prev?.map((product) =>
      product?._id === productId &&
      product?.variant?.variantName === variant?.variantName &&
      product?.orderQuantity > 1
        ? { ...product, orderQuantity: product?.orderQuantity - 1 }
        : product
    )
  );
};

export const handleRemoveQuickOrderProduct = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>,
  variant: IProductVariant
) => {
  setProductList((prev) =>
    prev?.filter(
      (product) =>
        product?._id !== productId ||
        product?.variant?.variantName !== variant?.variantName
    )
  );
};
