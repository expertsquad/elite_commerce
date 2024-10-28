import { IProduct } from "@/interfaces/product.interface";

export const handleIncreaseQuickOrderQuantity = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>
) => {
  setProductList((prev) =>
    prev?.map((product) =>
      product?._id === productId
        ? { ...product, orderQuantity: product?.orderQuantity + 1 }
        : product
    )
  );
};

export const handleDecreaseQuickOrderQuantity = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>
) => {
  setProductList((prev) =>
    prev?.map((product) =>
      product?._id === productId && product?.orderQuantity > 1
        ? { ...product, orderQuantity: product?.orderQuantity - 1 }
        : product
    )
  );
};

export const handleRemoveQuickOrderProduct = (
  productId: string,
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>
) => {
  setProductList((prev) =>
    prev?.filter((product) => product?._id !== productId)
  );
};
