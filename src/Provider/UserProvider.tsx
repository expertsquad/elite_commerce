"use client";

import { fetchProtectedData } from "@/actions/fetchData";
import { IUserMe } from "@/interfaces/getMe.interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

// props interface
interface IUserProviderProps {
  user: Partial<IUserMe>;
  setRefetch: Dispatch<SetStateAction<number>>;
}
// initial state
const initialState = {
  user: {},
  setRefetch: () => {},
};
// context
export const UserContext = createContext<IUserProviderProps>(initialState);

// Provider
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserMe | {}>(initialState.user);
  const [refetch, setRefetch] = useState<number>(0);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await fetchProtectedData({ route: "/user/me" });
        setUser(data);
      } catch (error) {
        // err
      }
    };
    getData();
  }, [refetch]);
  return (
    <UserContext.Provider
      value={{
        user,
        setRefetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
