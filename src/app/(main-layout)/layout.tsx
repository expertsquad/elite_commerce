import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
