import React, { Fragment } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />

      <section className="max-w-7xl mx-auto p-3">{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
