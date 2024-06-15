import { storages } from "@/constants";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { formatProductForCart } from "./formatProductForCart.utils";

export interface IUpdateCartProps {
  actionType: "add" | "remove" | "decrease";
  product: ICartProduct | IProduct;
  variant?: IProductVariant;
}

export const updateCart = ({
  actionType,
  product,
  variant,
}: IUpdateCartProps) => {
  const prevCartItems = getLocalStorageData(
    storages.cartProducts
  ) as ICartProduct[];

  let updatedCartItems: ICartProduct[] = prevCartItems || [];
  // -----------------------------
  // to add an item or increase in the cart
  // -----------------------------
  if (actionType === "add") {
    let formattedProduct: ICartProduct = product as ICartProduct;
    if (!formattedProduct.hasOwnProperty("variant")) {
      formattedProduct = formatProductForCart({
        product: formattedProduct,
        selectedVariant: variant,
      });
    }
    // check is already product exist
    const existingIndex = prevCartItems.findIndex(
      (prevProduct) =>
        prevProduct?._id === formattedProduct?._id &&
        prevProduct?.variant?.variantName ===
          formattedProduct?.variant?.variantName
    );
    const isAlreadyExist = prevCartItems.find(
      (prevProduct) =>
        prevProduct?._id === formattedProduct?._id &&
        prevProduct?.variant?.variantName ===
          formattedProduct?.variant?.variantName
    );
    // if exist update quantity else add as new one
    if (existingIndex !== -1 && isAlreadyExist) {
      updatedCartItems = [
        ...prevCartItems.slice(0, existingIndex),
        { ...isAlreadyExist, orderQuantity: isAlreadyExist.orderQuantity + 1 },
        ...prevCartItems.slice(existingIndex + 1),
      ];
    } else {
      updatedCartItems = [...prevCartItems, formattedProduct];
    }
  }
  // -----------------------------
  // to decrease quantity or remove in the cart
  // -----------------------------
  if (actionType === "decrease") {
    let formattedProduct = product as ICartProduct;
    // check is already product exist
    const existingIndex = prevCartItems.findIndex(
      (prevProduct) =>
        prevProduct?._id === formattedProduct?._id &&
        prevProduct?.variant?.variantName ===
          formattedProduct?.variant?.variantName
    );
    const isAlreadyExist = prevCartItems.find(
      (prevProduct) =>
        prevProduct?._id === formattedProduct?._id &&
        prevProduct?.variant?.variantName ===
          formattedProduct?.variant?.variantName
    );
    // if exist update quantity else add as new one

    if (
      existingIndex !== -1 &&
      isAlreadyExist &&
      isAlreadyExist?.orderQuantity > 1
    ) {
      updatedCartItems = [
        ...prevCartItems.slice(0, existingIndex),
        { ...isAlreadyExist, orderQuantity: isAlreadyExist.orderQuantity - 1 },
        ...prevCartItems.slice(existingIndex + 1),
      ];
    } else if (isAlreadyExist) {
      updatedCartItems = prevCartItems.filter(
        (prevProduct) => prevProduct?._id !== product?._id
      );
    }
  }

  // -----------------------------
  //   to remove an item from cart
  // -----------------------------
  if (actionType === "remove") {
    updatedCartItems = prevCartItems.filter(
      (prevProduct) => prevProduct?._id !== product?._id
    );
  }

  // update new data
  // if accessToken exist then update both else local storage only
  setLocalStorageData(storages.cartProducts, updatedCartItems);
};
