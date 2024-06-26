import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";
import WishlistProvider from "@/Provider/WishlistProvider";
import OrderInitProvider from "@/Provider/OrderInitDataProvider";
import CategoryProductFilteringProvider from "@/Provider/CategoryProductFilteringProvider";
import BrandProductFilteringProvider from "@/Provider/BrandProductFilteringProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <CartProvider>
        <WishlistProvider>
          <OrderInitProvider>
            <CategoryProductFilteringProvider>
              {/* main sections */}
              <BrandProductFilteringProvider>
                <Header />
                <section>{children}</section>
                <Footer />
              </BrandProductFilteringProvider>
              {/* main sections */}
            </CategoryProductFilteringProvider>
          </OrderInitProvider>
        </WishlistProvider>
      </CartProvider>
    </main>
  );
};

export default MainLayout;
