"use client";
import { IAddress } from "@/interfaces/address.interface";
import { ICartProduct } from "@/interfaces/cart.interface";
import { IPayment } from "@/interfaces/payment.interface";
import { Dispatch, SetStateAction, createContext, useState } from "react";

// props interface
interface IOrderData {
  orderItems: ICartProduct[] | [];
  shippingAddress: IAddress | {};
  billingAddress: IAddress | {};
  payment: IPayment | {};
}
interface IOrderProviderProps {
  orderData: IOrderData;
  setOrderData: Dispatch<SetStateAction<IOrderData>>;
}

// initial state
const initialState = {
  orderData: {
    orderItems: [],
    shippingAddress: {},
    billingAddress: {},
    payment: {},
  },
  setOrderData: () => {},
};

// context
export const OrderInitContext =
  createContext<IOrderProviderProps>(initialState);

// Provider
const OrderInitProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderData, setOrderData] = useState<IOrderData>(
    initialState.orderData
  );

  return (
    <OrderInitContext.Provider
      value={{
        orderData,
        setOrderData,
      }}
    >
      {children}
    </OrderInitContext.Provider>
  );
};

export default OrderInitProvider;
