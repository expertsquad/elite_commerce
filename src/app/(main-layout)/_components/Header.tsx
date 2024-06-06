import React from "react";
import LargeDeviceMegaMenu from "./HeaderComponents/LargeDeviceMegaMenu";

const Header = () => {
  return (
    <header className="border-b border-black-10 mb-3 sticky top-0 z-50 bg-white">
      <LargeDeviceMegaMenu />
    </header>
  );
};

export default Header;
