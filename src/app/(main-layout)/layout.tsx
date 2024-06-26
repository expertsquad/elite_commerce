import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";
import WishlistProvider from "@/Provider/WishlistProvider";
import OrderInitProvider from "@/Provider/OrderInitDataProvider";
import FilterProvider from "@/Provider/FilteringProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <CartProvider>
        <WishlistProvider>
          <OrderInitProvider>
            <FilterProvider>
              {/* main sections */}
              <Header />
              <section>{children}</section>
              <Footer />
              {/* main sections */}
            </FilterProvider>
          </OrderInitProvider>
        </WishlistProvider>
      </CartProvider>
    </main>
  );
};

export default MainLayout;
