import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CartProvider from "@/Provider/CartProvider";
import WishlistProvider from "@/Provider/WishlistProvider";
import OrderInitProvider from "@/Provider/OrderInitDataProvider";
import CategoryProductFilteringProvider from "@/Provider/CategoryProductFilteringProvider";
import BrandProductFilteringProvider from "@/Provider/BrandProductFilteringProvider";
import UserProvider from "@/Provider/UserProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <OrderInitProvider>
              <CategoryProductFilteringProvider>
                <BrandProductFilteringProvider>
                  {/* main sections */}
                  <Header />
                  <section>{children}</section>
                  <Footer />
                  {/* main sections */}
                </BrandProductFilteringProvider>
              </CategoryProductFilteringProvider>
            </OrderInitProvider>
          </WishlistProvider>
        </CartProvider>
      </UserProvider>
    </main>
  );
};

export default MainLayout;
