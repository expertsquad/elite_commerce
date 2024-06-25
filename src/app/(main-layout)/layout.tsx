import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";
import WishlistProvider from "@/Provider/WishlistProvider";
import OrderInitProvider from "@/Provider/OrderInitDataProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <CartProvider>
        <WishlistProvider>
          <OrderInitProvider>
            <Header />
            <section>{children}</section>
            <Footer />
          </OrderInitProvider>
        </WishlistProvider>
      </CartProvider>
    </main>
  );
};

export default MainLayout;
