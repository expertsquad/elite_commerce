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
  quantity?: number;
}

export const updateCart = async ({
  actionType,
  product,
  variant,
  quantity,
}: IUpdateCartProps) => {
  const prevCartItems =
    (getLocalStorageData(storages.cartProducts) as ICartProduct[]) || [];

  let updatedCartItems: ICartProduct[] = prevCartItems || [];
  // -----------------------------
  // to add an item or increase in the cart
  // -----------------------------
  // if (actionType === "add") {
  //   let formattedProduct: ICartProduct = product as ICartProduct;
  //   if (!formattedProduct.hasOwnProperty("variant")) {
  //     formattedProduct = formatProductForCart({
  //       product: formattedProduct,
  //       selectedVariant: variant?.variantName,
  //     });
  //   }
  //   // check is already product exist
  //   const existingIndex = prevCartItems.findIndex(
  //     (prevProduct) =>
  //       prevProduct?._id === formattedProduct?._id &&
  //       prevProduct?.variant?.variantName ===
  //         formattedProduct?.variant?.variantName
  //   );
  //   const isAlreadyExist = prevCartItems.find(
  //     (prevProduct) =>
  //       prevProduct?._id === formattedProduct?._id &&
  //       prevProduct?.variant?.variantName ===
  //         formattedProduct?.variant?.variantName
  //   );
  //   // if exist update quantity else add as new one
  //   if (existingIndex !== -1 && isAlreadyExist) {
  //     updatedCartItems = [
  //       ...prevCartItems.slice(0, existingIndex),
  //       { ...isAlreadyExist, orderQuantity: isAlreadyExist.orderQuantity + 1 },
  //       ...prevCartItems.slice(existingIndex + 1),
  //     ];
  //   } else {
  //     updatedCartItems = [...prevCartItems, formattedProduct];
  //   }
  // }

  if (actionType === "add") {
    let formattedProduct: ICartProduct = product as ICartProduct;
    if (!formattedProduct.hasOwnProperty("variant")) {
      formattedProduct = formatProductForCart({
        product: formattedProduct,
        selectedVariant: variant?.variantName,
      });
    }

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

    // If the product exists, update the quantity; otherwise, add as a new item
    if (existingIndex !== -1 && isAlreadyExist) {
      updatedCartItems = [
        ...prevCartItems.slice(0, existingIndex),
        {
          ...isAlreadyExist,
          orderQuantity: isAlreadyExist.orderQuantity + (quantity || 1),
        },
        ...prevCartItems.slice(existingIndex + 1),
      ];
    } else {
      // Set initial quantity if provided, otherwise default to 1
      updatedCartItems = [
        ...prevCartItems,
        { ...formattedProduct, orderQuantity: quantity || 1 },
      ];
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
    }
    // else if (isAlreadyExist) {
    //   updatedCartItems = prevCartItems.filter(
    //     (prevProduct) => prevProduct?._id !== product?._id
    //   );
    // }
  }

  // -----------------------------
  //   to remove an item from cart
  // -----------------------------
  // <== Remove this code, Here we have checking product is exist or not and also product has multiple variant or not ==>
  if (actionType === "remove") {
    updatedCartItems = prevCartItems?.filter(
      (prevProduct) =>
        !(
          prevProduct?._id === product?._id &&
          prevProduct?.variant?.variantName === variant?.variantName
        )
    );
  }

  // update new data
  // if accessToken exist then update both else local storage only
  await updatedCartMutation(updatedCartItems);
};

export const updatedCartMutation = async (updatedCartItems: ICartProduct[]) => {
  setLocalStorageData(
    storages.cartProducts,
    updatedCartItems?.map((item) => {
      return { ...item, variantName: item?.variant?.variantName };
    })
  );

  // update cart to the remote server
  await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: updatedCartItems }),
  });
};
