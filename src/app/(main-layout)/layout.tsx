import React, { Fragment } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import BottomNavigation from "./brands/_components/BottomNavigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
      <BottomNavigation />
    </main>
  );
};

export default MainLayout;
