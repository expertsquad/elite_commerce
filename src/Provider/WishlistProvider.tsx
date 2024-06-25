"use client";

import { storages } from "@/constants";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { IWishlistProduct } from "@/interfaces/wishlist.interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

// props interface
interface IWishlistProviderProps {
  wishlistProducts: IWishlistProduct[];
  setRefetch: Dispatch<SetStateAction<number>>;
  setWishlistProducts: Dispatch<SetStateAction<IWishlistProduct[]>>;
}
// initial state
const initialState = {
  wishlistProducts: [],
  setRefetch: () => {},
  setWishlistProducts: () => {},
};
// context
export const WishlistContext =
  createContext<IWishlistProviderProps>(initialState);

// Provider
const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistProducts, setWishlistProducts] = useState<
    IWishlistProduct[] | []
  >([]);
  const [refetch, setRefetch] = useState(0); //   get data from local storage

  useEffect(() => {
    setWishlistProducts(getLocalStorageData(storages.wishlistProducts) || []);
  }, [refetch]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts,
        setRefetch,
        setWishlistProducts,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
