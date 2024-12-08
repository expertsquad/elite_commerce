import { fetchProtectedData } from "@/actions/fetchData";
import { getLocalStorageData } from "./localStorage.helper";
import { storages } from "@/constants";
import { mergeProducts } from "@/utils/mergeProduct.utils";
import { updatedWishlistMutation } from "@/utils/updateWishlist.utils";

export const getWishlistRemoteAndLocalDataAndMerge = async () => {
  try {
    const remoteWishlist = await fetchProtectedData({
      route: "/wishlist/me",
      pathToRevalidate: "/wishlist",
    });
    const localProducts = getLocalStorageData(storages.wishlistProducts) || [];
    const remoteProducts = remoteWishlist?.data?.products || [];
    const mergedProducts = mergeProducts(localProducts, remoteProducts);
    await updatedWishlistMutation(mergedProducts);
  } catch (error) {
    // console.log(error);
  }
};
