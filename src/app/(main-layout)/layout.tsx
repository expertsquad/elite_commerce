import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <CartProvider>
        <Header />
        <section>{children}</section>
        <Footer />
      </CartProvider>
    </main>
  );
};

export default MainLayout;
