// components/ClientProvider.js
"use client";

import useGetColors from "@/utils/getColors";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  useGetColors();

  return <>{children}</>;
};

export default ClientProvider;
