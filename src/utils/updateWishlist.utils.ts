import { storages } from "@/constants";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { IProduct } from "@/interfaces/product.interface";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import { formatProductForCart } from "./formatProductForCart.utils";

export const updateWishlist = async ({
  product,
}: {
  product: IWishlistProduct | IProduct;
}) => {
  const prevWishlistItems =
    (getLocalStorageData(storages.wishlistProducts) as IWishlistProduct[]) ||
    [];

  let updatedWishlistItems: IWishlistProduct[] = prevWishlistItems || [];

  // check is already product exist
  const existingIndex = prevWishlistItems.findIndex(
    (prevProduct) => prevProduct?._id === product?._id
  );
  const isAlreadyExist = prevWishlistItems.find(
    (prevProduct) => prevProduct?._id === product?._id
  );
  // if exist remove the exist item else add as new one
  if (existingIndex !== -1 && isAlreadyExist) {
    updatedWishlistItems = [
      ...prevWishlistItems.slice(0, existingIndex),
      ...prevWishlistItems.slice(existingIndex + 1),
    ];
  } else {
    const formattedProduct = formatProductForCart({
      product,
    });
    updatedWishlistItems = [...prevWishlistItems, formattedProduct];
  }
  // update new data
  // if accessToken exist then update both else local storage only
  await updatedWishlistMutation(updatedWishlistItems);
};

export const updatedWishlistMutation = async (
  updatedWishlistItems: IWishlistProduct[]
) => {
  setLocalStorageData(
    storages.wishlistProducts,
    updatedWishlistItems.map((item) => {
      return { ...item, variantName: item?.variant?.variantName };
    })
  );
  // update wishlist to the remote server
  await fetch("/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: updatedWishlistItems }),
  });
};
