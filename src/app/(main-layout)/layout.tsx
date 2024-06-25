import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";
import WishlistProvider from "@/Provider/WishlistProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <CartProvider>
        <WishlistProvider>
          <Header />
          <section>{children}</section>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </main>
  );
};

export default MainLayout;
