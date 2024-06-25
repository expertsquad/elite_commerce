"use client";

import { storages } from "@/constants";
import calculateTotalPriceAndDiscountOfCart from "@/helpers/calculateTotalPriceAndDiscountOfCart";
import { getLocalStorageData } from "@/helpers/localStorage.helper";
import { ICartProduct } from "@/interfaces/cart.interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

const shippingFee = 100;

// props interface
interface ICartProviderProps {
  cartProducts: ICartProduct[];
  calculateTotalPriceAndDiscountOfCart: (products: ICartProduct[]) => {
    totalPrice: number;
    totalDiscount: number;
  };
  shippingFee: number;
  setRefetch: Dispatch<SetStateAction<number>>;
}

// initial state
const initialState = {
  cartProducts: [],
  calculateTotalPriceAndDiscountOfCart,
  shippingFee,
  setRefetch: () => {},
};

// context
export const CartContext = createContext<ICartProviderProps>(initialState);

// Provider
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [refetch, setRefetch] = useState(0); //   get data from local storage

  useEffect(() => {
    setCartProducts(getLocalStorageData(storages.cartProducts) || []);
  }, [refetch]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        calculateTotalPriceAndDiscountOfCart,
        shippingFee,
        setRefetch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
