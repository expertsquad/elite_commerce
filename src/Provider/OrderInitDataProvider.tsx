"use client";
import { storages } from "@/constants";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { IAddress } from "@/interfaces/address.interface";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IPayment } from "@/interfaces/payment.interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

// props interface
export interface IOrderData {
  orderItems: ICartProduct[];
  shippingAddress: IAddress | {};
  billingAddress: IAddress | {};
  payment: IPayment | {};
}
interface IOrderProviderProps {
  orderData: IOrderData;
  setOrderData: Dispatch<SetStateAction<IOrderData>>;
  setRefetch: Dispatch<SetStateAction<number>>;
}

export const orderInitInitialValue = {
  orderItems: [],
  shippingAddress: {},
  billingAddress: {},
  payment: {},
};

// initial state
const initialState = {
  orderData: orderInitInitialValue,
  setOrderData: () => {},
  setRefetch: () => {},
};

// context
export const OrderInitContext =
  createContext<IOrderProviderProps>(initialState);

// Provider
const OrderInitProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderData, setOrderData] = useState<IOrderData>(
    initialState.orderData
  );
  const [refetch, setRefetch] = useState(0);
  useEffect(() => {
    setOrderData(getLocalStorageData(storages.orderInit));
  }, [refetch]);
  return (
    <OrderInitContext.Provider
      value={{
        orderData,
        setOrderData,
        setRefetch,
      }}
    >
      {children}
    </OrderInitContext.Provider>
  );
};

export default OrderInitProvider;
